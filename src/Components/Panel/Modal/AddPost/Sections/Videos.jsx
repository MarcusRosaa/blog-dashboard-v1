import React from 'react'
import * as S from '../style'
import * as MUI from '@mui/material/'

const Videos = () => {
  return (
    <>
      <S.SectionHeader>
        Acervo de vídeos
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

      <S.VideosViewerContainer>

        <S.VideoUploaded>
          <S.Video>https://www.youtube.com/watch?v=gfgwt54aMOM</S.Video>
          <S.VideoTitle>Como habilitar upload de arquivo no MUI no React</S.VideoTitle>
          <S.VideoRemove>X</S.VideoRemove>
        </S.VideoUploaded>

        <S.VideoUploaded>
          <S.Video>https://www.youtube.com/watch?v=gfgwt54aMOM</S.Video>
          <S.VideoTitle>Como habilitar upload de arquivo no MUI no React</S.VideoTitle>
          <S.VideoRemove>X</S.VideoRemove>
        </S.VideoUploaded>

      </S.VideosViewerContainer>
    </>
  )
}

export default Videos