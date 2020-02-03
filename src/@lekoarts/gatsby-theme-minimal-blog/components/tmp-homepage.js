import React from "react"
import useHomePage from "../hooks/use-homepage"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Bottom from "@lekoarts/gatsby-theme-minimal-blog/src/texts/Bottom"
import Hero from "../texts/Hero"
import { Link } from "gatsby"

const Homepage = ({ posts }) => {
    const { basePath, blogPath } = useSiteMetadata()
  
    const p = useHomePage()
    console.log(p.nodes);
  
    return (
      <Layout>
        <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 0 } }}>
          <Hero />
        </section>
        <Title text="Latest Posts">
          <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
        </Title>
        <Listing posts={p.nodes} showTags={false} />
        <List>
          <Bottom />
        </List>
      </Layout>
    )
  }
  
  export default Homepage
