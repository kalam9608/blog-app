import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from './lyout.jsx/Container';
import { useSelector } from 'react-redux';
import Logout from '../pages/LogoutButton';

const Header = () => {
    const navigate = useNavigate();

    const status = useSelector((state) => state.auth.status)

    const navItems = [
        {
            name: "Home",
            slug: "/home",
            active: status,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !status,
        },
        {
            name: "Login",
            slug: "/login",
            active: !status,
        },
        // {
        //     name: "Logout",
        //     slug: "/logout",
        //     active: status,
        // }
    ]
    return (
        <header>
            <Container>
                <nav className='nav'>
                    <div>
                        <h1>logo</h1>
                    </div>

                    <ul>
                        {navItems?.map((item) => {
                            return item?.active ? (
                                <li key={item?.name}>
                                    <button
                                        onClick={() => {
                                            navigate(item?.slug)
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        })}
                        {status && <Logout>logout</Logout>}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header