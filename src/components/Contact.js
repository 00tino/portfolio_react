import React from 'react'

export const Contact = () => {
  return (
    <div className="page">

      <h1 className="heading">Contact</h1>

      <form className="contact" action="fonteviva.valen.tino00@gmail.com">

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <textarea type="text" placeholder="Reason for contact" />
        <input type="submit" value="Send" />

      </form>

    </div>
  )
}
