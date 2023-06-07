import './estilo.css'
import { Link } from 'react-router-dom';

let login = {
    titulo: 'Faça o login para Continuar',
    subtitulo: 'Não esta cadastrado ainda? ',
    to: '/cadastro',
    textoLink: 'Clique para cadastrar'
}
let cadastro = {
    titulo: 'Faça o seu cadastro e tenha seu registro de séries sempre ao seu alcance.',
    subtitulo: 'Já está registrado?',
    to: '/login',
    textoLink: 'Clique para fazer login'
}

function TextosLoginCadastro(props) {

    if (props.propsPag == "Login"){
        return(
            <div className="titulo">
                <h3>{login.titulo}</h3>
                <p className="menor">{login.subtitulo}</p>
                <Link to={login.to} className="InfoCadastrar">{login.textoLink}</Link>
            </div>
        )
    } else if (props.propsPag == "Cadastro"){
        return(
            <div className="titulo">
                <h3>{cadastro.titulo}</h3>
                <p className="menor">{cadastro.subtitulo}</p>
                <Link to={cadastro.to} className="InfoCadastrar">{cadastro.textoLink}</Link>
            </div>
        )
    }
}

export default TextosLoginCadastro