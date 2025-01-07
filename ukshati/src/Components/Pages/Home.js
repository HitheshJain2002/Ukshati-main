import React from 'react'
import Layout from '../Layouts/Layout'
import Slider from "../Layouts/Slider"
import Product_home from '../Layouts/Product_home'
import Services from '../Layouts/Services'
import Appinfo from './Appinfo'


const Home = () => {


  return (
    <>
      <Layout>
          <Slider/>
          <Product_home/>
          <Services/>
          <Appinfo/>
      </Layout>
    </>
  )
}

export default Home





