import React from 'react'
import '../../styles/contact.css'
import {useTranslation} from 'react-i18next'

const Contact = () => {
    const {t, i18n} = useTranslation();

    const changeEN = () =>{
        i18n.changeLanguage('en');
    }

    const changeAR = () =>{
        i18n.changeLanguage('ar');
    }
    return (
        <>
            <section className="contact" id='contact'>
                <div className="container">
                <div className="content">
                    <div className="contact__form">
                        <h1>{t("تواصل معنا")}</h1>
                        <form>
                            <div className="form__group">
                                <label htmlFor="name">{t("الاسم")}</label>
                                <input type="text" id='name' name='name' placeholder='enter your name' required/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="email">{t("البريد الالكتروني")}</label>
                                <input type="email" id='email' name='email' placeholder='enter your email' required/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="message">{t("رسالة")}</label>
                                <textarea name="message" id="message" placeholder='enter your message' rows="4" required></textarea>
                            </div>
                            <button type="submit">{t("أرسل")}</button>
                        </form>
                        <div className="decoration"></div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact