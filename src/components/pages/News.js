import styles from './News.module.css'

import ilustration1 from '../../img/ilustration1.png'
import ilustration2 from '../../img/ilustration2.png'
import ilustration3 from '../../img/ilustration3.png'
import ilustration4 from '../../img/ilustration4.png'

import Container from '../layout/Container'

function News() {
  return (
    <Container>
      <div className={styles.container}>
        <h2>Lastest News and Resources</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={styles.news}>
          <div className={styles.news_column}>
            <img
              className={styles.news_column_image}
              src={ilustration1}
              alt="ilustration"
            />
            <span className={styles.ballon}>news</span>
            <h3>Where does it come from?</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply <br />
              random text. It has roots in a piece of classical Latin <br />
              literature from 45 BC, making it over 2000 years old.
            </p>
            <a href="#tour">Read more</a>
          </div>
          <div className={styles.news_column_gap}>
            <div className={styles.news_row}>
              <img
                className={styles.new_row_image}
                src={ilustration2}
                alt="ilustration"
              />
              <div className={styles.ballon_press_release}>press release</div>
              <div className={styles.news_alternative}>
                <h3>Where does it come from?</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
            <div className={styles.news_row}>
              <img
                className={styles.new_row_image}
                src={ilustration3}
                alt="ilustration"
              />
              <div className={styles.ballon_news}>news</div>
              <div className={styles.news_alternative}>
                <h3>Where does it come from?</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
            <div className={styles.news_row}>
              <img
                className={styles.new_row_image}
                src={ilustration4}
                alt="ilustration"
              />
              <div className={styles.ballon_news}>news</div>
              <div className={styles.news_alternative}>
                <h3>Where does it come from?</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default News
