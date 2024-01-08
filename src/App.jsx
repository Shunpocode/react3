import { lazy, useEffect, useState, memo } from 'react';
import './App.css';
import Header from "./components/header/header";

const Section = lazy(() => import('./components/section/section'));
const Form = lazy(() => import('./components/form/form'));
const Cards = lazy(() => import('./components/section/cards/cards'));

const MemoHeader = memo(Header);
const MemoSection = memo(Section);
const MemoForm = memo(Form);
const MemoCards = memo(Cards);

export default function App() {
  const [isDesktop, setDesktop] = useState(() => window.innerWidth >= 1024);
  const [isLaptop, setLaptop] = useState(() => window.innerWidth <= 1023);
  const [isMobile, setMobile] = useState(() => window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDesktop(width >= 1024);
      setLaptop(width <= 1023);
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
      <MemoHeader type={isDesktop ? 'desktop' : (isLaptop ? 'laptop' : (isMobile ? 'mobile' : ''))} />
      <MemoSection type={isDesktop ? 'desktop' : (isLaptop ? 'laptop' : (isMobile ? 'mobile' : ''))} />
      <MemoCards type={isLaptop ? 'laptop' : (isMobile ? 'mobile' : '')} />
      <MemoForm type={isDesktop ? 'desktop' : (isLaptop ? 'laptop' : (isMobile ? 'mobile' : ''))} />
    </>
  );
}