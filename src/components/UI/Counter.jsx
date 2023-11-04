import React from 'react'
import "../../styles/counter.css"
import {useTranslation} from 'react-i18next'

const Counter = () => {

    const counterData = [
        {
            number: '8 ألاف',
            text: 'عميل'
        },
        {
            number: 634,
            text: 'مشاريع قيد التنفيذ'
        },
        {
            number: '2.4 ألف',
            text: 'مشاريع مكتملة'
        },
    ]

    const {t, i18n} = useTranslation();
    const changeEN = () =>{
        i18n.changeLanguage('en');
    }
    const changeAR = () =>{
        i18n.changeLanguage('ar');
    }

    return (
        <>
            <section className="counter">
                <div className="container">
                    <div className="counter__wrapper">
                        {
                            counterData.map((item, index) => (
                                <div className="counter__item" key={index}>
                                    <h3 className="counter__number">
                                        {t(`${item.number}`)}+
                                    </h3>
                                    <h4 className="counter__title">
                                        {t(`${item.text}`)}
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter