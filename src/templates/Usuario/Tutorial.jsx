import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pag1 from '../../assets/images/page_1.png';
import pag2 from '../../assets/images/page_2.png';
import pag3 from '../../assets/images/page_3.png';
import pag4 from '../../assets/images/page_4.png';
import pag5 from '../../assets/images/page_5.png';
import pag6 from '../../assets/images/page_6.png';
import anao from '../../assets/images/anãocc.png';
import mesa from '../../assets/images/Enchanting_Table.webp'
import bloco from '../../assets/images/Impulse_Command_Block.webp';
import crafting from '../../assets/images/crafting_table.webp';
import { FaDiscord, FaMap, FaBook, FaNetworkWired, FaHome, FaStar } from 'react-icons/fa';
import backgroundImage from './bestiary_menu.png';
import './usuario.css';

const Usuario = () => {
  const settings = {
    prevArrow: <div className="slick-prev">‹</div>,
    nextArrow: <div className="slick-next">›</div>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostra duas páginas por vez
    slidesToScroll: 2,
    fade: false // Desativa a animação de fade
  };

  return (
    <>
      <head>
        <title>Tutorial</title>
      </head>
      <header>
        <aside>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu" data-theme="t-orange">
              <Link to={'/'}><li>Inico <br /><FaHome /></li></Link>
              <Link to={'/ip'}><li>Ip <br /><FaNetworkWired /></li></Link>
              <Link to={'https://discord.com/invite/yKATAKqrpK'}><li>Discord <br /><FaDiscord /></li></Link>
              <Link to={'https://mapa.streamcraft.com.br'}><li>Mapa <br /><FaMap /></li></Link>
              <Link to={'/usuario'}><li>Tutorial <br /><FaBook /></li></Link>
              <Link to={'/tutorial'}><li>Vip (em progresso) <FaStar /></li></Link>
            </ul>
          </div>
        </aside>
      </header>
      <div className="container">
        <div className="book" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Slider {...settings}>
            <div className="page" style={{ backgroundImage: `url(${pag1})` }}>
              <div className="content">
                <img src={anao} id="anao" />
                <Link to={'/racas'} id='racas'><h1 id='tr'>RAÇAS</h1></Link>
              </div>
            </div>
            <div className="page" style={{ backgroundImage: `url(${pag2})` }}>
              <div className="content">
              <img src={mesa} id="mesa" />
              <Link to={'https://github.com/Geolykt/EnchantmentsPlus/wiki/List-of-Enchantments'} id='racas'><h1 id='ms'>ENCANTAMENTOS</h1></Link>
              </div>
            </div>
            <div className="page" style={{ backgroundImage: `url(${pag3})` }}>
              <div className="content">
              <img src={bloco} id="bloco" />
              <Link to={'/comandos'} id='racas'><h1 id='bl'>COMANDOS</h1></Link>
              </div>
            </div>
            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={crafting} id="bloco" />
              <Link to={'/crafting'} id='racas'><h1 id='bl'>CRAFTING</h1></Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <footer>
        <Link to={'/login'} className="btn btn-sm btn-warning">
          em progresso
        </Link>
      </footer>
    </>
  );
};

export default Usuario;