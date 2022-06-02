import './index.scss'
import {Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/' />
            <img></img>
        <nav>
            <NavLink exact="true" activeclasname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
  )
}

export default Sidebar