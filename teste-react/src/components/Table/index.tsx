import { Func, formataNumero } from '../../services/api'

import * as S from './style'

type Props = {
  tableFunc?: Func[]
}

const StaffTable = ({ tableFunc }: Props) => (
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
      {tableFunc?.map((pessoa) => (
        <tr key={pessoa.id}>
          <S.BodyTableImg>
            <img src={pessoa.image} alt={pessoa.name} />
          </S.BodyTableImg>
          <td>{pessoa.name}</td>
          <td>{pessoa.job}</td>
          <td>{pessoa.admission_date}</td>
          <S.BodyTablePhone>{formataNumero(pessoa.phone)}</S.BodyTablePhone>
        </tr>
      ))}
    </tbody>
  </S.Table>
)

export default StaffTable
