import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['WOMEN', 'MEN', 'BEAUTY', 'LIFE', 'BEST', 'SALE', 'NEW', 'EXCLUSIVE', 'EVENT'];
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>　로그인</div>
                </div>
            </div>
            <div className='nav-section'>
                <Link to="/"><img width={300} src="/shop_logo.png" /></Link>
                <div className='search-box'>
                    <input type="text" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Navbar
