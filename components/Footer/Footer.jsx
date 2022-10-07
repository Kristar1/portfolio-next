import Link from 'next/link'
import React from 'react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub,BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";


export default function Footer() {
  return (
    <>
    <div className="footer__container">
    <div className="footer__links">
        <div className="footer__link--items">
          <h2>I'm always happy to chat about:</h2>
          <a href='/'>UX/UI</a> <a href="/">MERN Stack </a>
          <a href="https://webflow.com">Webflow</a> <a href="/">Finance</a>
        </div>
        <div className="footer__link--items">
          <h2>Know More:</h2>
          <Link href="/#projects">My Works</Link> <Link href="/#process">My Process</Link>
          <Link href="/about">About Me</Link>
        </div>
        
    </div>
    <section className="social__media">
      <div className="social__media--wrap">
        <div className="footer__logo">
          <a href="/" id="footer__logo">Designed and developed by Krish Kedia</a>
        </div>
        <p className="website__rights">© Copyright 2022. All rights reserved</p>
        <div className="social__icons">
          <a href="https://github.com//Kristar1" className="social__icon--link" target="_blank">
            <BsGithub/>
          </a>

          
          <a href="https://www.linkedin.com/in/krish-kedia-b0270a22b" className="social__icon--link"
            target='_blank'><BsLinkedin/>
          </a>
          <a href="https://twitter.com/the_Krish_Kedia/media"  target='_blank'  className="social__icon--link"
            ><BsTwitter/>
          </a>
        </div>
      </div>
    </section>
  </div>
  </>
  )
}
