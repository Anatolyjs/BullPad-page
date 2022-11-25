import styles from './Main.module.scss';
import Tokens from './Tokens/Tokens';

const Main = () => {
    return (
      <main className="Main">
        <div className="container">
          <Tokens />
        </div>
      </main>
    );
}

export default Main;

