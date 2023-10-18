import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    flex-shrink: 0;
  }

  :root {
    --border-radius: 8px;
    --padding: 20px;

    --link: #0583d2;
    --box-shadow: rgba(0, 0, 0, 0.1);
    --border-light: rgba(0, 0, 0, 0.1);
    --border-soft: rgba(0, 0, 0, 0.2);
    --hover-soft: rgb(245, 245, 245);
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .quill-rich-text {
    height: 400px;
    margin-bottom: 40px;
  }
`

export default GlobalStyle

// --------------------------------- COMPONENTES

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--padding);
  max-width: 1000px;

  border: 1px solid var(--border-light);
`

export const ViewHeaderSettings = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: var(--border-radius);

  border: 1px solid var(--border-soft);
`