import styled from 'styled-components'

export const Field = styled.div`
  height: 48px;
  display: flex;

  input {
    width: 290px;
    padding: 12px 16px;
    border: none;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    border-left: 1px solid #dfdfdf;
    border-radius: 8px 0 0 8px;
    font-size: 16px;
    color: #9e9e9e;
  }
`

export const BtnSearch = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-radius: 0 8px 8px 0;
  background-color: #fff;
`
