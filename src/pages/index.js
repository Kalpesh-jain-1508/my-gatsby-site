import Layout from '../components/layout';
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {

  return (
          <Layout pageTitle="Home Page">
            <h1>Welcome to my Gatsby site!</h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' alt='Clifford' ></StaticImage>
          </Layout>
  )
}


export default HomePage;