import "./estilo.css";
import {FaFilm} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';


function NavBar (){
    return(
    <div className="navBar">
        <nav>
            <ul>
                <li><a href="index.html"><FaArrowCircleRight/> SAIR</a></li>
                <li><a href="meu-perfil.html"><FaUserAlt/> MEU PERFIL</a></li>
                <li><a href="streaming.html"><FaYoutube/> STREAMING</a></li>
                <li><a href="minhas-series.html"><FaFilm/> MINHAS SERIES</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar