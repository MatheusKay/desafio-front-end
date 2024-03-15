import iconSearch from '../../assets/images/Default.png'

import { BtnSearch, Field } from './style'

const Search = () => (
  <Field>
    <input placeholder="Pesquisa" type="text" />
    <BtnSearch>
      <img src={iconSearch} alt="Buscar" />
    </BtnSearch>
  </Field>
)

export default Search
