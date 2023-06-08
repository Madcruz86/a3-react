import './estilo.css';

function CategoriasPrincipal(){
    return(
        <section>
            <div className="categoria">
            <h2>Assistindo</h2>
        </div>
        <div className="conteudo">
                <a href=""><img className="item" src="imagens/Two.jpg" alt=""/></a>
                <a href=""><img className="item" src="imagens/ranch.jpg" alt=""/></a>
                <a href=""><img className="item" src="imagens/office.jpg" alt=""/></a>
                <a href=""><img className="item" src="imagens/it.jpg" alt=""/></a>
                <a href=""><img className="item" src="imagens/friends.png" alt=""/></a>
                <a href=""><img className="item" src="imagens/friends.png" alt=""/></a>
                
        </div>
    </section>
    )
}

export default CategoriasPrincipal;