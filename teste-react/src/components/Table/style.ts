import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  margin-bottom: 80px;
  border-collapse: collapse;

  tbody {
    box-shadow: 0px 1px 2px 0px #00000033;
    font-size: 14px;
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
`

export const HeadTableName = styled.th`
  width: 200px;
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
`

export const BodyTableImg = styled.td`
  padding: 8px 32px;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
`

export const BodyTablePhone = styled.td`
  // padding-right: 32px;
  width: 141px;
`
