import StaffTable from '../Table'

import { useGetFuncionariosQuery } from '../../services/api'
import { filtroPesquisa } from '../../utils'

type Props = {
  busca: string
}

const UpTable = ({ busca }: Props) => {
  const { data: funcionarios } = useGetFuncionariosQuery()

  if (funcionarios) {
    return <StaffTable tableFunc={filtroPesquisa(funcionarios, busca)} />
  } else {
    return <div>Ops ocorreu um Erro na tabela</div>
  }
}

export default UpTable
