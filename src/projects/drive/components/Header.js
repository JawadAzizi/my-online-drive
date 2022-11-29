import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <nav className="header">
            <NavLink to ="/">
                <h2>My Drive</h2>
            </NavLink>
            <ul>
                <li>
                    <NavLink to ="/user">
                        <span>User</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/setting">
                        <span>setting</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header