import React, { useState } from "react"
import "./details.css"
import "../components/Header/header.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../assets/Data/data"
import {useTranslation} from 'react-i18next'

export const Details = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  })

  const {t, i18n} = useTranslation();

    const changeEN = () =>{
        i18n.changeLanguage('en');
    }

    const changeAR = () =>{
        i18n.changeLanguage('ar');
    }

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.images} alt=" " />
            </div>
            <div className='right'>
              <h1>{t(`${blogs.title}`)}</h1>
              <p>{t(`${blogs.desc}`)}</p>
              <p>{t(`${blogs.p1}`)}</p>
              <br/>
              <p>{t(`${blogs.p2}`)}</p>
              <br/>
              <p>{t(`${blogs.p3}`)}</p>
              <br/>
              <p>{t(`${blogs.p4}`)}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
