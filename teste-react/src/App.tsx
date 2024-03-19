import { Provider } from 'react-redux'
import { useState } from 'react'

import Header from './components/Header'
import Search from './components/Search'
import UpTable from './components/UpTable'

import { EstiloGlobal } from './estiloGlobal'

import { store } from './store'

function App() {
  const [filtro, setFilto] = useState('')

  console.log(filtro)

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <div className="searchField container">
        <h1 className="title">Funcionários</h1>
        <Search setState={setFilto} />
      </div>
      <UpTable busca={filtro} />
    </Provider>
  )
}

export default App
