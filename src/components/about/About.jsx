import React from 'react'
import './about.css'
import ME from '../../assets/renato2.png'
import { FaGlobeAmericas } from "react-icons/fa";
import { LuPalmtree } from 'react-icons/lu'
import { TbSchool } from 'react-icons/tb'

const About = () =>
{
  return (
    <section id='about'>
      <h5>Get To Know A Little More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Headshot of Renato" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            {/* here lies each individual card, you can add more by copying each article tag */}
            <article className='about__card'>
            <FaGlobeAmericas className='about__icon'/>
              <h5>Citizenship</h5>
              <small>US Citizen</small>
            </article>

            <article className='about__card'>
              <LuPalmtree className='about__icon' />
              <h5>Based In</h5>
              <small>Orlando, Florida</small>
            </article>

            <article className='about__card'>
              <TbSchool className='about__icon' />
              <h5>Graduation</h5>
              <small>UCF | Fall 2024</small>
            </article>

          </div>

          {/* this is where your biography paragraph goes, DO NOT GO OVER 60 WORDS! */}
          <p>
          I am currently a senior pursuing a <i>Bachelor's Degree in Computer Science</i> at the <strong>University of Central Florida</strong>. 
          My interests lie in Big Data, Machine Learning, Artificial Intelligence, & Game Development. Additionally,
          I am an undergraduate researcher and work as a Peer Mentor for students interested in pursuing
          internship or research opportunities as well. <br /> <br /> I'm a firm believer that you miss every single opportunity that you don't take.
          After all, success starts with hard work and determination. I love to talk about all things tech, so why don't we have a conversation? Feel free to reach out!
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
          <a href="https://github.com/NrgNinja" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AETOMgEdzcW9UbzUVRLRKDZhZE3AdR2l7OF4yP3HvxBK5zzN4CDEYPHL5xendVwRZ5VGJaMIgPDlaPpFpdJ_Pmw30iFn&user=cgbwfMUAAAAJ" className='btn btn-primary' target="_blank" rel="noreferrer">Google Scholar</a>
          <a href="https://leetcode.com/u/NrgNinja/" className='btn' target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
    </section>
  )
}

export default About