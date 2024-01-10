import {lazy, useEffect, useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import Section from './components/section/section';
const Cards = lazy(() => import('./components/section/cards/cards'));
const Form = lazy(() => import('./components/form/form'));

export default function App() {
  const [isDesktop, setDesktop] = useState(false);
  const [isLaptop, setLaptop] = useState(false);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setDesktop(width >= 1024);
      setLaptop(width <= 1023 && width >425);
      setMobile(width <= 425);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header type={isDesktop ? 'desktop' : '' || isLaptop ? 'laptop':'' || isMobile ? 'mobile':''} />
      <Section type={isDesktop ? 'desktop' : '' || isLaptop ? 'laptop':'' || isMobile ? 'mobile':''} />
      <Cards type={ isLaptop ? 'laptop':'' || isMobile ? 'mobile':''} />
      <Form type={isDesktop ? 'desktop' : '' || isLaptop ? 'laptop':'' || isMobile ? 'mobile':''} />
    </>
  );
}
