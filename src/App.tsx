import React, { Fragment, useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { useGetArtworkQuery, Category } from './graphql/types';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { data } = useGetArtworkQuery({
    variables: {
      where: { AND: [{ category: Category.Painting }] },
      orderBy: null,
    },
  });

  const openLightbox = useCallback((event, arg) => {
    console.log('click', arg);
    setCurrentImage(arg.index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  interface Photo {
    src: string;
    width: number;
    height: number;
    title: string;
  }

  console.log(data);
  if (!data || !data.assets) return <div>No data</div>;
  const photos = data.assets
    .map(asset => {
      if (asset) {
        return {
          src: asset.url,
          width: asset.width,
          height: asset.height,
          title: asset.title,
        };
      }
      return null;
    })
    .filter(Boolean) as Photo[];
  return (
    <Fragment>
      <h2>Home</h2>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo: any) => ({
                ...photo,
                // srcset: x.srcSet,
                caption: photo.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  );
};

const About = () => {
  return <h2>About</h2>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
