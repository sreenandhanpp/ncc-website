import React from 'react'

function Header() {
  return (
    <div>
         <nav class="navbar fixed-top navbar-expand-lg navbar-white p-md-3">
      <div class="container">

        <button
          class="navbar-toggler"
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
          <div class="mx-auto "></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-dark" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="/blog">Achievements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="/blog">Activity</a>
            </li><li class="nav-item">
              <a class="nav-link text-dark" href="/blog">Achievements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="/blog">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    </div>
  )
}

export default Header