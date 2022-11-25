import styles from '../TokensList.module.scss';
import cn from 'classnames';

const Token = ({setModal, ...props}) => {
    const onParticipateClick = () => {
      console.log('you took part');
      setModal(true);
    }
    return (
      <div className={styles.token}>
        <div className={cn(styles.token__data, styles.token__column)}>
          <div className={styles.token__logo}>
            <img src={props.imgUrl} alt="project logo" />
          </div>
          <div className={styles.token__name}>{props.name}</div>
        </div>
        <div className={cn(styles.token__allocation, styles.token__column)}>
          {`${props.completedAllocation} / ${props.fullAllocaton} BUSD`}
        </div>
        <div className={styles.token__column}>
          <button
            className={styles.token__participateBtn}
            onClick={onParticipateClick}
          >
            Participate
          </button>
        </div>
        <div className={styles.token__column}>
          <button className={styles.token__claimBtn}>
            Claim tokens
          </button>
        </div>
      </div>
    );
  }

export default Token;