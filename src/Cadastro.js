import './Login.css'
import HeaderInicio from "./componentes/HeaderInicio";
import TextosLoginCadastro from './componentes/TextosLoginCadastro';
import FormularioCadastro from './componentes/FormularioCadastro';
import Footer from './componentes/Footer';

function Cadastro() {
    return(
        <div className="Inicio">
            <HeaderInicio/>
            <div className='Container'>
                <TextosLoginCadastro propsPag="Cadastro"/>
                <FormularioCadastro/>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro