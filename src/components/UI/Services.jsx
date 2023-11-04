import React from 'react'
import "../../styles/services.css"
import {useTranslation} from 'react-i18next'

const Services = () => {
    
    const serviceData = [
        {
            icon: 'ri-user-line',
            title: 'الجمهور المستهدف',
            desc: 'من خلال تحديد الجمهور المستهدف، يمكن للشركات تخصيص مواردها بشكل أفضل، وتطوير المحتوى ذي الصلة، وتقديم حملات إعلانية مستهدفة.'
        },
        {
            icon: 'ri-advertisement-line',
            title: 'الإعلانات المهنية',
            desc: 'في الإعلانات الاحترافية، يتم إيلاء اهتمام دقيق للعناصر المرئية واللفظية لإنشاء اتصال متماسك وجذاب بصريًا.'
        },
        {
            icon: 'ri-money-dollar-circle-fill',
            title: 'أفضل قيمة مقابل السعر',
            desc: 'بالإضافة إلى ذلك، يمكن أن تختلف أيضًا القيمة الأفضل مقابل السعر عبر فئات المنتجات والصناعات المختلفة.'
        }
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
            <section id="service">
                <div className="container">
                    <div className="services__top-content">
                        <h6 className="subtitle">{t("خدماتنا")}</h6>
                        <h2>{t("تحقيق ربح مذهل")}</h2>
                        <h2 className='highlight'>{t("أفضل الخدمات لدينا")}</h2>
                    </div>
                    <div className="service__item-wrapper">
                            {
                                serviceData.map((item, index) => {
                                    return (
                                        <div className="services__item" key={index}>
                                            <div className="service__icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="service__title">
                                                <h6>{t(`${item.title}`)}</h6>
                                            </div>
                                            <div className="desc">
                                                <p>{t(`${item.desc}`)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services