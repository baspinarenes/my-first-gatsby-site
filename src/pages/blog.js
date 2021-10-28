import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>{node.name}</li>
          ))
        }
        </ul>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
