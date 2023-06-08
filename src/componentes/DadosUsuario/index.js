import './estilo.css';

function DadosUsuario(){
    return(
    <div className='dados-usuario'>
        <div className="dado">
            <label for="">Nome:</label>
            <input type="text" name="nome-usuario" id="nome-usuario" disabled />
         </div>
        <div className="dado">
            <label for="">E-mail:</label>
            <input type="email" name="emil-usuario" id="email-usuario" disabled />
        </div>
        <div className="dado">
            <label for="">Data de Nascimento:</label>
            <input type="date" name="data-usuario" id="data-usuario" disabled />
        </div>
    </div>
    )
}

export default DadosUsuario;