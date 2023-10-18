import styled from "styled-components";

// ----------------------------------- GLOBAIS

export const SectionHeader = styled.div`
  font-size: 22px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  margin: 40px 0 20px 0;

  &:first-of-type {
    margin-top: 20px;
  }
`

// ------------------------------------------ 

export const AddPostModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;

  background: rgba(40, 40, 40, 0.6);
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  padding: var(--padding);
  border-radius: var(--border-radius);

  background-color: white;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: var(--border-radius);

  border: 1px solid var(--border-soft);

  Button {
    &:nth-of-type(1) {
      margin-left: auto;
    }
    &:nth-of-type(2) {
      margin-left: 10px;
    }
    &:nth-of-type(3) {
      margin-left: 20px;
    }
  }
`

export const ModalHeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.4);
  `

export const ModalPostDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  padding-right: 20px;
  padding-bottom: 50px;
  overflow: auto;
`

export const ModalPostSelectors = styled.div`
  display: flex;
  margin: 20px 0;
`

export const ModalCategories = styled.div`
  width: 220px;
  margin-right: 20px;
`

export const ModalTags = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 240px);
  padding-left: 20px;

  border-left: 1px solid var(--border-soft);
`

// ----------------------------------- NOTAS DO EDITOR

// ----------------------------------- IMAGENS

export const ImageInput = styled.input`
  display: none;
`

export const ImageInputLabel = styled.label`
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 20px;
`

export const ImagesViewerContainer = styled.div`
  display: flex;
  height: 140px;
  border-radius: 6px;
  padding: 10px;
  overflow: auto;

  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const ImageUploadedContainer = styled.div`
  position: relative;
  width: 120px;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    div:first-of-type {
      opacity: 1;
      pointer-events: initial;
    }
  }
`

export const ImageUploaded = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DeleteImageUploaded = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: .2s;
  opacity: 0;
  pointer-events: none;
  
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
`

// ----------------------------------- LINKS

export const LinksViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  border-radius: 6px;
  padding: 10px;
  overflow: auto;

  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const LinkUploaded = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;

  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Link = styled.div`
  width: 40%;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 300;
`

export const LinkTitle = styled.div`
  width: 55%;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export const LinkRemove = styled.div`
  width: 5%;

  /* border: 1px solid red; */
`

// ----------------------------------- VÍDEOS

export const VideosViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  border-radius: 6px;
  padding: 10px;
  overflow: auto;

  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const VideoUploaded = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;

  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Video = styled.div`
  width: 40%;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 300;
`

export const VideoTitle = styled.div`
  width: 55%;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export const VideoRemove = styled.div`
  width: 5%;

  /* border: 1px solid red; */
`