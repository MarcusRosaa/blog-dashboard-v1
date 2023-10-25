import styled from "styled-components";

import { 
  View,
  ViewHeaderSettings,
} from '../../../globalStyles'

export const PostsView = styled(View)`
  display: flex;
  flex-direction: column;
`

export const PostsHeader = styled(ViewHeaderSettings)`
  margin-bottom: 20px;
  
  Button {
    &:nth-of-type(1) {
      margin-left: 20px;
    }
    &:nth-of-type(2) {
      margin-left: 10px;
    }
    &:nth-of-type(3) {
      margin-left: auto;
    }
  }
`

export const PostsList = styled.div`
  
`