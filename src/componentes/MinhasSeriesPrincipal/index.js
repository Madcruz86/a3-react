import './estilo.css';

function MinhasSeries(){
    return(
    <section>
            
                <div class="categoria">
                    <h2>Minhas Séries</h2>
                    <a href="minhas-series.html">Ver mais</a>
                </div>
                <div class="conteudo">
                    <div class="item" id="caixa-adicionar">
                        <a href=""><i class="fa-solid fa-plus"></i><p>Adicionar série a lista</p></a>
                    </div>
                    <a href=""><img class="item" src="imagens/game.jpg" alt="" /></a>
                    <a href=""><img class="item" src="imagens/breaking.jpg" alt="" /></a>
                    <a href=""><img class="item" src="imagens/house.jpg" alt="" /></a>
                    <a href=""><img class="item" src="imagens/Two.jpg" alt="" /></a>
                    <a href=""><img class="item" src="imagens/ranch.jpg" alt="" /></a>
                </div>
            </section>
        )
}

export default MinhasSeries;