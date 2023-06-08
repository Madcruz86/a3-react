import HeaderPrincipal from "./componentes/HeaderPrincipal"
import NavBar from "./componentes/vavBarPrincipal"
import Footer from "./componentes/Footer"
import ConteudoMinhasSeries from "./componentes/ConteudoMinhasSeries";

function MinhasSeries (){
    return(
        <div className="inicio">
            <HeaderPrincipal/>
            <NavBar />
            <ConteudoMinhasSeries />
            <Footer />

        </div>
    )
}

export default MinhasSeries;