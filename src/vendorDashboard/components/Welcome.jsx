import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")

  return (
    <div className='welcomeSection'>
        <h2>Welcome {firmName}</h2>
        <div className="landingImage">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5sw9FI-XY5zWLrAus2KcDxbTjeOg_OfFnyQQJSqkgbBxUQOAdc-vdBh5cg&s' alt='welcome' />
        </div>
    </div>
  )
}

export default Welcome