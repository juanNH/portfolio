import React from 'react'
import { PageHeaderProps } from './interfaces'
import { HeaderSection } from './PageHeaderStyles'

const PageHeader = ({title}:PageHeaderProps) => {
  return (
    <HeaderSection>
        <h1>{title}</h1>
    </HeaderSection>
  )
}

export default PageHeader