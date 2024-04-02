import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Navbar = () => {
    const menuList = ['WOMEN', 'MEN', 'BEAUTY', 'LIFE', 'BEST', 'SALE', 'NEW', 'EXCLUSIVE', 'EVENT'];
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const authenticate = useSelector((state)=>state.auth.authenticate);
    const dispatch = useDispatch();

    // 로그인으로 이동
    const goToLogin = () => {
        navigate("/login");
    }

    // search-box에서 enter key 누를 시 search
    const search = (event) => {
        if (event.key === "Enter") {
            // 입력한 검색어를 읽어옴
            let keyword = event.target.value;
            console.log("keyword", keyword);

            // url을 바꿔줌 - url 뒤에 파라미터만 추가
            navigate(`/?q=${keyword}`);
        }
    }

    // 메뉴 클릭 시 이동
    const goToMenu = (event) => {
        let field = event.target.textContent;
        navigate(`/?field=${field}`);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }

    return (
        <div>
            <div>
                {authenticate ?
                    (<div className='login-button' onClick={() => dispatch({ type: "LOGOUT_SUCCESS"})}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>)
                    :
                    (<div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>)
                }
            </div>
            {
                isMobile ?
                    (
                        <div className='mobile-nav-section'>
                            <Link to="/"><img className="mobile-logo" src="/shop_logo_mobile.png" /></Link>
                            <div className='mobile-search-box'>
                                <input type="text" onKeyPress={(event) => (search(event))} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='nav-section'>
                            <Link to="/"><img width={300} src="/shop_logo.png" /></Link>
                            <div className='search-box'>
                                <input type="text" onKeyPress={(event) => (search(event))} />
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    )
            }

            {/* 모바일 반응형 웹을 만들어보자 */}
            {
                isMobile ?
                    (
                        <div className='hamburger-menu' onClick={handleMenuToggle}>
                            <FontAwesomeIcon icon={faBars} style={{ color: "#000000", }} size="2x" />
                        </div>
                    )
                    :
                    (
                        <div className='menu-area'>
                            <ul className='menu-list'>
                                {menuList.map((menu) => (
                                    <li onClick={(event) => goToMenu(event)}>{menu}</li>
                                ))}
                            </ul>
                        </div>
                    )
            }
            {
                isMobile && menuOpen && (
                    <div>
                        <div>
                            <button className='mobile-menu-x' onClick={() => (setMenuOpen(false))}>
                                <FontAwesomeIcon icon={faXmark} style={{ color: "#000000", }} size="2x" />
                            </button>
                        </div>
                        <div>
                            <ul className='mobile-menu-list'>
                                {menuList.map((menu) => (
                                    <li onClick={(event) => goToMenu(event)}>{menu}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
