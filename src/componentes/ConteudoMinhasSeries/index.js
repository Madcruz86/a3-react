import './estilo.css';

function ConteudoMinhasSeries(){
    return(
    <section>
        <div class="categoria">
                <h2>Minhas Séries</h2>
        </div>
        <div class="conteudo">
            <div class="item" id="caixa-adicionar">
                <a href=""><i class="fa-solid fa-plus"></i><p>Adicionar série a lista</p></a>
            </div>
            <img class="item" src="imagens/game.jpg" alt="" data-nome="Game of Thrones" data-genero="Ação" data-streaming='Netflix' />
            <img class="item" src="imagens/breaking.jpg" alt="" data-nome="Breaking Bed" data-genero="Ação" data-streaming='Netflix'/>
            <img class="item" src="imagens/house.jpg" alt="" data-nome="House of the Dragon" data-genero="Ação" data-streaming='Netflix'/>
            <img class="item" src="imagens/Two.jpg" alt="" data-nome="Two and a Half Men" data-genero="Comédia" data-streaming='Prime Video'/>
            <img class="item" src="imagens/ranch.jpg" alt=""/>
            <img class="item" src="imagens/office.jpg" alt=""/>
            <img class="item" src="imagens/it.jpg" alt=""/>
            <img class="item" src="imagens/friends.png" alt=""/>
            <img class="item" src="imagens/robot.jpg" alt=""/>
            <img class="item" src="imagens/vikings.png" alt=""/>
            <img class="item" src="imagens/cards.jpg" alt=""/>
            <img class="item" src="imagens/kind.jpg" alt=""/>
            <img class="item" src="imagens/witcher.jpg" alt=""/>
            <img class="item" src="imagens/Alice.png" alt=""/>
            <img class="item" src="imagens/Dark.jpg" alt=""/>
            <img class="item" src="imagens/walking.jpg" alt=""/>
            <img class="item" src="imagens/big.jpg" alt=""/>
        </div>
    </section>
    )
}

export default ConteudoMinhasSeries;