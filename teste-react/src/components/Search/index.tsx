import React from 'react'
import iconSearch from '../../assets/images/Default.png'

import { BtnSearch, Field } from './style'

type Props = {
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setState }: Props) => (
  <Field>
    <input
      placeholder="Pesquisa"
      type="text"
      onChange={(e) => setState(e.target.value)}
    />
    <BtnSearch>
      <img src={iconSearch} alt="Buscar" />
    </BtnSearch>
  </Field>
)

export default Search
