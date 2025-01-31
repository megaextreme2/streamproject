import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"

import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Tutorial from "../templates/Usuario/Tutorial"
import Comandos from "../templates/Usuario/Comandos"
import Encantamentos from "../templates/Usuario/Encantamentos"
import Racas from "../templates/Usuario/Racas"
import Crafting from '../templates/Usuario/Crafting'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ip" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />
        <Route path="/crafting" element={<Crafting />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/racas" element={<Racas />} />
        <Route path="/encantamentos" element={<Encantamentos />} />
        <Route path="/comandos/" element={<Comandos />} />

      </Routes>
    </div>
  )
}
export default AppRoutes