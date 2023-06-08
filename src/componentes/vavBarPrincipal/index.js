import "./estilo.css";
import {FaFilm} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';


function NavBar (){
    return(
    <div className="navBar">
        <nav>
            <ul>
                <li><a href="/"><FaArrowCircleRight/> SAIR</a></li>
                <li><a href="/perfil"><FaUserAlt/> MEU PERFIL</a></li>
                <li><a href="/streaming"><FaYoutube/> STREAMING</a></li>
                <li><a href="/minhas-series"><FaFilm/> MINHAS SERIES</a></li>
                <li><a href="/principal"><FaHome/> INICIO</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar