import './Streaming.css';
import HeaderPrincipal from "./componentes/HeaderPrincipal"
import NavBar from "./componentes/vavBarPrincipal"
import Footer from "./componentes/Footer"
import ConteudoStreaming from './ConteudoStreaming';
import BarraPesquisa from "./componentes/BarraPesquisa"



function Streaming(){
    return(
        <>
            <HeaderPrincipal/>
            <NavBar />
            <BarraPesquisa />
            <ConteudoStreaming />
            <Footer />
        </>
    )
}

export default Streaming