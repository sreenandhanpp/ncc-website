import React from "react";


function Header() {
  return (
    <div>
      <div className="container-sm">
      <div class='row'>
        <div className='col-md-2 col-2 p-1'>
          <img src="/flag.png"  class="flag" alt="FLAG" />
        </div>
        <div className="col-md-8 col-8 text-center my-auto heading">
          <h3>NATIONAL CADET CORPS</h3>
          <h3>IPT AND GPT COLLEGE SHORANUR</h3>
          <h3>N0(5) COY NCC SENIOR DEVISION ARMY WING</h3>
        </div>
        <div className='col-md-2 col-2 p-1'>
          <img src="/flag.png"  class="flag float-end" alt="FLAG" />
        </div>
      </div>
      </div>
      <nav class='navbar fixed navbar-expand-lg navbar-custom  '>
        <div class='container'>
          <button
            class='navbar-toggler custom-toggler bg-white'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navbarNav'>
            <div class=''></div>
            <ul class='navbar-nav mx-auto'>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/home'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/blog'>
                  Achievements
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/blog'>
                  Activity
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/blog'>
                  Achievements
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='/blog'>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
