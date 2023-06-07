import './estilo.css'

function FormularioCadastro() {
    return(
        <div id="area-cadastro">
                        <h2>Cadastre-se</h2>
                        <form id="form-cadastro" action="" method="post">
        
                            <label for="nome">Nome</label>
                            <input id="cadastro-nome" type="text" name="nome" required/>
        
                            <label for="email">E-mail</label>
                            <input id="cadastro-email" type="email" name="email" required/>
                            <label for="pass">Senha</label>
                            <input id="cadastro-senha" type="password" name="pass" required/>
                            <label for="nascimento">Data de nascimento</label>
                            <input id="cadastro-data" type="date" name="aniversario" required/>
                            <input id="cadastro-enviar" type="submit" value="CADASTRAR"/>
        
        
                        </form>
                </div>
    )
}

export default FormularioCadastro