import './estilo.css'

let texto = {
    titulo: 'Bem vindo(a) ao seu portal de series!',
    subtitulo: 'Um lugar onde você pode manter um registro das suas séries'
}

function TextosInicio(props) {

    return(
        <div className="titulo">
            <h3>{texto.titulo}</h3>
            <p className="menor">{texto.subtitulo}</p>
        </div>
    )
    
}

export default TextosInicio