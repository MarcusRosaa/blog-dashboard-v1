import styled from "styled-components";

import { Page } from '../../globalStyles'

export const PanelPage = styled(Page)`

`

// --------------------------------------- MENU

export const PanelMenu = styled.div`
  width: 210px;
  height: 100%;

  box-shadow: 0 0 15px var(--box-shadow);
`

export const MenuHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  border-bottom: 1px solid var(--border-light);
`

export const PanelLogo = styled.h1`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s;

  color: rgb(40, 40, 40);

  &:hover {
    letter-spacing: 1px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: var(--padding);
  padding-top: 40px;

  Button {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`

// --------------------------------------- VIEW

export const PanelView = styled.div`
  width: calc(100% - 210px);
  height: 100%;
`
// --------------------------------------- VIEW - Header

export const ViewHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 var(--padding);
  
  border-bottom: 1px solid var(--border-light);
`

export const ViewHeaderSettings = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin-right: 20px;
`

export const ViewHeaderSearch = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 20px;
`

export const ViewHeaderInfos = styled.div`
  margin-left: auto;
`

// --------------------------------------- VIEW - Container

export const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 60px);
  padding: var(--padding);
  
  /* border: 2px solid orange; */
`

