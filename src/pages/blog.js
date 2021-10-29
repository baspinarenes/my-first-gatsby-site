import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        {
          data.allMdx.nodes.map((mdxNode) => (
            <article key={mdxNode.id}>
              <h2>{mdxNode.frontmatter.title}</h2>
              <p>Posted: {mdxNode.frontmatter.date}</p>
              <MDXRenderer>
                {mdxNode.body}
              </MDXRenderer>
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
        body
      }
    }
  }
`

export default BlogPage
