import { Link } from 'gatsby';
import React, { Component } from 'react'

const HomePage = () => {

  return (
    <main>
       <title>Home Page</title>

      <Link to='/about'>About Us</Link>

      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}


export default HomePage;