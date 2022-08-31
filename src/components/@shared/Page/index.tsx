import React, { ReactNode, ReactElement } from 'react'
import Footer from '../Footer/Footer'
import Navbar from 'src/components/@shared/NavBar/Navbar'
import { Header } from './index.style'
import Seo from './Seo'

export interface PageProps {
  children: ReactNode
  title?: string
  uri: string
  description?: string
}

export default function Page({
  children,
  title,
  uri,
  description,
}: PageProps): ReactElement {
  return (
    <>
      <Seo title={title} description={description} uri={uri} />
      <Header>
        <Navbar />
            {children}
        <Footer isHomePage={uri=="/"}/>
      </Header>
    </>
  )
}