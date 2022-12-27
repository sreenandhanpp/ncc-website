import React from 'react'

function Header() {
  return (
    <div >
         <nav class="navbar fixed-top navbar-expand-lg navbar-custom  ">
      <div class="container">

        <button
          class="navbar-toggler custom-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class=""></div>
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link text-white" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/blog">Achievements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/blog">Activity</a>
            </li><li class="nav-item">
              <a class="nav-link text-white" href="/blog">Achievements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/blog">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    </div>
  )
}

export default Header