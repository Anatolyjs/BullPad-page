import styles from './TokensList.module.scss';
import cn from 'classnames';
import logo from '../../../../img/bullpadsvg.svg'
import { useState } from 'react';
import Modal from '../../../Common/Modal/Modal';
import Pagination from '../../../Common/Pagination/Pagination';
import Token from './Token/Token';
import Popup from './Popup/Popup';

const tokens = [
  {
    name: 'BTC',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'LTC',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'SOL',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'AVAX',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'MATIC',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'ETH',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'TWT',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'BNB',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'SFP',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  },
  {
    name: 'FTT',
    imgUrl: logo,
    fullAllocaton: 100000,
    completedAllocation: 37000,
  }
]
const minAllocation = 10,
  maxAllocation = 500;

const getActuallTokensElements = (initialArr, pageSize, currentPage) => {
  let elementFrom = (currentPage - 1) * pageSize;
  let elementTo = elementFrom + pageSize;
  return initialArr.slice(elementFrom, elementTo);
}

const TokensList = () => {
  const pageSize = 5;
  let pagesCount = Math.ceil(tokens.length / pageSize);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const tokensElements = tokens.map((el) => <Token setModal={setModal} key={el.name} {...el} />);
  let actuallTokensElement = getActuallTokensElements(tokensElements, pageSize, currentPage);

  return (
    <div className={styles.tokensList}>
      <div className={styles.tokensList__header}>
        <div className={styles.token__column}>Tokens</div>
        <div className={styles.token__column}>Allocation</div>
      </div>
      <div className={styles.tokensList__list}>
        {actuallTokensElement}
      </div>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} setCurrentPage={setCurrentPage} />
      <Modal modal={modal} setModal={setModal}>
        <Popup minAllocation={minAllocation} maxAllocation={maxAllocation} setModal={setModal}/>
      </Modal>
    </div>
  );
}

export default TokensList;