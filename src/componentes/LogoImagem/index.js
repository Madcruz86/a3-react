import './estilo.css'
import logo from '../../imagens/logo.png'
import { Link } from 'react-router-dom';

function LogoInicio() {
    return(
        <div className="area-logo">
            <Link to="/">
                <img src={logo} alt=""/>
                <p>Loop +</p>
            </Link>
        </div>
    )
}

export default LogoInicio