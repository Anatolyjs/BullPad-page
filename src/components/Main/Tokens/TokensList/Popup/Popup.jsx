import { useForm } from 'react-hook-form';
import styles from './Popup.module.scss';

const Popup = ({minAllocation, maxAllocation, setModal}) => {
    return (
      <div className={styles.popup}>
        <div className={styles.popup__body}>
          <button onClick={() => {setModal(false)}} className={styles.popup__closeBtn}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className={styles.popup__maxAllocation}>
            Min. allocation: {minAllocation} BUSD
          </div>
          <div className={styles.popup__minAllocation}>
            Max. allocation: {maxAllocation} BUSD
          </div>
          <AllocationForm />
        </div>
      </div>
    );
}

const AllocationForm = () => {
    const {register,handleSubmit, formState: {errors}} = useForm();
    const onSendAllocation = (data) => {
        console.log(data);
    }
    return (
      <form
        onSubmit={handleSubmit(onSendAllocation)}
        className={styles.allocationForm}
      >
        <div className={styles.allocationForm__input}>
          <input
            {...register("allocation", { required: true })}
            placeholder="Enter your allocation..."
          />
        </div>
        <div className={styles.allocationForm__btnSend}>
          <button>Send</button>
        </div>
      </form>
    );
}

export default Popup;