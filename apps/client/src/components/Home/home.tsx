import { LandingScreen } from '../landingScreen';
import { motion } from 'framer-motion';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import './style.scss';

export const Home = () => {
  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <LandingScreen />
    </motion.div>
  );
};
