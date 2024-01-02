import React from 'react';
import "./navbar.css";

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="error">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="errornavbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="error">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="error">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="error">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="error" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="error">Action</a></li>
            <li><a className="dropdown-item" href="error">Another action</a></li>
            <li><a className="dropdown-item" href="error">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
