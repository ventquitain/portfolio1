import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <p className="footertext">
          © {new Date().getFullYear()} Thank You for Being Here!!
        </p>

        <p className="footersubtext">
          Built by Rhay Vent Quitain
        </p>
      </div>
    </footer>
  )
}

export default Footer