import './estilo.css'

function FormularioLogin() {
    return(
        <div id="area-login" className="area-form">
                <h2>Fazer Login</h2>
                
                <form id="form-login" action="">

                    <label for="email">E-mail</label>
                    <input id="email" type="email" name="email" required/>
                    <label for="pass">Senha</label>
                    <input id="senha" type="password" name="pass" required/>
                    
                    <p id="esqueci-senha">Esqueci minha senha</p>
                    <input type="submit" value="Entrar"/>
                </form>
                <p id="alerta-login">Usuário e/ou senha incorretos</p>
        </div>
    )
}

export default FormularioLogin