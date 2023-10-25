import React from 'react'

import {
  CategoryItemContainer,
  CategoryItemTitle,
  CategoryItemSettings,
} from './style'

import {
  IconButton,
  TextField
} from '@mui/material/'

import {
  FiMoreHorizontal,
} from 'react-icons/fi'

const CategoryItem = ({ data }) => {
  return (
    <CategoryItemContainer>
      <CategoryItemTitle>
        {data.title}
      </CategoryItemTitle>

      <CategoryItemSettings>
        <TextField 
          id="outlined-basic"
          label={data.postsNumber}
          variant="outlined"
          size="small"
          disabled
          sx={{ 
            width: '46px', 
            height: '40px',
            marginRight: '10px',
          }}
        />
        <IconButton
          onClick={() => {}}
        >
          <FiMoreHorizontal />
        </IconButton>
      </CategoryItemSettings>
    </CategoryItemContainer>
  )
}

export default CategoryItem