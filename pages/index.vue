<template>
  <Layout>
    <div class="wrapper">
      <!-- Begin Horizontal Gallery -->
      <div class="gallery-h normal">
        <div class="nav">
          <a href="#" class="prev icon4-leftarrow23"></a>
          <a href="#" class="next icon4-chevrons"></a>
        </div>

        <div class="gallery clearfix">
          <div class="container">
            <div class="img" v-for="asset in assets" :key="asset.id">
              <a
                :href="asset.url"
                rel="gallery"
                :data-title="asset.title + ' - ' + asset.description"
              >
                <img
                  :src="asset.url"
                  alt=""
                  :data-width="asset.width"
                  :data-height="asset.height"
                />
              </a>
            </div>
          </div>

          <div class="nav">
            <a href="#" class="full icon4-fullscreen6"></a>
          </div>
        </div>
      </div>
      <!-- End Horizontal Gallery -->
    </div>
  </Layout>
</template>

<script>
import gql from 'graphql-tag'
import Layout from '../components/layout'

export const assets = gql`
  query assets {
    assets {
      id
      status
      height
      width
      url
      title
      description
    }
  }
`

export default {
  components: {
    Layout
  },
  apollo: {
    assets: {
      query: assets
    }
  },
  mounted() {
    console.log('assets', this.assets)
  }
}
</script>

<style></style>
