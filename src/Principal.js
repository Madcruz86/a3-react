import HeaderPrincipal from "./componentes/HeaderPrincipal"
import PrincipalMinhasSeries from "./componentes/PrincipalMinhasSeries"
import NavBar from "./componentes/vavBarPrincipal"
import Footer from "./componentes/Footer"
import CategoriasPrincipal from "./componentes/CategoriasPrincipal"
import BarraPesquisa from "./componentes/BarraPesquisa"



function Principal() {
    return(
        <>
            <HeaderPrincipal />
            <NavBar />
            <BarraPesquisa />
            <PrincipalMinhasSeries/>
            <CategoriasPrincipal />
            <Footer />
        </>
    )
}

export default Principal