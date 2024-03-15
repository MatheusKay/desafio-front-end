import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    color: #1c1c1c;
  }

  .searchField {
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
  }
`
