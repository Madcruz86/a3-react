import './estilo.css';

function CategoriasPrincipal(){
    return(
        <section>
            <div className='titulo'>
                <p className="link-esquerda">
                    <a href="">Ver mais</a>
                </p>
                <h2>Comédia</h2>
                <hr/>
            </div>
            <div id="conteudo">
                
                <div className="item">
                    <a href=""><img src="imagens/Two.jpg" alt=""/></a>
                </div>
                
                <div className="item">
                    <a href=""><img src="imagens/Two.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/ranch.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/office.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/it.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/friends.png" alt=""/></a>
                </div>
            </div>

        </section>
    )
}

export default CategoriasPrincipal;