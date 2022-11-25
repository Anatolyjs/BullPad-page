import styles from './Tokens.module.scss';
import {useForm} from 'react-hook-form';
import TokensList from './TokensList/TokensList';

const Tokens = () => {
    return (
      <section className={styles.tokens}>
        <FindTokensForm />
        <TokensList />
      </section>
    );
}

const FindTokensForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.tokens__form}>
        <input {...register('token', {required: true})} placeholder="Search for token..." />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
}

export default Tokens;