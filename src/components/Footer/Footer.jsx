import styles from './Footer.module.scss';
import telegram from '../../img/tg.svg';

const Footer = () => {
    return (
      <footer className="Footer">
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.footer__title}>Find us on social</div>
            <div className={styles.footer__contacts}>
              <div className={styles.contacts__item}>
                <a href="https://twitter.com/LCH_Bullpad" target={'_blank'}>
                  <i class="fa fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className={styles.contacts__item}>
                <a href="https://t.me/BullPadChat" target={'_blank'}>
                  <i class="fa fa-paper-plane fa-2x"></i>
                </a>
              </div>
              <div className={styles.contacts__item}>
                <a href="https://t.me/Bull_Pad" target={'_blank'}>
                  <i class="fa fa-paper-plane fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;