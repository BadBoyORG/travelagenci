import styles from './Navbar.module.css'

import { MdInvertColors } from 'react-icons/md'
import { hover } from '@testing-library/user-event/dist/hover'

function Navbar() {
  function handleColorRed() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')

    navbar.style.backgroundColor = 'hsla(1, 37%, 52%, 1)'
    navbar.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks1.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks1.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks1.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks2.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks2.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks2.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks3.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks3.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks3.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks4.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks4.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks4.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks5.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks5.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks5.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })

    home.style.backgroundColor = 'hsla(1, 37%, 52%, 1)'
    home.querySelector('h1').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('h3').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('p').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('span').style.color = 'hsla(46, 86%, 59%, 1)'
    document.getElementById('btn-home').style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document
      .getElementById('btn-home')
      .addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'hsla(354, 82%, 62%, 1)'
      })
    document
      .getElementById('btn-home')
      .addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = 'hsla(230, 6%, 18%, 1)'
      })
  }

  function handleColorYellow() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')

    navbar.style.backgroundColor = 'hsla(46, 86%, 59%, 1)'
    navbar.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks1.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks1.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks1.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks2.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks2.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks2.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks3.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks3.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks3.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks4.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks4.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks4.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })
    navbarlinks5.style.color = 'hsla(238, 27%, 20%, 1)'
    navbarlinks5.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks5.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(238, 27%, 20%, 1)'
    })

    home.style.backgroundColor = 'hsla(46, 86%, 59%, 1)'
    home.querySelector('h1').style.color = 'hsla(238, 27%, 20%, 1)'
    home.querySelector('h3').style.color = 'hsla(238, 27%, 20%, 1)'
    home.querySelector('p').style.color = 'hsla(238, 27%, 20%, 1)'
    home.querySelector('span').style.color = 'hsla(1, 37%, 52%, 1)'
    document.getElementById('btn-home').style.backgroundColor =
      'hsla(1, 37%, 52%, 1)'
    document
      .getElementById('btn-home')
      .addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'hsla(354, 82%, 62%, 1)'
      })
    document
      .getElementById('btn-home')
      .addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = 'hsla(1, 37%, 52%, 1)'
      })
  }

  function handleColorBlack() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')

    navbar.style.backgroundColor = 'hsla(230, 6%, 18%, 1)'
    navbar.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks1.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks1.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(46, 86%, 59%, 1)'
    })
    navbarlinks1.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks2.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks2.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(46, 86%, 59%, 1)'
    })
    navbarlinks2.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks3.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks3.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(46, 86%, 59%, 1)'
    })
    navbarlinks3.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks4.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks4.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(46, 86%, 59%, 1)'
    })
    navbarlinks4.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })
    navbarlinks5.style.color = 'hsla(0, 0%, 100%, 1)'
    navbarlinks5.addEventListener('mouseover', function (event) {
      event.target.style.color = 'hsla(46, 86%, 59%, 1)'
    })
    navbarlinks5.addEventListener('mouseout', function (event) {
      event.target.style.color = 'hsla(0, 0%, 100%, 1)'
    })

    home.style.backgroundColor = 'hsla(230, 6%, 18%, 1)'
    home.querySelector('h1').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('h3').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('p').style.color = 'hsla(0, 0%, 100%, 1)'
    home.querySelector('span').style.color = 'hsla(46, 86%, 59%, 1)'
    document.getElementById('btn-home').style.backgroundColor =
      'hsla(1, 37%, 52%, 1)'
    document
      .getElementById('btn-home')
      .addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'hsla(354, 82%, 62%, 1)'
      })
    document
      .getElementById('btn-home')
      .addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = 'hsla(1, 37%, 52%, 1)'
      })
  }

  return (
    <nav id="nav-bar" className={styles.container}>
      <div>logo</div>
      <ul className={styles.nav_list}>
        <li>
          <a id="nav-bar-links1" href="#home">
            Home
          </a>
        </li>
        <li>
          <a id="nav-bar-links2" href="#tour">
            Events
          </a>
        </li>
        <li>
          <a id="nav-bar-links3" href="#about">
            About
          </a>
        </li>
        <li>
          <a id="nav-bar-links4" href="#blog">
            Blog
          </a>
        </li>
        <li>
          <a id="nav-bar-links5" href="#home">
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.startRow}>
        <button
          onClick={handleColorYellow}
          className={styles.btn_yellow}
          id="btn-yellow"
        >
          <MdInvertColors />
        </button>
        <button
          onClick={handleColorRed}
          className={styles.btn_red}
          id="btn-red"
        >
          <MdInvertColors />
        </button>
        <button
          onClick={handleColorBlack}
          className={styles.btn_black}
          id="btn-black"
        >
          <MdInvertColors />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
