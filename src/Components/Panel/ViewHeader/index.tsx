import React from 'react'

import {
  ViewHeaderContainer,
  ViewHeaderTitle,
  ViewHeaderSubtitle
} from './style'

const ViewHeader = ({ viewTitle, viewSubtitle }) => {
  return (
    <ViewHeaderContainer>
      <ViewHeaderTitle>{viewTitle}</ViewHeaderTitle>
      <ViewHeaderSubtitle>{viewSubtitle}</ViewHeaderSubtitle>
    </ViewHeaderContainer>
  )
}

export default ViewHeader