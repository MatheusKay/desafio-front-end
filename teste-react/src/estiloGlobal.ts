import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  tablet: '767px',
  descktop: '1024px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    margin-bottom: 80px;
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 335px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    color: #1c1c1c;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 28px;
    }
  }

  .searchField {
    margin: 32px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 20px;
      flex-direction: column;
    }
  }
`
