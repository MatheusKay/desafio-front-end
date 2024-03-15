import img from '../../assets/images/Photo - 12.png'

import * as S from './style'

const StaffTable = () => (
  <S.Table className="container">
    <S.HeadTable>
      <S.HeadTableImg>
        <tr>Foto</tr>
      </S.HeadTableImg>
      <S.HeadTableName>
        <tr>Nome</tr>
      </S.HeadTableName>
      <S.HeadTableOff>
        <tr>Cargo</tr>
      </S.HeadTableOff>
      <S.HeadTableAddate>
        <tr>Data de adimissão</tr>
      </S.HeadTableAddate>
      <S.HeadTableImgPhone>
        <tr>Telefone</tr>
      </S.HeadTableImgPhone>
    </S.HeadTable>
    <tbody>
      <S.BodyTableImg>
        <tr>
          <img src={img} alt="" />
        </tr>
      </S.BodyTableImg>
      <td>
        <tr>Nome do funcionario</tr>
      </td>
      <td>
        <tr>Profissão</tr>
      </td>
      <td>
        <tr>00/00/0000</tr>
      </td>
      <S.BodyTablePhone>
        <tr>+55 (55) 55555-555</tr>
      </S.BodyTablePhone>
    </tbody>
  </S.Table>
)

export default StaffTable
