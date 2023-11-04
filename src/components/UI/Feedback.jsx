import React from 'react'
import '../../styles/feedback.css'
import Slider from 'react-slick'
import ava01 from '../../images/top-g.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'
import {useTranslation} from 'react-i18next'

const Feedback = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const {t, i18n} = useTranslation();

    const changeEN = () =>{
        i18n.changeLanguage('en');
    }

    const changeAR = () =>{
        i18n.changeLanguage('ar');
    }

    return (
        <>
            <section id="feedback">
                <div className="container">
                    <div className="slider__top-content">
                        <h6 className="subtitle">{t("التقيمات")}</h6>
                        <h2>{t("احصل على")} <span className="highlight">{t("تعليقات")}</span></h2>
                    </div>

                    <div className="slider__wrapper">
                    <Slider {...settings}>
                    <div className='slider__item'>
                        <p className='desc'>{t("اغلق عينيك. ركز على جعل نفسك تشعر بالإثارة والقوة. تخيل نفسك تدمر الأهداف بكل سهولة.")}</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt=''/>
                            </div>
                            <div>
                                <h5 className='customer__name'>{t("أندرو تيت")}</h5>
                                <p className='desc'>{t("ما هو لون بوجاتي الخاص بك؟")}</p>
                            </div>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <p className='desc'>{t("أنصحك بالتعامل معه لأنه يؤدي إلى إتقان واحترافية.")}</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt=''/>
                            </div>
                            <div>
                                <h5 className='customer__name'>{t("المستخدم رقم 05660")}</h5>
                                <p className='desc'>{t("هذا الرجل هو المطور المحترف.")}</p>
                            </div>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <p className='desc'>{t("خدمة رائعة، أنصحكم بالتعامل معها.")}</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt=''/>
                            </div>
                            <div>
                                <h5 className='customer__name'>{t("جوني ديب")}</h5>
                                <p className='desc'>{t("الممثل")}</p>
                            </div>
                        </div>
                    </div>
                </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback