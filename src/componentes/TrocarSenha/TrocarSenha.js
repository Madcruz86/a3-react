import './estilo.css';

function TrocarSenha(){
    return(
        <div className="dados-usuario">
            <div className="troca-senha">
                <h2>Trocar senha?</h2>
                <form id="form-troca-senha" action="">
                <div>
                    <label for="senha-atual">Senha atual</label>
                    <input id="senha-atual" type="password" name="senha-atual" required />
                </div><br/>
                <div>
                    <label for="senha-nova">Senha nova</label>
                    <input id="senha-nova" type="password" name="senha-nova" required />
                </div>
                <div>
                    <label for="senha-confirmar">Confirme a nova senha</label>
                    <input id="senha-confirmar" type="password" name="senha-confirmar" required />
                </div>
                    <input id="botao-confirmar" type="submit" value="Confirmar" />
                </form>
            </div>
        </div>

    )
}
export default TrocarSenha;

