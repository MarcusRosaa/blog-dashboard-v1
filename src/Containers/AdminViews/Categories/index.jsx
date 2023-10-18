import React from 'react'

import {
  CategoriesView,
  CategoriesHeader,
  CategoriesList,
} from './style'

import {
  Button,
  TextField,
} from '@mui/material/'

import ViewHeader from '../../../Components/Panel/ViewHeader'
import CategoryItem from '../../../Components/Panel/CategoryItem'

const Categories = () => {

  const categoriesProps = [
    { id: 1, title: 'Soft Skills', postsNumber: '04' }, 
    { id: 2, title: 'React', postsNumber: '10' },
    { id: 3, title: 'Gestão de Projetos', postsNumber: '00' }
  ]

  return (
    <CategoriesView>
      <ViewHeader 
        viewTitle='Categorias' 
        viewSubtitle='Criar, editar e ver categorias'
      />

      <CategoriesHeader>
        <TextField 
          id="outlined-basic"
          label="Pesquisar"
          variant="outlined"
          size="small"
          sx={{ width: '300px' }}
        />
        <Button
          variant="outlined" 
          onClick={() => {}}
          sx={{ marginLeft: 'auto' }}
        >
          Criar categoria
        </Button>
      </CategoriesHeader>

      <CategoriesList>
        {categoriesProps.map((categotyData) => (
          <CategoryItem key={categotyData.id} data={categotyData} />
        ))}
      </CategoriesList>
    </CategoriesView>
  )
}

export default Categories