import React from 'react'
import * as S from '../style'
import * as MUI from '@mui/material/'

import TestImage from '../../../../../Assets/Category.png'

const Images = () => {
  return (
    <>
      <S.SectionHeader>
        Acervo de imagens
      </S.SectionHeader>

      <>
        <S.ImageInput
          accept="image/*"
          id="raised-button-file"
          multiple
          type="file"
        />
        <S.ImageInputLabel htmlFor="raised-button-file">
          <MUI.Button 
            variant="raised" 
            component="span"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.2)',
              padding: '15px 16px',
              marginRight: '10px',
            }}
          >
            Upload
          </MUI.Button>
          <MUI.TextField 
            disabled 
            variant="outlined"
            placeholder='Captura de tela de 2022-03-12 00-46-57.png'
            style={{
              width: '460px',
              overflow: 'hidden',
            }}
          />
        </S.ImageInputLabel> 
      </>

      <S.ImagesViewerContainer>

        <S.ImageUploadedContainer>
          <S.DeleteImageUploaded>
            X
          </S.DeleteImageUploaded>
          <S.ImageUploaded src={TestImage} alt='' />
        </S.ImageUploadedContainer>
        
      </S.ImagesViewerContainer>
    </>
  )
}

export default Images