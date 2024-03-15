import logo from '../../assets/images/Fundo.png'
import { Head } from './style'

const Header = () => (
  <Head>
    <div className="container">
      <img src={logo} alt="Logo BeMobile" />
    </div>
  </Head>
)

export default Header
