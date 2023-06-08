import HeaderPrincipal from "./componentes/HeaderPrincipal"

import NavBar from "./componentes/vavBarPrincipal"
import Footer from "./componentes/Footer"
import CategoriasPrincipal from "./componentes/CategoriasPrincipal"
import BarraPesquisa from "./componentes/BarraPesquisa"
import MinhasSeries from "./componentes/MinhasSeriesPrincipal"



function Principal() {
    return(
        <>
            <HeaderPrincipal />
            <NavBar />
            <BarraPesquisa />
            <MinhasSeries />
            <CategoriasPrincipal/>
            <Footer />
        </>
    )
}

export default Principal