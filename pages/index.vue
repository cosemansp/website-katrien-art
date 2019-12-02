<template>
  <Layout>
    <!-- Begin Wrapper -->
    <div class="wrapper">
      <!-- Begin Horizontal Gallery -->
      <div class="gallery-h centered">
        <div class="nav">
          <a href="#" class="prev icon4-leftarrow23"></a>
          <a href="#" class="next icon4-chevrons"></a>
        </div>

        <div class="gallery clearfix">
          <div class="container">
            <div
              :class="{ active: work.isActive }"
              class="img"
              v-for="work in artwork"
              :key="work.id"
            >
              <a :href="work.url" rel="gallery">
                <img
                  class="lazy"
                  :src="work.url"
                  alt=""
                  :data-width="work.width"
                  :data-height="work.height"
                />
              </a>
            </div>

            <!-- <div class="img">
              <a href="images/gallery/g5_2.jpg" rel="gallery">
                <img
                  class="lazy"
                  src="images/gallery/g5_2.jpg"
                  alt=""
                  data-width="840"
                  data-height="1260"
                />
              </a>
            </div>

            <div class="img active">
              <a href="images/gallery/g5_3.jpg" rel="gallery">
                <img
                  class="lazy"
                  src="images/gallery/g5_3.jpg"
                  alt=""
                  data-width="2048"
                  data-height="1367"
                />
              </a>
            </div>

            <div class="img">
              <a href="images/gallery/g5_4.jpg" rel="gallery">
                <img
                  class="lazy"
                  src="images/gallery/g5_4.jpg"
                  alt=""
                  data-width="2048"
                  data-height="1356"
                />
              </a>
            </div>

            <div class="img">
              <a href="images/gallery/g5_5.jpg" rel="gallery">
                <img
                  class="lazy"
                  data-original="images/gallery/g5_5.jpg"
                  alt=""
                  data-width="584"
                  data-height="1024"
                />
              </a>
            </div>

            <div class="img">
              <a href="images/gallery/g5_6.jpg" rel="gallery">
                <img
                  class="lazy"
                  data-original="images/gallery/g5_6.jpg"
                  alt=""
                  data-width="2048"
                  data-height="1362"
                />
              </a>
            </div> -->
          </div>
        </div>
      </div>
      <!-- End Horizontal Gallery -->
    </div>
    <!-- End Wrapper -->
  </Layout>
</template>

<script>
import gql from 'graphql-tag';
import Layout from '../components/layout';

export const homes = gql`
  query {
    homes(where: { status: PUBLISHED }) {
      siteTitle
      copyright
      artwork(orderBy: sort_DESC) {
        id
        height
        width
        thumbnailUrl: url(
          transformation: { image: { resize: { width: 470, fit: scale } } }
        )
        url
        title
        description
        dimension
      }
    }
  }
`;

export default {
  components: {
    Layout
  },
  apollo: {
    homes: {
      query: homes,
      result({ data, loading, networkStatus }) {
        this.home = data.homes[0]; // there is only one home
        this.artwork = data.homes[0].artwork;
        this.artwork[1] = {
          ...this.artwork[1],
          isActive: true
        };
      }
    }
  },
  mounted() {
    console.log('assets', this.home);
  }
};
</script>

<style></style>
