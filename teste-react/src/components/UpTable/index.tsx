import StaffTable from '../Table'

import { useGetFuncionariosQuery } from '../../services/api'

type Props = {
  busca: string
}

const UpTable = ({ busca }: Props) => {
  const { data: funcionarios } = useGetFuncionariosQuery()

  const filtro = funcionarios?.filter((objeto) =>
    objeto.name.match(new RegExp(busca, 'i'))
  )

  return <StaffTable tableFunc={filtro} />
}

export default UpTable
