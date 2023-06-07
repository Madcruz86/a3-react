import './estilo.css'

function BarraPesquisa(){
    return(
        <div id="barra-pesquisa">
            <input id="busca" type="text" placeholder="Pesquisar" />
            <span id="box_icone_busca">
                <i id="icone_busca" className="fa fa-search"></i>
            </span>
        </div>
    )
}

export default BarraPesquisa;