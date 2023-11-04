import React, {useEffect, useRef} from 'react'
import "./header.css"
import {useTranslation} from 'react-i18next'

const Header = ({theme, toggleTheme}) => {

    
    const headerRef = useRef(null);

    const menuRef = useRef(null);
    const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active');

    const headerFunc = () =>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("header__shrink");
        }else{
            headerRef.current.classList.remove("header__shrink");
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', headerFunc);

        return () => {
            window.removeEventListener('scroll', headerFunc);
        }
    },[]);

    

    
    const handleClick = e =>{
        e.preventDefault();
        
        const targetAttr = e.target.getAttribute('href');
        
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }
    const nav__links=[
        {
            path: '#home',
            display: 'الرئيسية'
        },
        {
            path: '#about',
            display: 'من نحن'
        },
        {
            path: '#service',
            display: 'خدمات'
        },
        {
            path: '#team',
            display: 'فريق'
        },
        {
            path: '#blog',
            display: 'مدونة'
        },
    ]

    const {t, i18n} = useTranslation();

    const changeEN = () =>{
        i18n.changeLanguage('en');
        // document.body.dir = i18n.dir();
    }
    
    const changeAR = () =>{
        i18n.changeLanguage('ar');
        // document.body.dir = i18n.dir();
    }

    useEffect(()=>{
        document.body.dir = i18n.dir();
        // eslint-disable-next-line
    },[changeAR, changeEN]);
    
    return (
        <>
            <header className='header' ref={headerRef}>
                <div className="container">
                    <div className="nav__wrapper">
                        <div className="logo">
                            <a href='#'>
                                <h2>{t("بونيك")}</h2>
                            </a>
                        </div>

                        {/* ***************** NAVBAR ***************** */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu">
                                {
                                    nav__links.map((item,index)=>(
                                        <li className="menu__item" key={index}>
                                            <a href={item.path} onClick={handleClick} className='menu__link'>
                                                {t(`${item.display}`)}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                            {/* ********** LIGHT MODE THEME && LANGUAGE ********** */}
                            <div className="light__mode">
                                <span onClick={toggleTheme}>
                                    {
                                        theme === 'light-theme' ? (
                                            <span>
                                                <i class="ri-moon-line"></i> {t("الوضع الليلي")}</span>) : (
                                        <span>
                                            <i class="ri-sun-line"></i> {t("الوضع العادي")}</span>
                                        )
                                    }
                                    </span>
                                    <span>
                                            <button className='btn' onClick={changeEN} >{t("الانجليزية")}</button>
                                            <button className='btn' onClick={changeAR} >{t("العربية")}</button>
                                    </span>
                            </div>
                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i class="ri-menu-line"></i>
                            </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header