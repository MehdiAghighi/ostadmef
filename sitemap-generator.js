require("@babel/register")({
  extends: "./.babelrc",
})
const router = require("./src/sitemap-routes.jsx").default
const Sitemap = require("react-router-sitemap").default

function generateSitemap() {
  return new Sitemap(router).build("https://linom.ir").save("./public/sitemap.xml")
}

generateSitemap()
