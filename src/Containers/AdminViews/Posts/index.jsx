import React, { useState } from 'react'
import * as S from './style'

import {
  Button,
  TextField,
} from '@mui/material/'

import ViewHeader from '../../../Components/Panel/ViewHeader'
import PostItem from '../../../Components/Panel/PostItem'
import AddPostModal from '../../../Components/Panel/Modal/AddPost'

const Posts = () => {

  const [addPostModal, setAddPostModal] = useState(false)

  const postItemProps = [
    {
      id: 1, 
      banner: 'https://picsum.photos/500/300', 
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 
      createAt: '22 de outubro de 2022'
    }, 
    {
      id: 2, 
      banner: 'https://picsum.photos/510/310', 
      title: 'Distinctio soluta, quis iusto repellat, est cum nobis.', 
      createAt: '15 de fevereiro de 2022'
    }
  ]

  return (
    <>
      {addPostModal && <AddPostModal addPostModal={addPostModal} setAddPostModal={setAddPostModal} />}

      <S.PostsView>
        <ViewHeader 
          viewTitle='Posts' 
          viewSubtitle='Criar, editar e ver publicações'
        />

        <PostsHeader addPostModal={addPostModal} setAddPostModal={setAddPostModal} />

        <S.PostsList>
          {postItemProps.map((postData) => (
            <PostItem key={postData.id} data={postData} />
          ))}
        </S.PostsList>
      </S.PostsView>
    </>
  )
}

export default Posts

// --------------------------- POSTS HEADER

const PostsHeader = ({ addPostModal, setAddPostModal }) => {
  return (
    <S.PostsHeader>
      <TextField 
        id="outlined-basic"
        label="Pesquisar"
        variant="outlined"
        size="small"
      />
      <Button
        variant="outlined" 
        onClick={() => {}}
      >
        (0) Publicados
      </Button>
      <Button
        variant="outlined" 
        onClick={() => {}}
      >
        (0) Rascunhos
      </Button>
      <Button
        variant="outlined" 
        onClick={() => {setAddPostModal(!addPostModal)}}
      >
        Criar publicação
      </Button>
    </S.PostsHeader>
  )
}
