import { Header, LandingScreen } from './components';
import './style.scss';

export const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <LandingScreen />
      </section>
      {/* <Footer/> */}
    </div>
  );
};
