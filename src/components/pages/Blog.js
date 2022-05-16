import { useState } from 'react'

import styles from './Blog.module.css'

import { HiArrowNarrowRight, HiChevronRight, HiStar } from 'react-icons/hi'

import people1 from '../../img/testimonials1.jpg'
import people2 from '../../img/testimonials2.jpg'
import people3 from '../../img/testimonials3.jpg'

import Container from '../layout/Container'

const testimonials = [
  {
    name: 'Kyiloria Danu',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: {
      source: people1,
      alt: 'foto de Kyiloria'
    },
    review: '12 reviews'
  },
  {
    name: 'Washigton Rett',
    comment:
      'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    image: {
      source: people2,
      alt: 'foto de Washigton'
    },
    review: '23 reviews'
  },
  {
    name: 'Taiwana Cusst',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: {
      source: people3,
      alt: 'foto de Taiwana'
    },
    review: '18 reviews'
  }
]

function Blog() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonial = testimonials[testimonialIndex]

  function handleNextTestimonials() {
    if (testimonialIndex + 1 === testimonials.length) setTestimonialIndex(0)
    else setTestimonialIndex(testimonialIndex + 1)
  }

  return (
    <Container id="blog">
      <div className={styles.container}>
        <div>
          <div className={styles.row}>
            <div className={styles.barRow} />
            <span>testimonial</span>
          </div>
          <h2>What Customers Say?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </p>
          <p>Lorem Ipsum is simply dummy text of the</p>
          <div className={styles.custom_search}>
            <div className={styles.custom_search_div}>Write your thought</div>
            <a className={styles.custom_search_button} href="#home">
              <HiArrowNarrowRight />
            </a>
          </div>
        </div>
        <div className={styles.custom_testimonials}>
          <img src={testimonial.image.source} alt={testimonial.image.alt} />
          <button onClick={handleNextTestimonials} className={styles.btn}>
            <HiChevronRight />
          </button>
          <div className={styles.card_testimonials}>
            <div className={styles.barColumn} />
            <p>{testimonial.comment}</p>
            <div className={styles.card_testimonials_row}>
              <h3>{testimonial.name}</h3>
              <div className={styles.card_testimonials_column}>
                <div className={styles.card_testimonials_icon}>
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </div>
                <span>{testimonial.review}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Blog
