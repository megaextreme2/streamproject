import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import Logo from '../../assets/images/survival.png';
import LogoMD from '../../assets/images/tekkit-modpack.png';
import { FaDiscord, FaMap, FaBook, FaNetworkWired, FaHome, FaStar, FaDownload } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const [serverStatus1, setServerStatus1] = useState('Carregando...');
    const [serverStatus2, setServerStatus2] = useState('Carregando...');

    useEffect(() => {
        fetch('/status1')
            .then(response => response.json())
            .then(data => setServerStatus1(data.status))
            .catch(() => setServerStatus1('Erro ao obter status'));

        fetch('/status2')
            .then(response => response.json())
            .then(data => setServerStatus2(data.status))
            .catch(() => setServerStatus2('Erro ao obter status'));
    }, []);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert(`Texto copiado: ${text}`))
            .catch(() => alert('Erro ao copiar o texto.'));
    };

    return (
        <>
            <head>
                <title>Ip</title>
            </head>
            <header>
                <aside>
                    <div id="menuToggle">
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
            <section className="ss">
                <div className="ips">
                    <div className="box" id="survival">
                        <img className="survival" src={Logo} alt="Survival Logo" />
                        <button id="copiar" onClick={() => handleCopy("StreamCraft.com.br:25566")}>
                            Copiar IP
                        </button>
                        <h4>
                            Obs: Uso da porta é obrigatório
                        </h4>
                        <img className="minecraft" src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg" alt="Minecraft" />
                        <div className="server-status">
                            <h3>Status do Servidor Survival: {serverStatus1}</h3>
                        </div>
                    </div>
                    <div className="box" id="modpack">
                        <img className="modpack" src={LogoMD} alt="Mod Logo" />
                        <button id="copiar" onClick={() => handleCopy("StreamCraft.com.br:25565")}>
                            Copiar IP Modpack
                        </button>
                        <h4>
                            Obs: Uso da porta é obrigatório
                        </h4>
                        <img className="minemod" src="https://minecraft-tutos.com/wp-content/uploads/2020/10/minecraft-forge.jpg" alt="modpack" />
                        <Link to={'https://www.curseforge.com/minecraft/modpacks/stream-craft'} className='download'><li>Modpack <br /><FaDownload></FaDownload></li></Link>
                        <div className="server-status">
                            <h3>Status do Servidor Modpack: {serverStatus2}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Link to={'/login'}
                    className='btn btn-sm btn-warning'>
                    em progresso
                </Link>
            </footer>
        </>
    );
};

export default Home;