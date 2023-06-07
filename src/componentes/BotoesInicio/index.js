import './estilo.css'
import { Link } from 'react-router-dom';

const rotas = [{
    label: 'Entrar',
    to: '/login',
}, {
    label: 'Cadastre-se',
    to: '/cadastro',
}];

function BotoesInicio() {
    return(
        <div className="AreaBotoes">
            {rotas.map((rota, index) => (
                <Link className='botaoInicio' to={rota.to}><button>{rota.label}</button></Link>
            ))}
        </div>
    )
}

export default BotoesInicio