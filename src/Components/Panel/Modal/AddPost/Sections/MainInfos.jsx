import React, { useState } from 'react'
import * as S from '../style'
import * as MUI from '@mui/material/'

import ReactQuill from 'react-quill';

const MainInfos = () => {

  // ---------------------------------------------------------------

  const categories = ['React', 'Redux', 'Typescript']
  const [category, setCategory] = useState('Categorias');

  const handleChange = (e) => {
    setCategory(e.target.value);
  }; 

  // ---------------------------------------------------------------

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // ---------------------------------------------------------------

  return (
    <>
      <S.SectionHeader>
        Informações principais
      </S.SectionHeader>

      <MUI.TextField 
        hiddenLabel
        id="outlined-basic"
        placeholder="Adicionar um título"
        variant="standard"
        fullWidth
        inputProps={{style: {fontSize: 30}}}
        InputLabelProps={{style: {fontSize: 25}}}
      />

      <S.ModalPostSelectors>
        <S.ModalCategories>
          <MUI.Select 
            value={category} 
            onChange={handleChange}
            defaultValue='none'
            fullWidth
          >
            <MUI.MenuItem value="Categorias" disabled>Selecionar categoria</MUI.MenuItem>
            {categories.map((category) => (
              <MUI.MenuItem
                key={category}
                value={category}
              >
                {category}
              </MUI.MenuItem>
            ))}
          </MUI.Select>
        </S.ModalCategories>

        <S.ModalTags>
          <MUI.TextField 
            hiddenLabel
            placeholder="Adicionar tag"
            variant="standard"
            sx={{
              width: '160px',
              marginRight: '10px'
            }}
          />
          <MUI.Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: 56,
            }}
          >
            {chipData.map((data) => {
              return (
                <MUI.Chip
                  key={data.key}
                  variant="outlined"
                  label={data.label}
                  onDelete={handleDelete(data)}
                  sx={{ marginRight: 1 }}
                />
              );
            })}
          </MUI.Stack>
        </S.ModalTags>
      </S.ModalPostSelectors>

      <ReactQuill className='quill-rich-text' />
    </>
  )
}

export default MainInfos