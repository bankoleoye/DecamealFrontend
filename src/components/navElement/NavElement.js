import React from 'react';

const NavElement = ({text, listStyleType, color }) => {
  const style = {
    listStyleType: listStyleType ? listStyleType : "none",
    color: color ? color : "white",
  }
  return (
    <div className="nav-element">
        <ul style={style}>
            <li style={style}>{text}</li>
        </ul>
    </div>
  )
}

export default NavElement