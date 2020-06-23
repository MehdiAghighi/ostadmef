require("@babel/register")({
  extends: "./.babelrc",
})
require.extensions[".scss"] = () => {}
require.extensions[".jpg"] = () => {}
require.extensions[".png"] = () => {}
require.extensions[".svg"] = () => {}
require.extensions[".css"] = () => {}
const router = require("./sitemap-routes.jsx").default
const Sitemap = require("react-router-sitemap").default
const axios = require("axios")

async function generateSitemap() {
  const posts = await axios.get(`https://linom.ir/api/blogpost`)
  const pagesData = posts.data.posts
  let blogSlugMap = []

  for (var i = 1; i <= pagesData.last_page; i++) {
    let po = await axios.get(`https://linom.ir/api/blogpost?page=${i}`)
    let pst = po.data.posts
    for (var g = 0; g < pst.data.length; g++) {
      blogSlugMap.push({ slug: pst.data[g].slug, lastmod: pst.data[g].updated_at })
    }
  }

  const courses = await axios.get(`https://linom.ir/api/course`)
  const pagesData2 = courses.data.courses
  let courseSlugMap = []

  for (var i = 1; i <= pagesData2.last_page; i++) {
    let po = await axios.get(`https://linom.ir/api/course?page=${i}`)
    let pst = po.data.courses
    for (var g = 0; g < pst.data.length; g++) {
      courseSlugMap.push({ slug: pst.data[g].slug, lastmod: pst.data[g].updated_at })
    }
  }

  const paramsConfig = {
    "/blog/:slug": blogSlugMap,
    "/course/:slug": courseSlugMap,
  }
  const filterConfig = {
    isValid: false,
    rules: [/\/video\/:slug/],
    // rules: [/video/:slug/]
  }
  const mySitemap = new Sitemap(router)
    .filterPaths(filterConfig)
    .applyParams(paramsConfig)
    .build("https://linom.ir")

  let b = 0
  let c = 0
  for (let i = 0; i < mySitemap.sitemaps[0].urls.length; i++) {
    if (mySitemap.sitemaps[0].urls[i].url.includes("blog/")) {
      // console.log(new Date(blogSlugMap[b].lastmod).toISOString())
      mySitemap.sitemaps[0].urls[i].lastmod = new Date(blogSlugMap[b].lastmod)
      b++
    }
    if (mySitemap.sitemaps[0].urls[i].url.includes("course/")) {
      // console.log(new Date(blogSlugMap[c].lastmod).toISOString())
      mySitemap.sitemaps[0].urls[i].lastmod = new Date(courseSlugMap[c].lastmod)
      c++
    }
    // mySitemap.sitemaps[0].urls[i].priority = 0.8
  }

  return mySitemap.save("./public/sitemap.xml")
}

generateSitemap().catch((err) => console.log(err))
