import './estilo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../imagens/facebook.svg'
import twitter from '../../imagens/twitter.svg'
import instagram from '../../imagens/square-instagram.svg'


function Footer() {
    return(
        <footer>
            <div>
                {/* <img src={facebook}></img> */}
                {/* <img src={twitter}></img> */}
                {/* <img src={instagram}></img> */}
                {/* <object type="image/svg+xml" data={facebook} className="svg-color"></object> */}
                {/* <object type="image/svg+xml" data={twitter} className="svg-color"></object> */}
                {/* <object type="image/svg+xml" data={instagram} className="svg-color"></object> */}
                <i className="fa-brands fa-facebook" style={{color: '#ffffff80'}}></i>
                <i className="fa-brands fa-twitter" style={{color: '#ffffff80'}}></i>
                <i className="fa-brands fa-square-instagram" style={{color: '#ffffff80'}}></i>
            </div>
            <div>
                <p>&copy; Loop+</p>
            </div>
        </footer>
    )
}

export default Footer