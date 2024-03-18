import React from 'react'

const DarkModeToggle = () => {
  
    const toggleTheme = (e) => {
        e.target.checked ?  document.querySelector("body").setAttribute('data-bs-theme', 'dark') :
        document.querySelector("body").setAttribute('data-bs-theme', 'light');
    }

  return (
    <>

    <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
  <label htmlFor="checkbox" className="checkbox-label">
    <span className="ball d-flex justify-content-center align-items-center">DM</span>
  </label>
    </>
  )
}

export default DarkModeToggle