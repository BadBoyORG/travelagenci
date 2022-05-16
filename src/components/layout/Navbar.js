import styles from './Navbar.module.css'

import { MdInvertColors } from 'react-icons/md'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

import Logo from './Logo'

function Navbar() {
  function handleColorRed() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')
    const footer = document.getElementById('footer')

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

    document.querySelectorAll('#logoname')[0].style.color =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon1')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon2')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon3')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon4')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'

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
    footer.style.backgroundColor = 'hsla(350, 53%, 33%, 1)'
    footer.querySelector('h3').style.color = 'hsla(46, 86%, 59%, 1)'
    footer.querySelector('p').style.color = 'hsla(0, 0%, 100%, 1)'
    document.getElementById('span1').style.color = 'hsla(350, 61%, 41%, 1)'
    document.getElementById('span2').style.color = 'hsla(350, 61%, 41%, 1)'
    document.getElementById('span3').style.color = 'hsla(350, 61%, 41%, 1)'
    document.getElementById('span4').style.color = 'hsla(350, 61%, 41%, 1)'
    document.getElementById('span5').style.color = 'hsla(350, 61%, 41%, 1)'
    document.getElementById('span6').style.color = 'hsla(350, 61%, 41%, 1)'
    document.querySelectorAll('#logoname')[1].style.color =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon1')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon2')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon3')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon4')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
  }

  function handleColorYellow() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')
    const footer = document.getElementById('footer')

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

    document.querySelectorAll('#logoname')[0].style.color =
      'hsla(0, 0%, 100%, 1)'
    document.querySelectorAll('#polygon1')[0].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon2')[0].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon3')[0].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon4')[0].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'

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
    footer.style.backgroundColor = 'hsla(46, 79%, 49%, 1)'
    footer.querySelector('h3').style.color = 'hsla(230, 6%, 18%, 1)'
    footer.querySelector('p').style.color = 'hsla(0, 0%, 100%, 1)'
    document.getElementById('span1').style.color = 'hsla(46, 98%, 64%, 1)'
    document.getElementById('span2').style.color = 'hsla(46, 98%, 64%, 1)'
    document.getElementById('span3').style.color = 'hsla(46, 98%, 64%, 1)'
    document.getElementById('span4').style.color = 'hsla(46, 98%, 64%, 1)'
    document.getElementById('span5').style.color = 'hsla(46, 98%, 64%, 1)'
    document.getElementById('span6').style.color = 'hsla(46, 98%, 64%, 1)'
    document.querySelectorAll('#logoname')[1].style.color =
      'hsla(0, 0%, 100%, 1)'
    document.querySelectorAll('#polygon1')[1].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon2')[1].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon3')[1].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon4')[1].style.backgroundColor =
      'hsla(230, 6%, 18%, 1)'
  }

  function handleColorBlack() {
    const navbar = document.getElementById('nav-bar')
    const navbarlinks1 = document.querySelector('#nav-bar-links1')
    const navbarlinks2 = document.querySelector('#nav-bar-links2')
    const navbarlinks3 = document.querySelector('#nav-bar-links3')
    const navbarlinks4 = document.querySelector('#nav-bar-links4')
    const navbarlinks5 = document.querySelector('#nav-bar-links5')
    const home = document.getElementById('home')
    const footer = document.getElementById('footer')

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

    document.querySelectorAll('#logoname')[0].style.color =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon1')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon2')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon3')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon4')[0].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'

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

    footer.style.backgroundColor = 'hsl(220, 6%, 10%)'
    footer.querySelector('h3').style.color = 'hsla(46, 86%, 59%, 1)'
    footer.querySelector('p').style.color = 'hsla(0, 0%, 100%, 1)'
    document.getElementById('span1').style.color = 'hsl(231, 6%, 23%, 1)'
    document.getElementById('span2').style.color = 'hsl(231, 6%, 23%, 1)'
    document.getElementById('span3').style.color = 'hsl(231, 6%, 23%, 1)'
    document.getElementById('span4').style.color = 'hsl(231, 6%, 23%, 1)'
    document.getElementById('span5').style.color = 'hsl(231, 6%, 23%, 1)'
    document.getElementById('span6').style.color = 'hsl(231, 6%, 23%, 1)'
    document.querySelectorAll('#logoname')[1].style.color =
      'hsla(230, 6%, 18%, 1)'
    document.querySelectorAll('#polygon1')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon2')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon3')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
    document.querySelectorAll('#polygon4')[1].style.backgroundColor =
      'hsla(46, 86%, 59%, 1)'
  }

  function handleLightMode() {
    const tour = document.getElementById('tour')
    const watch = document.getElementById('watch')
    const about = document.getElementById('about')
    const blog = document.getElementById('blog')
    const news = document.getElementById('news')

    document.querySelector('body').style.backgroundColor =
      'hsla(0, 0%, 100%, 1)'
    tour.querySelectorAll('h2')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    tour.querySelectorAll('h2')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    tour.querySelectorAll('p')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    tour.querySelectorAll('p')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    watch.querySelectorAll('h2')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    watch.querySelectorAll('p')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('h2')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('h2')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('h2')[2].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('p')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('p')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('p')[2].style.color = 'hsla(238, 27%, 20%, 1)'
    about.querySelectorAll('p')[3].style.color = 'hsla(238, 27%, 20%, 1)'
    blog.querySelectorAll('span')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    blog.querySelectorAll('p')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    blog.querySelectorAll('p')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    blog.querySelectorAll('p')[2].style.color = 'hsla(238, 27%, 20%, 1)'
    news.querySelectorAll('p')[0].style.color = 'hsla(238, 27%, 20%, 1)'
    news.querySelectorAll('p')[1].style.color = 'hsla(238, 27%, 20%, 1)'
    news.querySelectorAll('p')[2].style.color = 'hsla(238, 27%, 20%, 1)'
    news.querySelectorAll('p')[3].style.color = 'hsla(238, 27%, 20%, 1)'
    news.querySelectorAll('p')[4].style.color = 'hsla(238, 27%, 20%, 1)'
  }

  function handleDarkMode() {
    const tour = document.getElementById('tour')
    const watch = document.getElementById('watch')
    const about = document.getElementById('about')
    const blog = document.getElementById('blog')
    const news = document.getElementById('news')

    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 10%)'
    tour.querySelectorAll('h2')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    tour.querySelectorAll('h2')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    tour.querySelectorAll('p')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    tour.querySelectorAll('p')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    watch.querySelectorAll('h2')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    watch.querySelectorAll('p')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('h2')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('h2')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('h2')[2].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('p')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('p')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('p')[2].style.color = 'hsla(0, 0%, 100%, 1)'
    about.querySelectorAll('p')[3].style.color = 'hsla(0, 0%, 100%, 1)'
    blog.querySelectorAll('span')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    blog.querySelectorAll('p')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    blog.querySelectorAll('p')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    blog.querySelectorAll('p')[2].style.color = 'hsla(0, 0%, 100%, 1)'
    news.querySelectorAll('p')[0].style.color = 'hsla(0, 0%, 100%, 1)'
    news.querySelectorAll('p')[1].style.color = 'hsla(0, 0%, 100%, 1)'
    news.querySelectorAll('p')[2].style.color = 'hsla(0, 0%, 100%, 1)'
    news.querySelectorAll('p')[3].style.color = 'hsla(0, 0%, 100%, 1)'
    news.querySelectorAll('p')[4].style.color = 'hsla(0, 0%, 100%, 1)'
  }

  return (
    <nav id="nav-bar" className={styles.container}>
      <Logo />
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
          <a id="nav-bar-links5" href="#news">
            News
          </a>
        </li>
      </ul>
      <div className={styles.startRow}>
        <button
          onClick={handleLightMode}
          className={styles.btn_sun}
          id="btn-sun"
        >
          <BsSunFill />
        </button>
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
        <button
          onClick={handleDarkMode}
          className={styles.btn_moon}
          id="btn-moon"
        >
          <BsMoonFill />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
