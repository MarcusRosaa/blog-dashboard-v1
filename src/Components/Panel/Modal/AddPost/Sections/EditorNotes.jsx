import React from 'react'
import * as S from '../style'
import * as MUI from '@mui/material/'

import ReactQuill from 'react-quill';

const EditorNotes = () => {
  return (
    <>
      <S.SectionHeader>
        Notas do editor
      </S.SectionHeader>

      <ReactQuill className='quill-rich-text' />
    </>
  )
}

export default EditorNotes