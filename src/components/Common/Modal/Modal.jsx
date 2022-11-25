import styles from './Modal.module.scss';
import cn from 'classnames';

const Modal = ({modal, setModal, children}) => {
  let isActive = modal && styles.active;
  return (
    <div onClick={() => {setModal(false)}} className={cn(styles.modal, isActive)}>
      <div onClick={(e) => {e.stopPropagation()}} className={cn(styles.modal__body, isActive)}>
        {children}
      </div>
    </div>
  );
}

export default Modal;