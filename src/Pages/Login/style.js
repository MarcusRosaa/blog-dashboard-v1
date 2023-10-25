import styled from "styled-components";

import { Page } from '../../globalStyles'

export const LoginPage = styled(Page)`

`

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: var(--border-radius);

  box-shadow: 0 0 15px var(--box-shadow);

  .login_container__header {
    margin-bottom: 40px;

    p {
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .login_container__form {
    form {
      display: flex;
      flex-direction: column;

      .login_container__form__links {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 5px 0 20px auto;

        a {
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 5px;
  
          color: var(--link);
        }
      }
    }
  }
`