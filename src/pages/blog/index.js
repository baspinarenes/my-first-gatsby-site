import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        {
          data.allMdx.nodes.map((mdxNode) => (
            <article key={mdxNode.id}>
              <h2>
                <Link to={`/blog/${mdxNode.slug}`}>
                  {mdxNode.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {mdxNode.frontmatter.date}</p>
            </article>
          ))
        }
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
