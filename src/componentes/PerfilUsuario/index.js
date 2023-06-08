import DadosUsuario from '../DadosUsuario';
import TrocarSenha from '../TrocarSenha/TrocarSenha';
import './estilo.css';

function PerfilUsuario(){
    return(
    <div className="dados-usuario">
        <DadosUsuario />
        <TrocarSenha />
    </div>
    )
}

export default PerfilUsuario;