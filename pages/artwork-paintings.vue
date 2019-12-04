<template>
  <Layout>
    <!-- Begin Wrapper -->
    <div class="wrapper">
      <!-- Begin Inner Wrapper -->
      <div class="inner-wrapper">
        <!-- Begin Gallery -->
        <div class="gallery-images masonry style-title high-space">
          <div class="row">
            <div class="col full">
              <div class="filters clearfix" data-style="scale">
                <p>FILTERS</p>
                <a href="#" data-filter="*" class="active">ALL</a>
                <a
                  href="#"
                  :data-filter="getFilter(subcat.name)"
                  v-for="subcat in subcategories"
                  :key="subcat.name"
                  >{{ subcat.caption }}</a
                >
              </div>
            </div>
          </div>

          <div class="images clearfix cols-4">
            <div
              class="img"
              :class="[
                getFilterClasses(asset),
                {
                  'size-wide': asset.width > asset.height * 2,
                  'size-regular': asset.width < asset.height * 2
                }
              ]"
              v-for="asset in assets"
              :key="asset.id"
            >
              <div class="img-cont">
                <img
                  :src="asset.thumbnailUrl"
                  alt=""
                  :data-width="asset.width"
                  :data-height="asset.height"
                />

                <div class="overlay">
                  <a
                    class="preview icon4-eyeball5"
                    v-bind:style="{
                      display: 'block',
                      height: '100%'
                    }"
                    rel="gallery"
                    :href="asset.url"
                    :data-title="asset.caption"
                    ><h5>{{ asset.title }}</h5>
                    <h6>{{ asset.description }}</h6></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Gallery -->
      </div>
      <!-- End Inner Wrapper -->
    </div>
    <!-- End Wrapper -->
  </Layout>
</template>

<script>
import Layout from '../components/layout'
import gql from 'graphql-tag'

export const assets = gql`
  query assets {
    assets(where: { category: Painting }, orderBy: sort_DESC) {
      id
      status
      height
      width
      thumbnailUrl: url(
        transformation: { image: { resize: { width: 400, fit: scale } } }
      )
      url
      title
      description
      dimension
      subcategory
    }
    __type(name: "Subcategory") {
      name
      enumValues {
        name
      }
    }
  }
`
export default {
  components: {
    Layout
  },
  data() {
    return {
      assets: [],
      subcategories: []
    }
  },
  methods: {
    getFilter(name) {
      return `.filter-${name.toLowerCase()}`
    },
    getFilterClasses(asset) {
      const filter = asset.subcategory.reduce((acc, sub) => {
        return (acc += ' ' + `filter-${sub.toLowerCase()}`)
      }, '')
      // console.log('filter', asset, filter)
      return filter
    }
  },
  apollo: {
    assets: {
      query: assets,
      result({ data, loading, networkStatus }) {
        this.assets = data.assets.map((asset) => {
          let caption = asset.title || ''
          if (asset.description) {
            caption += ` - ${asset.description}`
          }
          if (asset.dimension) {
            caption += ` - ${asset.dimension}`
          }
          return {
            ...asset,
            caption
          }
        })
        this.subcategories = data.__type.enumValues.map((sub) => {
          return {
            ...sub,
            caption: sub.name.replace('_', ' ').toUpperCase()
          }
        })
      }
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  margin-top: 150px;
  font-size: 20px;
}
</style>
