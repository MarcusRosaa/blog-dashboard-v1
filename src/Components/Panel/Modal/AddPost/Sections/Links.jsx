import React from 'react'
import * as S from '../style'
import * as MUI from '@mui/material/'

const Links = () => {
  return (
    <>
      <S.SectionHeader>
        Acervo de links
      </S.SectionHeader>

      <div 
        style={{ 
          display: 'flex',
          marginBottom: '20px', 
        }
      }>
        <MUI.TextField
          label='Cole o link aqui'
          variant='outlined'
          style={{
            width: 'calc(100% - 510px)',
            overflow: 'hidden',
          }}
        />
        <MUI.TextField
          label='Título do link'
          variant='outlined'
          style={{
            width: '350px',
            marginLeft: '10px',
            overflow: 'hidden',
          }}
        />
        <MUI.Button
          variant="outlined" 
          onClick={() => {}}
          style={{
            width: '140px',
            marginLeft: '10px',
          }}
        >
          Adicionar
        </MUI.Button>
      </div>

      <S.LinksViewerContainer>

        <S.LinkUploaded>
          <S.Link>https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input</S.Link>
          <S.LinkTitle>Como habilitar upload de arquivo no MUI no React</S.LinkTitle>
          <S.LinkRemove>X</S.LinkRemove>
        </S.LinkUploaded>

        <S.LinkUploaded>
          <S.Link>https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input</S.Link>
          <S.LinkTitle>Como habilitar upload de arquivo no MUI no React</S.LinkTitle>
          <S.LinkRemove>X</S.LinkRemove>
        </S.LinkUploaded>

      </S.LinksViewerContainer>
    </>
  )
}

export default Links