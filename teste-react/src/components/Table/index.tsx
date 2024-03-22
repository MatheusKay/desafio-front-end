import { useState } from 'react'

import iconDown from '../../assets/images/charm_chevron-down.png'
import iconUp from '../../assets/images/charm_chevron-up.png'
import iconMobile from '../../assets/images/Ellipse 1.png'

import { formataData, formataNumero } from '../../utils'
import { Func } from '../../services/api'

import * as S from './style'

type Props = {
  tableFunc?: Func[]
}

const StaffTable = ({ tableFunc }: Props) => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const [select, setSelect] = useState(0)

  const toggle = (itemId: number) => {
    setSelect(itemId === select ? 0 : itemId)
  }

  return (
    <S.Table className="container">
      <S.HeadTable>
        <S.HeadTableImg>Foto</S.HeadTableImg>
        <S.HeadTableName>Nome</S.HeadTableName>
        {isMobile ? (
          <S.HeadTableImgPhone>
            <span>
              <img src={iconMobile} alt="" />
            </span>
          </S.HeadTableImgPhone>
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
                  <button onClick={() => toggle(pessoa.id)}>
                    <img src={select === 0 ? iconDown : iconUp} alt="" />
                  </button>
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
            {pessoa.id === select && (
              <>
                <tr>
                  <td className="padding_ajust" colSpan={3}>
                    <S.InfosMobile className="margin_top">
                      <h2>Cargo</h2>
                      <span>{pessoa.job}</span>
                    </S.InfosMobile>
                  </td>
                </tr>
                <tr>
                  <td className="padding_ajust" colSpan={3}>
                    <S.InfosMobile>
                      <h2 className="margin_ajust_text">Data de adimissão</h2>
                      <span className="margin_ajust_text">
                        {formataData(pessoa.admission_date)}
                      </span>
                    </S.InfosMobile>
                  </td>
                </tr>
                <tr>
                  <td className="padding_ajust" colSpan={3}>
                    <S.InfosMobile className="margin_bottom">
                      <h2 className="margin_ajust_text">Telefone</h2>
                      <span className="margin_ajust_text">
                        {formataNumero(pessoa.phone)}
                      </span>
                    </S.InfosMobile>
                  </td>
                </tr>
              </>
            )}
          </>
        ))}
      </tbody>
    </S.Table>
  )
}

export default StaffTable
