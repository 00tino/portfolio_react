import React from 'react'
import { Link } from 'react-router-dom'
import { WorkList } from './WorkList'

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>

      <WorkList />
    </div>
  );
}