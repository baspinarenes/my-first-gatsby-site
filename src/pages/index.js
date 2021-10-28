import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src="../images/clifford.jpeg"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      />
    </Layout>
  )
}

export default IndexPage
