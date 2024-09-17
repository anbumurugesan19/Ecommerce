import React from 'react'
import Hero from './Hero'
import Testimonial from './Testimonial'
import ProductList from '../Component/ProductList'
import { Content } from './Content'


const Home = () => {
  return (
    <div className='w-full justify-items-stretch'>
      <Hero /> 
      <Content/>
      <ProductList />
      <Testimonial/>
    </div>
  )
}

export default Home