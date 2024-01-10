import { useState } from "react";
import "./fieldset.css";

const errorColor = 'rgb(203, 61, 64)';

export default function Fieldset() {
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

  const handleInputChange = (event, fieldName, id) => {
    const error = window.getComputedStyle(document.getElementsByTagName('fieldset')[id].getElementsByTagName('legend')[0]).color;
    const value = event.target.value;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [fieldName]: value,
    }));

    setIsInvalid((prevIsInvalid) => ({
      ...prevIsInvalid,
      [fieldName]: value.length > 0 && error === errorColor,
    }));

  };

  return (
    <>
      <fieldset className={isInvalid.name ? 'error' : ''}>
        <input
          minLength={2}
          maxLength={60}
          type="text"
          name="name"
          id="name"
          placeholder='Name'
          required
          value={inputValues.name}
          onChange={(e) => handleInputChange(e, 'name', 0)}
        />
        <legend>Name</legend>
      </fieldset>
      <fieldset className={isInvalid.email ? 'error' : ''}>
        <input
          minLength={2}
          maxLength={100}
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          required
          value={inputValues.email}
          onChange={(e) => handleInputChange(e, 'email', 1)}
        />
        <legend>Email</legend>
        <span>test@test.com</span>
      </fieldset>
      <fieldset className={isInvalid.phone ? 'error' : ''}>
        <input
          minLength={0}
          maxLength={23}
          pattern="\+380[0-9]{9}"
          type="tel"
          name="phone"
          id="phone"
          placeholder='Phone'
          required
          value={inputValues.phone}
          onChange={(e) => handleInputChange(e, 'phone', 2)}
        />
        <legend>Phone</legend>
        <span>+38 (XXX) XXX - XX - XX</span>
      </fieldset>
    </>
  );
}
