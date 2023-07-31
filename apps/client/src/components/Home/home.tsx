import { Header } from './components';
import { LandingScreen } from '../landingScreen';
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
