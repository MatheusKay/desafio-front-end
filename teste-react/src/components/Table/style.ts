import styled from 'styled-components'

import { breakpoints } from '../../estiloGlobal'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    box-shadow: 0px 1px 2px 0px #00000033;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    tbody {
      font-size: 16px;

      button {
        width: 32px;
        height: 32px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }

      .margin_ajust_text {
        margin-top: 16px;
      }

      .margin_top {
        margin-top: 32px;
      }

      .margin_bottom {
        margin-bottom: 32px;
      }

      .padding_ajust {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    th,
    td {
      text-align: center;
    }
  }
`

export const HeadTable = styled.thead`
  background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
  box-shadow: 0px 1px 2px 0px #00000033;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-transform: uppercase;
`

export const HeadTableImg = styled.th`
  width: 111px;
  padding: 14px 0 14px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 57px;
    padding-left: 16px;
  }
`

export const HeadTableName = styled.th`
  width: 200px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 205px;
  }
`

export const HeadTableOff = styled.th`
  width: 158px;
`

export const HeadTableAddate = styled.th`
  width: 178px;
`

export const HeadTableImgPhone = styled.th`
  width: 142px;
  padding-right: 32px;

  span {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    padding: 0;
  }
`

export const BodyTableImg = styled.td`
  padding: 8px 32px;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px 16px;
    margin-bottom: 32px;
  }
`

export const BodyTablePhone = styled.td`
  width: 141px;
`

export const InfosMobile = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #dfdfdf;

  h2 {
    font-weight: 500;
    font-size: 16px;
  }
`
