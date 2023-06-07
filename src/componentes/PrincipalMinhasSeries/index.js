import './estilo.css'

function PrincipalMinhasSeries(){
    return(
    <div className='MinhasSeries'>
    <section>
        <div className='titulo'>
            <p class="link-esquerda">
                <a href="minhas-series.html">Ver mais</a>
            </p>
            
                <h2>Minhas Séries</h2>
                <hr />
        </div>
            <div id="conteudo">
                <div class="item" id="caixa-adicionar"className="item">
                    <a href=""><p>+<br />Adicionar série a lista</p></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/game.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/breaking.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/house.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/Two.jpg" alt=""/></a>
                </div>
                <div className="item">
                    <a href=""><img src="imagens/ranch.jpg" alt=""/></a>
                </div>
            </div>
        </section>
        </div>
        )
}

export default PrincipalMinhasSeries;