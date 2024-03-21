import { formataData, formataNumero } from '../../utils'
import { Func } from '../../services/api'

import * as S from './style'

type Props = {
  tableFunc?: Func[]
}

const StaffTable = ({ tableFunc }: Props) => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches

  return (
    <S.Table className="container">
      <S.HeadTable>
        <S.HeadTableImg>Foto</S.HeadTableImg>
        <S.HeadTableName>Nome</S.HeadTableName>
        {isMobile ? (
          <S.HeadTableImgPhone>*</S.HeadTableImgPhone>
        ) : (
          <>
            <S.HeadTableOff>
              <tr>Cargo</tr>
            </S.HeadTableOff>
            <S.HeadTableAddate>
              <tr>Data de adimissão</tr>
            </S.HeadTableAddate>
            <S.HeadTableImgPhone>
              <tr>Telefone</tr>
            </S.HeadTableImgPhone>
          </>
        )}
      </S.HeadTable>
      <tbody>
        {tableFunc?.map((pessoa) => (
          <>
            <tr key={pessoa.id}>
              <S.BodyTableImg>
                <img src={pessoa.image} alt={pessoa.name} />
              </S.BodyTableImg>
              <td>{pessoa.name}</td>
              {isMobile ? (
                <td>
                  <button>baixo</button>
                </td>
              ) : (
                <>
                  <td>{pessoa.job}</td>
                  <td>{formataData(pessoa.admission_date)}</td>
                  <S.BodyTablePhone>
                    {formataNumero(pessoa.phone)}
                  </S.BodyTablePhone>
                </>
              )}
            </tr>
            <tr>
              <td>Cargo</td>
              <td></td>
              <td>Front-end</td>
            </tr>
          </>
        ))}
      </tbody>
    </S.Table>
  )
}

export default StaffTable
