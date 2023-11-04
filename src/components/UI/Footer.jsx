import React from 'react'
import "../../styles/footer.css"
import {useTranslation} from 'react-i18next'

const Footer = () => {

    const quickLinks = [
        {
            path: '#',
            display: "تسويق"
        },
        {
            path: '#',
            display: "التحليلات"
        },
        {
            path: '#',
            display: 'مالية'
        },
    ]

    const quickLinks02 = [
        {
            path: 'pricing',
            display: "التسعير"
        },
        {
            path: '#',
            display: "توثيق"
        },
        {
            path: '#',
            display: "دليلك"
        },
    ]

    const quickLinks03 = [
        {
            path: '#about',
            display: "من نحن"
        },
        {
            path: '#',
            display: "وظيفة"
        },
        {
            path: '#blog',
            display: "مدونة"
        },
    ]

    const dev =
        {
            name: 'Mahmoud Mohamed',
            link: '#'
        }

    const {t, i18n} = useTranslation();

    const changeEN = () =>{
        i18n.changeLanguage('en');
    }

    const changeAR = () =>{
        i18n.changeLanguage('ar');
    }
    

    const year = new Date().getFullYear()

    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className='footer__wrapper'>
                        <div className='footer__logo'>
                            <h2>{t("بونيك")}</h2>
                            <p className="desc">{t("تنمو معنا")}</p>
                            <p className="small__text desc">{t("كنا مقصرين في ترك هذا خارج قائمة أفضل عروض أسعار التسويق الرقمي. على الرغم من أن هذا الاقتباس يمتد إلى ما هو أبعد من حدود التسويق الرقمي، إلا أن المفهوم ينطبق على الصناعة.")}</p>
                        </div>

                        <div className="footer__quick-links">
                            <div className="quick__links-title">{t("حل")}</div>
                            <ul className="quick__links">
                                {
                                    
                                    quickLinks.map((link, index) => {
                                        return (
                                            <li className='quick__link-item' key={index}>
                                                <a href={link.path}>{t(`${link.display}`)}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="footer__quick-links">
                            <div className="quick__links-title">{t("دعم")}</div>
                            <ul className="quick__links">
                                {
                                    
                                    quickLinks02.map((link, index) => {
                                        return (
                                            <li className='quick__link-item' key={index}>
                                                <a href={link.path}>{t(`${link.display}`)}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="footer__quick-links">
                            <div className="quick__links-title">{t("وكالة")}</div>
                            <ul className="quick__links">
                                {
                                    
                                    quickLinks03.map((link, index) => {
                                        return (
                                            <li className='quick__link-item' key={index}>
                                                <a href={link.path}>{t(`${link.display}`)}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                        <p className="copyright">{t("حقوق النشر")} {year}, {t("انشأ من قبل")} <a href={dev.link}>{t("محمود محمد")}&copy;</a> . {t("كل الحقوق محفوظة")}.{' '}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer