import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pag1 from '../../assets/images/page_1.png';
import pag2 from '../../assets/images/page_2.png';
import pag3 from '../../assets/images/page_3.png';
import pag4 from '../../assets/images/page_4.png';
import ruby from '../../assets/images/ruby.jpg';
import capar from '../../assets/images/ruby-capacete.png';
import peitor from '../../assets/images/ruby-peitoral.png';
import calcar from '../../assets/images/ruby-calça.png';
import botar from '../../assets/images/ruby-bota.png';
import espadar from '../../assets/images/ruby-espada.png';
import lancar from '../../assets/images/ruby-lança.png';
import machador from '../../assets/images/ruby-machado.png';
import capae from '../../assets/images/esmerald-capacete.png';
import peitoe from '../../assets/images/esmerald-peitoral.png';
import calcae from '../../assets/images/esmerald-calça.png';
import botae from '../../assets/images/esmerald-bota.png';
import fullruby from '../../assets/images/full-ruby.png';
import fullemerald from '../../assets/images/full-emerald.png';
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
              <Link to={'/tutorial'}><li>Tutorial <br /><FaBook /></li></Link>
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
                <img src={ruby} id="anao" />
                <Link to={'#'} id='racas'><h1 id='tr'>RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag2})` }}>
              <div className="content">
              <h2>A Lenda da Ruby Forjada </h2>
              <p>Há muitos séculos, em um mundo onde a magia se entrelaçava com a arte da forja, existia uma joia lendária conhecida como Ruby.
                 Diferente dos outros recursos comuns extraídos das profundezas da terra, essa pedra não era encontrada, mas sim forjada a partir de elementos raros e encantamentos antigos.</p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag3})` }}>
              <div className="content">
              <img src={capar} id="anao" />
              <Link to={'#'} id='racas'><h1 id='bl'>CAPACETE DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <h2>O Capacete Ruby</h2>
                <p>
                  Forjado pelos mestres anões de Khaz’Thir, o Capacete Rubi foi criado em meio às chamas sagradas do vulcão Thraun. Moldado apenas com a Ruby, a peça resplandecia como o coração de um dragão.
                  Concedia a seu portador uma proteção imbatível, capaz de repelir até as mais devastadoras chamas.<br />
                  Dizem que nenhum guerreiro que vestiu o Capacete Rubi caiu em batalha.<br />
                </p>
                O capacete concede +7 de proteção ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={peitor} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>PEITORAL DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>O Peitoral Ruby</h2>
                <p>
                  Forjado nas chamas de Khaz'Thir por Bramnar Chama-Viva, o Peitoral Ruby foi moldado com a essência ardente da Ruby. 
                  Suas runas brilhantes ofereciam uma defesa impenetrável, protegendo o portador contra lâminas e feitiços.<br />
                  Dizem que quem veste essa relíquia sente o fogo dos anões pulsar junto ao peito. <br />
                </p>
                O peitoral concede +12 de proteção ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={calcar} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>CALÇA DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>A Calça Ruby</h2>
                <p>
                  Forjada nas profundezas de Khaz'Thir, a Calça Ruby foi obra dos mestres anões, moldada com a Ruby.
                  Flexível e resistente, oferecia ao portador proteção contra golpes fatais sem restringir seus movimentos.<br />
                  Dizem que suas runas flamejantes tornam o guerreiro ágil como o fogo.<br /> 
                </p>
                A calça condece +10 de proteção ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={botar} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>BOTAS DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Botas Ruby</h2>
                <p>
                  Forjadas nas profundezas de Khaz’Thir, as Botas Ruby foram obra dos mestres anões, moldadas com a própria essência da Ruby.
                  Leves como o vento e firmes como a montanha, permitiam ao portador cruzar campos de batalha com a velocidade de uma tempestade sem perder a firmeza no solo.<br />
                  Dizem que suas runas flamejantes concedem ao guerreiro a capacidade de pisar entre as sombras e o fogo, tornando-o inalcançável para seus inimigos.
                  Apenas os mais dignos conseguem despertar seu verdadeiro poder.<br />
                </p>
                condece +7 de proteção ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={fullruby} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>ARMADURA RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Armadura Ruby</h2>
                <p>
                A Armadura Ruby envolve seu portador em chamas ancestrais, tornando-o ágil e impenetrável. Suas runas queimam os inimigos, e seu brilho rubro intensifica a força de quem a veste.<br />
                Apenas guerreiros inabaláveis suportam seu poder, pois o fogo da Ruby não protege os fracos ele os consome.<br />
                </p>
                condece +36 de proteção ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={espadar} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>ESPADA DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Espada Ruby</h2>
                <p>Forjada nas profundezas de Khaz’Thir, a Espada Ruby foi obra dos mestres anões, moldada com a essência da Ruby.
                  Afiada como um trovão cortante, canaliza o fogo das runas ancestrais, tornando cada golpe veloz e letal.
                  Dizem que, nas mãos do guerreiro certo, suas chamas nunca se apagam.</p>
                  afiação da espada +12 

              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={lancar} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>LANÇA DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Lança Ruby</h2>
                <p>A Lança Ruby é uma extensão do fogo indomável, ágil e letal. 
                  Suas chamas dançam a cada golpe, queimando inimigos antes mesmo do impacto. <br />
                  Dizem que, nas mãos certas, ela atravessa o ar como um relâmpago, deixando um rastro de cinzas no campo de batalha.
                  </p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={machador} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>MACHADO DE RUBY</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Machado Ruby</h2>
                <p>
                O Machado Ruby é a fúria do fogo moldada em lâmina. 
                Cada golpe desferido libera chamas vorazes, capazes de reduzir armaduras a cinzas. 
                Dizem que, em combate, ele ruge como uma forja em chamas, consumindo tudo em seu caminho.
                </p>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={capae} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>CAPACETE DE ESMERALDA</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Capacete Esmeralda</h2>
                <p>
                  O Capacete de Esmeralda nasceu da antiga forja dos mestres anões, esculpido a partir da base de um lendário Capacete de Diamante.
                  Infundido com o poder da esmeralda, ele concede ao portador visão além do véu, percebendo movimentos antes que aconteçam.
                  Suas runas brilham com um verde místico, fortalecendo a mente contra ilusões e encantamentos. <br />
                  Dizem que aqueles que o usam jamais são surpreendidos, pois veem o perigo antes mesmo que ele desperte.
                </p>
                concede +1 ded vida máxima ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={peitoe} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>PEITORAL DE ESMERALDA</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Peitoral Esmeralda</h2>
                <p>
                O Peitoral de Esmeralda, forjado sobre a base de um lendário Peitoral de Diamante, emana um brilho místico que envolve seu portador. 
                Suas runas ancestrais fortalecem o corpo e a alma, tornando-o resistente a maldições e feitiços.  <br />
                Dizem que, enquanto seu brilho verde pulsar, nenhum veneno ou encantamento poderá romper sua defesa.
                </p>
                concede +1.5 de vida máxima ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={calcae} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>CALÇA DE ESMERALDA</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Calça Esmeralda</h2>
                <p>
                A Calça de Esmeralda, aprimorada a partir de uma base de Diamante, concede ao portador agilidade e resistência sobrenaturais.
                Suas runas místicas fortalecem os músculos e tornam cada movimento leve como o vento. <br />
                Dizem que, com seu brilho esverdeado, ela protege contra armadilhas e terrenos traiçoeiros, guiando o guerreiro pelo caminho seguro.
                </p>
                concede +1.5 de vida máxima ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={botae} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>BOTAS DE ESMERALDA</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Botas Esmeralda</h2>
                <p>
                A Bota de Esmeralda, aprimorada a partir de uma base de Diamante, permite ao portador caminhar sem ser detectado e reagir com velocidade relâmpago.
                Suas runas místicas ajustam os passos com precisão, tornando cada deslocamento fluido e silencioso. <br />
                Dizem que, com seu brilho esverdeado, ela evita quedas e concede firmeza mesmo nos terrenos mais instáveis, garantindo equilíbrio absoluto
                </p>
                concede +1 de vida máxima ao portador.
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
              <img src={fullemerald} id="anao" />
              <Link to={'#'} id='racas'><h1 id='vip'>ARMADURA DE ESMERALDA</h1></Link>
              </div>
            </div>

            <div className="page" style={{ backgroundImage: `url(${pag4})` }}>
              <div className="content">
                <h2>Armadura Esmeralda</h2>
                <p>
                A Armadura de Esmeralda, aprimorada a partir de uma base de Diamante, envolve o portador com uma defesa impenetrável e vigor ilimitado. 
                Suas runas místicas harmonizam corpo e mente, ampliando reflexos e resistência a impactos. <br />
                Dizem que, com seu brilho esverdeado, ela dissipa energias malignas e desvios do destino, guiando o guerreiro com proteção absoluta e força inabalável.
                </p>
                proteção nível netherite <br />
                
                bônus set completo
                +5 de vida
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