import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pag1 from '../../assets/images/page_1.png';
import pag2 from '../../assets/images/page_2.png';
import pag3 from '../../assets/images/page_3.png';
import pag4 from '../../assets/images/page_4.png';
import anao from '../../assets/images/anãocc.png';
import branco from '../../assets/images/branco.png';
import verde from '../../assets/images/verde.png';
import preto from '../../assets/images/preto.png';
import vermelho from '../../assets/images/vermelho.png';
import gabiru from '../../assets/images/gabiru.png';
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
              <Link to={'/agenda'}><li>Vip (em progresso) <FaStar /></li></Link>
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
                <Link to={'#'} id='racas'><h1 id='an'>ANÃO</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag2})` }}>
              <div className="content">
              <p><p id='brilho3'>Uma raça orgulhosa e robusta de robustos povos barbudos que chama o subterrâneo seu lar.</p> 
              Suas habilidades em mineração e forja são incomparáveis, mas suas pernas curtas tornam mais difícil correr.</p><br />
                <h2>
                  Suas vantagens e destavantagens são:<br />
                </h2>
                <p>
                  Vantagens:<br />
                  +20% Experiência em mineração;<br />
                  +20% Experiência em forja;<br />
                  +20% Experiência em armas pesadas;<br />
                  +40% Resistência à explosão;<br />
                  +15% Resistência corpo a corpo;<br />
                  +4 Saúde máxima.<br />

                  Desvantagens:<br />
                  -15% Velocidade de movimento;<br />
                  -20% Resistência a recuo;<br />
                  -10% Dano a distância;<br />
                  -10% Armadura.
                  </p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag3})` }}>
              <div className="content">
                <img src={branco} id="bloco" />
                <Link to={'#'} id='racas'><h1 id='hm'>HUMANO</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <p><p id='brilho4'>Uma raça expansionista flexível com o hábito de aumentar suas colônias e territórios.</p> 
              Eles não se especializa em nehuma habilidade específica e tendem a ser apenas muito bons e qualquer coisa.</p><br />
                <h2>
                  Suas vantagens e destavantagens são:<br />
                </h2>
                <p>
                  Vantagens:<br />
                  +15% Experiência de habilidade;<br />
                  +10% Resistência a dano;<br />
                  +25% Redução de tempo de recarga de habilidade;<br />

                  Desvantagens:<br />
                  Nenhuma.</p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <img src={verde} id="bloco" />
                <Link to={'/agenda'} id='racas'><h1 id='ef'>ELFO</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <p><p id='brilho5'>Uma elegante raça mágica de homens da floresta que chama as florestas de seu lar.</p>
                Sua afinidade à mágica os tornam encantadores especialistas e sua longa vida útil 
                permite que eles aperfeiçoem suas habilidades de combate, mas seu peso leve estrutura corporal os tornam mais frágeis.
                </p>
              <h2>
                  Suas vantagens e destavantagens são:<br />
                </h2>
                <p>
                  Vantagens:<br />
                  +20% Experiência em encantamento;<br />
                  +20% Experiência de arco e flecha;<br />
                  +20% Experiência com armas leves;<br />
                  +25% Resistência mágica;<br />
                  +40% Resistência a dano de queda;<br />
                  +10% Velocidade de movimento.<br />

                  Desvantagens:<br />
                  -4 Saúde máxima.</p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <img src={preto} id="bloco" />
                <Link to={'#'} id='racas'><h1 id='tb'>Tenebrys</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <p><p id='brilho2'>Humanos corrompidos por pactos, trocaram parte de sua humanidade por poder.</p>
                  Seu objetivo e conhecimentos são inimagináveis, possuem magias escuras e maldições.
                  Mas seu corpo não é feito para suportar tal mal...</p><br />
                <h2>
                  Suas vantagens e destavantagens são:
                </h2>
                <p>
                  Vantagens:<br />
                  +20% Experiência em encantamento;<br />
                  +20% Experiência em armas leves;<br />
                  +20% Experiência em tudo.<br />

                  Desvantagens:<br />
                  -15% Velocidade de movimento;<br />
                  -15% Resistência corpo a corpo;<br />
                  -40% Resistência à explosão;<br />
                  -2 Saúde máxima.</p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <img src={vermelho} id="bloco" />
                <Link to={'#'} id='racas'><h1 id='ill'>Illumythar</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <p>Humanos que veneram o Deus Sol.<br />
                  <p id='brilho'>Sua Fé e crença os beneficiam com bensãos do Sol.</p>
                  Espalhar sua gloria e luz pelo mundo em busca da paz, mesmo que por meios violentos...</p><br />
                <h2>
                  Suas vantagens e destavantagens são:
                </h2>
                <p>
                  Vantagens:<br />
                  +40% Experiência em armadura leve;<br />
                  +40% Experiência em armas leves;<br />
                  +40% Experiência em armadura pesada;<br />
                  +40% Experiência em armas pesadas.<br />

                  Desvantagens:<br />
                  -10% Experiência geral;<br />
                  -15% Dano corpo a corpo;<br />
                  -20% Experiência de encantamento.</p>
              </div>
            </div>
    
            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <img src={gabiru} id="bloco" />
                <Link to={'#'} id='racas'><h1 id='drc'>Draconico</h1></Link>
              </div>
            </div>
            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <p>
                  <p id='brilho6'>Uma raça mística quase extinta, possui um ódio antigo contra a humanidade.</p>
                  Linha de frente em qualquer tipo de combate. Sua longa vida util permite que eles aperfeiçoem 
                  suas habilidades, sua magia atualmente corrompida pelo ódio se tornou instável</p><br />
                <h2>
                  Suas vantagens e destavantagens são:
                </h2>
                <p>
                  Vantagens:<br />
                  +50% Resistência a dano de Queda;<br />
                  +15% Resistência a dano;<br />
                  +15% Resistência a Explosão;<br />
                  +15% Dano corpo a corpo<br />

                  Desvantagens:<br />
                  -45% Resistência a magia;<br />
                  -30% Xp global;<br />
                  -30% Recarga de habilidade.</p>
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