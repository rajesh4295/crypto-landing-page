import type { NextPage } from 'next';
// import styles from '@styles/Home.module.scss'
import { themeMode } from '@models';
import { AppContext } from '@utility';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { Header, Body, Footer } from '@components';

const Home: NextPage = () => {
  const { theme, switchTheme } = useContext(AppContext);
  return (
    <div>
      <Button color="primary" onClick={() => switchTheme(themeMode.LIGHT)}>Light</Button>
      <Button color="inherit" onClick={() => switchTheme(themeMode.DARK)}>Dark</Button>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
