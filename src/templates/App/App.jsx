import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import { FaDiscord, FaMap, FaBook, FaNetworkWired, FaHome, FaStar } from 'react-icons/fa';
import backgroundImage from '../App/visualtest-1.png'
import './App.css'

function App() {

  return (
    <>
      <head>
        <title>Inicio</title>
      </head>
      <header>
        <aside>
          <div id="menuToggle" >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu" data-theme='t-orange'>
              <Link to={'/'}><li>Inico <br /><FaHome></FaHome></li></Link>
              <Link to={'/ip'}><li>Ip <br /><FaNetworkWired></FaNetworkWired></li></Link>
              <Link to={'https://discord.com/invite/yKATAKqrpK'}><li>Discord <br /><FaDiscord></FaDiscord></li></Link>
              <Link to={'https://mapa.streamcraft.com.br'}><li>Mapa <br /><FaMap></FaMap></li></Link>
              <Link to={'/tutorial'}><li>Tutorial <br /><FaBook></FaBook></li></Link>
              <Link to={'/agenda'}><li>Vip (em progresso) <FaStar></FaStar></li></Link>
            </ul>
          </div>
        </aside>
      </header>
      <div className='container' >
        <section className="ss" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <img id='stream' src={Logo} alt="Logo stream" />
          <h1>Seja bem-vindo(a) ao Stream Craft</h1>
          <h3>Em um mundo onde a magia e a tecnologia se entrelaçam, cada<br />
          </h3>
          <h4>decisão pode ser a chave para dominar os elementos ou construir<br />
          </h4>
          <h5>máquinas que alteram a realidade. Prepare-se para uma aventura
            épica!</h5>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </section>

        <footer>
          <Link to={'/login'}
            className='btn btn-sm btn-warning'>
            em progresso
          </Link>
        </footer>
      </div>
    </>
  )
}

export default App
