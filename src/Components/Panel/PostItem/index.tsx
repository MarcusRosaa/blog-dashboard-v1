import React from 'react'

import {
  PostItemContainer,
  PostItemBanner,
  PostItemBannerImage,
  PostItemDetails,
  PostItemDetailsTitle,
  PostItemDetailsDate,
  PostItemSettings,
} from './style'

import {
  IconButton,
} from '@mui/material/'

import {
  FiEye,
  FiEdit,
  FiDelete,
  FiFolder,
} from 'react-icons/fi'

const PostItem = ({ data }) => {
  return (
    <PostItemContainer>
      <PostItemBanner>
        <PostItemBannerImage src={data.banner} />
      </PostItemBanner>

      <PostItemDetails>
        <PostItemDetailsTitle>
          {data.title}
        </PostItemDetailsTitle>
        <PostItemDetailsDate>
          Publicado em: {data.createAt}
        </PostItemDetailsDate>
      </PostItemDetails>

      <PostItemSettings>
        <IconButton>
          <FiEye />
        </IconButton>
        <IconButton>
          <FiEdit />
        </IconButton>
        <IconButton>
          <FiDelete />
        </IconButton>
        <IconButton>
          <FiFolder />
        </IconButton>
      </PostItemSettings>
    </PostItemContainer>
  )
}

export default PostItem