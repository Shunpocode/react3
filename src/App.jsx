import {useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import Section from "./components/section/section";
import Cards from "./components/section/cards/cards";
import Form from "./components/form/form";

export default function App() {

  let [device, deviceSize] = useState('');
  let [deviceCard, deviceCardFunc] = useState('');
  setInterval(() => {
    if (window.innerWidth >= 1024) {
      deviceSize(device = 'desktop');
      deviceCardFunc(deviceCard = '');
    }
    if (window.innerWidth <= 1023) {
      deviceSize(device = 'laptop');
      deviceCardFunc(deviceCard = 'laptop');
    }
    if (window.innerWidth <= 425) {
      deviceSize(device = 'mobile');
      deviceCardFunc(deviceCard = 'mobile');
    }
  }, 200);

  return (
    <>
      <Header type={device}/>
      <Section type={device} bg={'bg'}/>
      <Cards type={deviceCard}/>
      <Form type={device}/>
    </>
  );
}
