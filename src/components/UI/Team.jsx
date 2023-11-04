import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'
import {useTranslation} from 'react-i18next'

const Team = () => {

    const teamMember =[
        {
            imgUrl: team01,
            name: 'محمود محمد',
            postion: 'إعلانات الفيسبوك'
        },
        {
            imgUrl: team02,
            name: "نادين عمر",
            postion: "اعلانات سناب شات"
        },
        {
            imgUrl: team03,
            name: "امير طارق",
            postion: "إعلانات جوجل"
        },
        {
            imgUrl: team04,
            name: "ويلي تشاد",
            postion: "تصميم ملصق"
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
            <section className='our__team' id="team">
                <div className="container">
                    <div className="team__content">
                        <h6 className="subtitle">{t("فريقنا")}</h6>
                        <h2>{t("مقابله مع")} <span className="highlight">{t("فريقنا")}</span></h2>
                    </div>
                    <div className="team__wrapper">
                        {
                            teamMember.map((item,index)=>(
                                <div className="team__item" key={index}>
                                    <div className="team__img">
                                        <img src={item.imgUrl} alt="team member" />
                                    </div>
                                    <div className="team__details">
                                        <h4>{t(`${item.name}`)}</h4>
                                        <p className="desc">{t(`${item.postion}`)}</p>
                                    
                                    <div className="team__member-social">
                                        <span>
                                            <i class="ri-linkedin-box-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-twitter-fill"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team