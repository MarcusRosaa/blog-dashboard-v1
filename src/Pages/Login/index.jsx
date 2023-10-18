import React from 'react'
import { Link } from 'react-router-dom'

import {
  LoginPage,
  LoginContainer,
} from './style'

import {
  TextField,
  Button,
} from '@mui/material/'

const Login = () => {
  return (
    <LoginPage>
      <LoginContainer>

        <div className='login_container__header'>
          <p>Entre na sua conta</p>
        </div>

        <div className='login_container__form'>
          <form action="">

            <TextField 
              id="outlined-basic" 
              label="Seu e-mail" 
              size="small"
              fullWidth
            />

            <TextField 
              id="outlined-basic" 
              label="Sua senha" 
              size="small"
              fullWidth
              margin="normal"
            />

            <div className='login_container__form__links'>
              <Link to='/register'>É novo por aqui?</Link>
              <Link to='/register'>Esqueci minha senha</Link>
            </div>

            <Button variant="contained">Entrar</Button>

          </form>
        </div>

      </LoginContainer>
    </LoginPage>
  )
}

export default Login