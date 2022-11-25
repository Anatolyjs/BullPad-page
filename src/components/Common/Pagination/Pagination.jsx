import styles from './Pagination.module.scss';
import cn from 'classnames';

const Pagination = ({currentPage = 1, pagesCount, setCurrentPage}) => {
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const pagesElements = pages.map((el, index) => (
      <div key={index} onClick={() => {setCurrentPage(el)}} className={cn(styles.pagination__item, (currentPage === el) && styles.active)}>
        <div>{el}</div>
      </div>
    ));
    
    const prevPage = () => {
        if (currentPage === 1) {
            return
        }
        setCurrentPage(currentPage - 1);
    }
    const nextPage = () => {
        if (currentPage === pagesCount) {
            return
        }
        setCurrentPage(currentPage + 1);
    }
    return (
      <div className={styles.pagination}>
        <button
        className={cn(styles.pagination__prevBtn, styles.pagination__button, styles.pagination__item)}
        onClick={prevPage}
        ></button>
        <div className={styles.pagination__list}>{pagesElements}</div>
        <button
        className={cn(styles.pagination__nextBtn, styles.pagination__button, styles.pagination__item)}
        onClick={nextPage}
        ></button>  
      </div>
    );
}

export default Pagination;