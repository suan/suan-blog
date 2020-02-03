import { graphql, useStaticQuery } from "gatsby"

const useHomePage = () => {
  const data = useStaticQuery(graphql`
  query {
    posts: allPost(sort: { fields: date, order: DESC }, limit: 3 ) {
      nodes {
        slug
        title
        date(formatString: "YYYY.MM.DD")
        excerpt
        description
        tags {
          name
          slug
        }
      }
    }
  }
`)

  return data.posts
}

export default useHomePage