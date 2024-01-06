import { useState } from "react";
import "./fieldset.css";

export default function Fieldset(params) {

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phone: '',
      });

    const [isInvalid, setIsInvalid] = useState({
      name: false,
      email: false,
      phone: false,
    });

    function noTel({func}){
      let value = document.getElementById('phone').value.trim();
      if (value.length === 6) {
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          ['phone']: '',
        }));
        setIsInvalid((prevIsInvalid) => ({
          ...prevIsInvalid,
          ['phone']: false,
        }));
      }
      if (value.length < 6) {
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          ['phone']: '+38 (0',
        }));
        setIsInvalid((prevIsInvalid) => ({
          ...prevIsInvalid,
          ['phone']: true,
        }));
      }
      if (value.length > 6 && value.length < 23) {
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          ['phone']: value,
        }));
        setIsInvalid((prevIsInvalid) => ({
          ...prevIsInvalid,
          ['phone']: true,
        }));
      }
      else if(value.length === 23){
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          ['phone']: value,
        }));
        setIsInvalid((prevIsInvalid) => ({
          ...prevIsInvalid,
          ['phone']: false,
        }));
      }
    }

    const handleInputChange = (event, fieldName) => {
        let value = event.target.value;
        if (fieldName === 'phone') {
          let error = window.getComputedStyle(document.getElementsByTagName('fieldset')[2].getElementsByTagName('legend')[0]).color;
          let errorColor = 'rgb(203, 61, 64)';
          if (value.length === 0 || value.length < 6) {
            setInputValues((prevInputValues) => ({
              ...prevInputValues,
              [fieldName]: '+38 (0',
            }));
          }
          else if(value.length < 24){
            if(error === errorColor){
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: true,
              }));
            }
            else{
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: false,
              }));
            }
            if (/\d+$/.test(value)) {
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value,
              }));
            }
            if(value.length === 8){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value + ") ",
              }));
            }
            if(value.length === 9){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -2),
              }));
            }
            if(value.length === 10){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -1) + ' ',
              }));
            }
            if(value.length === 13){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value + " - ",
              }));
            }
            if(value.length === 15){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -3),
              }));
            }
            if(value.length === 16){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -3) + ' - ',
              }));
            }
            if(value.length === 18 ){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value + " - ",
              }));
            }
            if(value.length === 21){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -3) + ' - ',
              }));
            }
            if(value.length === 20){
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [fieldName]: value.slice(0, -3),
              }));
            }
          }
        }
        if(fieldName === 'email'){
          let error = window.getComputedStyle(document.getElementsByTagName('fieldset')[1].getElementsByTagName('legend')[0]).color;
          let errorColor = 'rgb(203, 61, 64)';
          if(value.length > 0){
            if(error === errorColor){
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: true,
              }));
            }else{
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: false,
              }));
            }
          }else{
            setIsInvalid((prevIsInvalid) => ({
              ...prevIsInvalid,
              [fieldName]: false,
            }));
          }
          setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [fieldName]: value,
          }));
        }
        if(fieldName === 'name'){
          setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [fieldName]: value,
          }));
          let error = window.getComputedStyle(document.getElementsByTagName('fieldset')[0].getElementsByTagName('legend')[0]).color;
          let errorColor = 'rgb(203, 61, 64)';
          if(value.length > 0){
            if(error === errorColor){
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: true,
              }));
            }else{
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: false,
              }));
            }
          }else{
              setIsInvalid((prevIsInvalid) => ({
                ...prevIsInvalid,
                [fieldName]: false,
              }));
            }
        }
    };

    return(
        <>
            <fieldset className={isInvalid.name ? 'error' : '' }>
              <input
              minLength={2}
              maxLength={60}
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              required
              value={inputValues.name}
              onChange={(e) => handleInputChange(e, 'name')}
              />
              <legend>Name</legend>
           </fieldset>
           <fieldset className={isInvalid.email ? 'error' : '' }>
              <input
              minLength= {2}
              maxLength= {100}
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              required
              value={inputValues.email}
              onChange={(e) => handleInputChange(e, 'email')}
              />
              <legend>Email</legend>
              <span>test@test.com</span>
           </fieldset>
           <fieldset className={isInvalid.phone ? 'error' : '' }>
              <input
              onBlur={() => noTel('-')}
              onFocus={() => noTel('+')}
              pattern="\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}"
              type="tel"
              name="phone"
              id="phone"
              placeholder='Phone'
              required
              value={inputValues.phone}
              onChange={(e) => handleInputChange(e, 'phone')}
              />
              <legend>Phone</legend>
              <span>+38 (XXX) XXX - XX - XX</span>
           </fieldset>
        </>
    )
}