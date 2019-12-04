<template>
  <Layout>
    <!-- Begin Wrapper -->
    <div class="wrapper">
      <!-- Begin Inner Wrapper -->
      <div class="inner-wrapper">
        <div class="content-inner">
          <!-- Begin Post -->
          <div class="blog-single fullwidth">
            <div class="container">
              <!-- Begin Article -->
              <div class="article clearfix">
                <div class="media">
                  <img :src="page.featuredImage.url" alt="" />
                </div>

                <h4 class="title">{{ page.title }}</h4>

                <div class="content">
                  <div v-html="page.text.html"></div>
                  <!-- <div class="footer clearfix">
                    <div class="info-box share">
                      <p class="desc">SHARE</p>
                      <p class="info">
                        <a href="#" class="icon1-facebook"></a>
                        <a href="#" class="icon3-pinterest"></a>
                        <a href="#" class="icon1-google-plus"></a>
                      </p>
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- End Article -->
            </div>
          </div>
          <!-- End Post -->
        </div>
      </div>
      <!-- End Inner Wrapper -->
    </div>
    <!-- End Wrapper -->
  </Layout>
</template>

<script>
import gql from 'graphql-tag';
import Layout from '../../components/layout';

export const pages = gql`
  query getPages($slug: String) {
    pages(where: { status: PUBLISHED, slug: $slug }) {
      status
      id
      title
      featuredImage {
        url
      }
      text {
        html
      }
    }
  }
`;

export default {
  components: {
    Layout
  },
  apollo: {
    pages: {
      query: pages,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      },
      result({ data, loading, networkStatus }) {
        this.page = data.pages[0];
      }
    }
  },
  mounted() {
    console.log('pages', this.pages);
    console.log('route', this.$route);
  }
};
</script>

<style></style>
