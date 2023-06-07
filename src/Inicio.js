import './Inicio.css'
import HeaderInicio from "./componentes/HeaderInicio";
import TextosInicio from './componentes/TextosInicio';
import BotoesInicio from './componentes/BotoesInicio';
import Footer from './componentes/Footer';
import Login from './login';
import Cadastro from './Cadastro';



function Inicio() {
    return(
        <div className="Inicio">
            <HeaderInicio/>
            <div className='Container'>
                <TextosInicio propsPag="Início" />
                <BotoesInicio/>
            </div>
            <Footer/>
        </div>
    )
}

export default Inicio