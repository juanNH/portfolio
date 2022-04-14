import React from 'react'
import { Container } from './ContentContainerStyles'
import { ContentContainerProps } from './interfaces'

const ContentContainer = ({children}:ContentContainerProps) => {
  return (
    <Container>{children}</Container>
  )
}

export default ContentContainer