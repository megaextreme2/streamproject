import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const Usuario = () => {

    return (
        <div className="d-flex">
            <div className="p-3 w-100">
                <header>
                    <aside>
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul className="menu" data-theme='t-orange'>
                                <Link to={'/'}><li>Inico <br /><FaHome></FaHome></li></Link>
                                <Link to={'/home'}><li>Ip <br /><FaNetworkWired></FaNetworkWired></li></Link>
                                <Link to={'https://discord.com/invite/yKATAKqrpK'}><li>Discord <br /><FaDiscord></FaDiscord></li></Link>
                                <Link to={'https://mapa.streamcraft.com.br'}><li>Mapa <br /><FaMap></FaMap></li></Link>
                                <Link to={'/usuario'}><li>Tutorial <br /><FaBook></FaBook></li></Link>
                                <Link to={'/agenda'}><li>Vip (em progresso) <FaStar></FaStar></li></Link>
                            </ul>
                        </div>
                    </aside>
                </header>
            </div>
            <footer>
                <Link to={'/login'}
                    className='btn btn-sm btn-warning'>
                    em progresso
                </Link>
            </footer>
        </div>
    )
}

export default Usuario