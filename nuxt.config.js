// prettier-ignore
export default {
  head: {
    titleTemplate: 'ART Katrien Danschutter',
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { name: "description", content: "A Photography Template by CodeSymbol" },
      { name: "keywords", content: "HTML, CSS, JavaScript, Responsive, Photography" },
      { name: "author", content: "Peter Cosemans" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "images/favicon.ico" },
      { rel: "stylesheet", href: "/css/reset.css" },
      { rel: "stylesheet", href: "/includes/entypo/style.css" },
      { rel: "stylesheet", href: "/includes/icomoon/style.css" },
      { rel: "stylesheet", href: "/includes/font_awesome/font-awesome.css" },
      { rel: "stylesheet", href: "/includes/cosy/style.css" },
      { rel: "stylesheet", href: "/js/jquery-ui/jquery-ui-1.10.3.custom.min.css" },
      { rel: "stylesheet", href: "/js/flexslider/style.css" },
      { rel: "stylesheet", href: "/js/Magnific-Popup/magnific-popup.css" },
      { rel: "stylesheet", href: "/js/mb.YTPlayer/css/YTPlayer.css" },
      { rel: "stylesheet", href: "/css/animate.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
    ],
    script: [
      { type: "text/javascript", src: "/js/jquery-1.11.3.min.js", body: true },
      { type: "text/javascript", src: "/js/migrate-1.2.1.min.js", body: true },
      { type: "text/javascript", src: "/js/modernizr-respond.js", body: true },
      { type: "text/javascript", src: "/js/cookie.js", body: true },
      { type: "text/javascript", src: "/js/retina.js", body: true },
      { type: "text/javascript", src: "/js/jquery-ui/jquery-ui.min.js", body: true },
      { type: "text/javascript", src: "/js/scrollTo-min.js", body: true },
      { type: "text/javascript", src: "/js/easing.1.3.js", body: true },
      { type: "text/javascript", src: "/js/appear.js", body: true },
      // { type: "text/javascript", src: "/js/imagesloaded.pkgd.min.js", body: true },
      // { type: "text/javascript", src: "/js/jflickrfeed.min.js", body: true },
      { type: "text/javascript", src: "/js/flexslider/flexslider.min.js", body: true },
      { type: "text/javascript", src: "/js/isotope.min.js", body: true },
      { type: "text/javascript", src: "/js/queryloader2.min.js", body: true },
      { type: "text/javascript", src: "/js/gmap.min.js", body: true },
      { type: "text/javascript", src: "/js/nicescroll.min.js", body: true },
      { type: "text/javascript", src: "/js/fitvids.js", body: true },
      { type: "text/javascript", src: "/js/Magnific-Popup/magnific-popup.min.js", body: true },
      // { type: "text/javascript", src: "/js/mb.YTPlayer/inc/mb.YTPlayer.js", body: true },
      { type: "text/javascript", src: "/js/mousewheel.min.js", body: true },
      { type: "text/javascript", src: "/js/lazyload.min.js", body: true },
      { type: "text/javascript", src: "/js/scripts.js", body: true }
    ]
  },
  generate: {
    routes: [
      '/pages/about',
    ],
  },
  build: {
    html: {
      minify: {
        removeEmptyAttributes: false,
        removeRedundantAttributes: false,
      }
    }
  },
  render: {
    ssrLog: 'collapsed'
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
