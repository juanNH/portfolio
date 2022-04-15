import React from 'react'
import Footer from '../../components/layoutComponents/footer/Footer'
import Navbar from '../../components/layoutComponents/navbar/Navbar'
import PageHeader from '../../components/layoutComponents/pageHeader/PageHeader'
import { PagesLayOutProps } from './interfaces'

const PagesLayOut = ({children, title}:PagesLayOutProps) => {
  return (
    <>
    <Navbar />
    <PageHeader title={title}/>
        {children}
    <Footer />
  </>
  )
}

export default PagesLayOut