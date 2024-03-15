import Header from './components/Header'
import Search from './components/Search'
import StaffTable from './components/Table'

import { EstiloGlobal } from './estiloGlobal'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <div className="searchField container">
        <h1 className="title">Funcionários</h1>
        <Search />
      </div>
      <StaffTable />
    </>
  )
}

export default App
