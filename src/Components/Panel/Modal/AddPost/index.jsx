import React, { useState, useEffect } from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import {
  FiX,
} from 'react-icons/fi'
import MainInfos from './Sections/MainInfos'
import EditorNotes from './Sections/EditorNotes'
import Images from './Sections/Images'
import Links from './Sections/Links'
import Videos from './Sections/Videos'

const AddPostModal = ({ addPostModal, setAddPostModal }) => {
  return (
    <S.AddPostModalContainer>
      
      <S.Modal>
        <ModalHeader addPostModal={addPostModal} setAddPostModal={setAddPostModal} />

        <S.ModalPostDetails>
          <MainInfos />
          <EditorNotes />
          <Images />
          <Links />
          <Videos />
        </S.ModalPostDetails>
      </S.Modal>

    </S.AddPostModalContainer>
  )
}

export default AddPostModal

// --------------------------- 

export const ModalHeader = ({ addPostModal, setAddPostModal }) => {
  return (
    <S.ModalHeader>
      <S.ModalHeaderTitle>
        Criar publicação
      </S.ModalHeaderTitle>
      <MUI.Button
        variant="outlined" 
        onClick={() => {}}
      >
        Salvar rascunho
      </MUI.Button>
      <MUI.Button
        variant="outlined" 
        onClick={() => {}}
      >
        Publicar
      </MUI.Button>
      <MUI.IconButton
        onClick={() => {setAddPostModal(!addPostModal)}}
      >
        <FiX />
      </MUI.IconButton>
    </S.ModalHeader>
  )
}
