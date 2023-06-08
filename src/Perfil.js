import HeaderPrincipal from "./componentes/HeaderPrincipal"
import NavBar from "./componentes/vavBarPrincipal"
import Footer from "./componentes/Footer"
import ResumoPerfil from "./componentes/ResumoPerfil/Resumo";
import PerfilUsuario from "./componentes/PerfilUsuario";

function Perfil(){
    return(
        <>
        <HeaderPrincipal/>
        <NavBar />
        <ResumoPerfil />
        <PerfilUsuario />
        <Footer />
        </>
    )
}

export default Perfil;