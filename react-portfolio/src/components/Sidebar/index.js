import './index.scss'
import {Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        {/* <Link className='logo' to='/' />
            <img></img> */}
        <nav>
            <NavLink exact="true" activeclasname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclasname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclasname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/mateonav/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />

                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://github.com/mateonav98'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />

                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar