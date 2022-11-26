import React from 'react'
import { Link } from 'react-router-dom'
import { works } from '../data/works.js'

export const WorkList = ({limit}) => {
  return (

      <section className="works">
        {
          works.slice(0,limit).map(work => (
            <article key={work.id} className="work-item" >
              <div className="mask">
                <img src={"/public/images/" + work.id + ".png"} />
              </div>
              <span>{work.category}</span>
              <h2><Link to={"/project/" + work.id}>{work.name}</Link></h2>
              <h3>{work.technologies}</h3>
            </article>
          ))
        }
      </section>
  );
}