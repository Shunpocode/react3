import { useEffect, useState, lazy } from 'react';
import './form.css';
import ImageUploader from './imgUploader/imgUploader';
// import Fieldset from './fieldset/fieldset';
import Position from './position/position';
import { API_TOKEN } from './api/api';
import Button from '../button/button';
import RegistredSvg from "./registred.svg";
const Fieldset = lazy(() => import('./fieldset/fieldset'));

export default function Form({ type }) {
  const [sentForm, setSentForm] = useState(false);
  const [formOK, setFormOK] = useState('disabled');
  const [position_id, currentPos] = useState();
  const [intervalId, setIntervalId] = useState(null);

  function FormSent() {
    var fileField = document.querySelector('input[type="file"]').files[0];
    var formData = new FormData();
    formData.append('position_id', position_id);
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('photo', fileField);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': API_TOKEN, }, })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        if(data.success) {
          setSentForm(true);
          clearInterval(intervalId)
        } else { console.log(data); } })
      .catch(function(error) { console.log(error); });

  }

  function Radio(event) {
    currentPos(event.target.id);
  }

  function currentForm() {
    if (sentForm === false) {
      const form = document.querySelector('form');
      const error = [window.getComputedStyle(document.getElementsByTagName('fieldset')[0].getElementsByTagName('legend')[0]).color, window.getComputedStyle(document.getElementsByTagName('fieldset')[1].getElementsByTagName('legend')[0]).color, window.getComputedStyle(document.getElementsByTagName('fieldset')[2].getElementsByTagName('legend')[0]).color]
      const requiredInputs = form.querySelectorAll('input[required]');
      let isFormValid = false;

      requiredInputs.forEach((input) => {
        if (error[0] !== 'rgb(203, 61, 64)' ) {
          if(error[1] !== 'rgb(203, 61, 64)'){
            if (error[2] !== 'rgb(203, 61, 64)') {
              if (input.type === 'file') {
                if (!input.files || input.files.length !== 0) {
                  isFormValid = true;
                }
              }
            }
          }
        }else{
          isFormValid = false
        }
      }); 
      setFormOK(isFormValid);
    }
  }

  useEffect(() => {
    const newIntervalId = setInterval(currentForm, 1000);
    setIntervalId(newIntervalId);

    return () => {
      clearInterval(newIntervalId);
    };
  }, [position_id, sentForm]);

  return (
    <section id="form" className={type}>
      {sentForm ?
        (
         <>
           <h1>User successfully registered</h1>
           <span>
             <img src={RegistredSvg} alt="" />
           </span>
         </>
        ):
        (
        <>
            <h1>Working with POST request</h1>
            <form action="">
              <Fieldset />
              <Position testRadio={Radio} />
              <ImageUploader />
            </form>
            <Button text="Sign up" type={formOK ? 'yellow' : 'disabled'} func={() => FormSent()} />
          </>
        )
      }
    </section>
  );
}