import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {Section, Cards} from "./components/section/section";
import Form from "./components/form/form";

export default function App() {

  let [device, deviceSize] = React.useState('');
  let [deviceCard, deviceCardFunc] = React.useState('');
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
