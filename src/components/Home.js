import React from 'react'
import { Link } from 'react-router-dom'
import { WorkList } from './WorkList'

export const Home = () => {
  return (
    <div className="home">

      <h1>
        Hi everyone, I am <strong>Valentino Fonteviva</strong>. I am a <strong>21</strong> years old <strong>Junior Front-End Developer</strong> from <strong>Buenos Aires</strong>, <strong>Argentina</strong>.
      </h1>

      <h2 className="title">
        I help you to create your modern Web Site. <Link to="/contact" >Contact whit me</Link>
      </h2>

      <section className="lasts-works">
        <h2 className="heading">Some of my projects</h2>
        <p>This is some of my works of web development.</p>

        <WorkList limit="3" />

      </section>

    </div>
  )
}
