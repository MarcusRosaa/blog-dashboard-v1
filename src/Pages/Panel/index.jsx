import React, { useState } from 'react'

import {
  PanelPage,
  PanelMenu,
  PanelView,
  MenuHeader,
  ViewHeader,
  ViewContainer,
  PanelLogo,
  MenuContainer,
  ViewHeaderSettings,
  ViewHeaderSearch,
  ViewHeaderInfos,
} from './style'

import {
  Button,
  IconButton,
  TextField,
  Avatar
} from '@mui/material/'

import {
  FiHome,
  FiLayout,
  FiFileText,
  FiFolder,
  FiUsers,
  FiActivity,
  FiSettings,
  FiBell,
  FiExternalLink,
} from 'react-icons/fi'

import Overview from '../../Containers/AdminViews/Overview'
import Template from '../../Containers/AdminViews/Template'
import Posts from '../../Containers/AdminViews/Posts'
import Categories from '../../Containers/AdminViews/Categories'
import Users from '../../Containers/AdminViews/Users'
import Analytics from '../../Containers/AdminViews/Analytics'
import Settings from '../../Containers/AdminViews/Settings'

const Panel = () => {

  const [view, setView] = useState(<Overview />)

  return (
    <PanelPage>

      <PanelMenu>
        <MenuHeader>
          <PanelLogo>
            Dashboard v1
          </PanelLogo>
        </MenuHeader>
        <MenuContainer>
          <Button 
            variant="outlined" 
            startIcon={<FiHome />} 
            onClick={() => setView(<Overview />)}
          >
            Overview
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiLayout />} 
            onClick={() => setView(<Template />)}
            disabled
          >
            Template
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiFileText />} 
            onClick={() => setView(<Posts />)}
          >
            Posts
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiFolder />} 
            onClick={() => setView(<Categories />)}
          >
            Categorias
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiUsers />} 
            onClick={() => setView(<Users />)}
          >
            Usuários
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiActivity />} 
            onClick={() => setView(<Analytics />)}
            disabled
          >
            Analytics
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<FiSettings />} 
            onClick={() => setView(<Settings />)}
            disabled
          >
            Configurações
          </Button>
        </MenuContainer>
      </PanelMenu>

      <PanelView>
        <ViewHeader>
          <ViewHeaderSettings>
            <IconButton>
              <FiBell />
            </IconButton>
            <IconButton>
              <FiExternalLink />
            </IconButton>
          </ViewHeaderSettings>
          <ViewHeaderSearch>
            <TextField 
              id="outlined-basic"
              label="Pesquisar"
              variant="outlined"
              size="small"
              fullWidth
              disabled
            />
          </ViewHeaderSearch>
          <ViewHeaderInfos>
            <Avatar sx={{ bgcolor: 'orange', cursor: 'pointer' }}>HG</Avatar>
          </ViewHeaderInfos>
        </ViewHeader>

        <ViewContainer>
          {view}
        </ViewContainer>

      </PanelView>

    </PanelPage>
  )
}

export default Panel