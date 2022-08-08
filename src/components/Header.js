import React from 'react'
import '../App.css'

const Header = () => {
  return (
      <header className='home-heading'>
          {/* <h1>Portfolio</h1>  */}

          <img className='img-edit' src='favicon.ico' height={200} width={200} />
          <br />
          <br />
          <hr />
          <br />
          <p className='para-edit'>Creative <b>PORTFOLIO</b></p>
          <br />
          <h1>JB-React Developer</h1>
          <h1>(UX/UI)</h1>
          <br />
          <p className='para-details'>Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker
              including versions of Lorem
              Ipsum...
              <br />
              <button className='btn-read'>Read More 	&#8594; </button>
          </p>
      </header>

  )
}

export default Header