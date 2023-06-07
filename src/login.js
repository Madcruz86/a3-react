import './Login.css'
import HeaderInicio from "./componentes/HeaderInicio";
import TextosLoginCadastro from './componentes/TextosLoginCadastro';
import FormularioLogin from './componentes/FormularioLogin';
import Footer from './componentes/Footer';

function Login() {
    return(
        <div className="Inicio">
            <HeaderInicio/>
            <div className='Container'>
                <TextosLoginCadastro propsPag="Login"/>
                <FormularioLogin/>
            </div>
            <Footer/>
        </div>
    )
}

export default Login