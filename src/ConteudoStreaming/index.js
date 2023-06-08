import './estilo.css';

function ConteudoStreaming(){
    return(
        <section>
            <div class="categoria">
                <h2>Plataformas de Streaming</h2>
             </div>
            <div class="conteudo" id="conteudo">
            <div class="item" id="caixa-adicionar">
                <a href=""><i class="fa-solid fa-plus"></i><p>Adicionar Streaming a lista</p></a>
            </div>
                <img src="imagens/netflix.jpg" class="item" alt="" data-nome="Netflix" />
                <img src="imagens/disney.jpg" class="item" alt="" data-nome="Disney" />
                <img src="imagens/amazon.png" class="item" alt="" data-nome="Prime Video" />
                <img src="imagens/apple.png" class="item" alt="" data-nome="Apple Tv+"/>
                <img src="imagens/paramount.png" class="item" alt="" data-nome="Paramount"/>
        </div>
    </section>
    )
}
export default ConteudoStreaming;