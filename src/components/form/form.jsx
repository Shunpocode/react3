import React, { useEffect, useState } from 'react';
import './form.css';
import ImageUploader from './imgUploader/imgUploader';
import Fieldset from './fieldset/fieldset';
import Position from './position';
import { API_TOKEN } from './api/api';
import Button from '../button/button';

export default function Form({ type }) {
  const [sentForm, setSentForm] = useState(false);
  const [formOK, setFormOK] = useState('disabled');
  const [position_id, currentPos] = useState();
  const [intervalId, setIntervalId] = useState(null);

  function FormSent() {
    var fileField = document.querySelector('input[type="file"]').files[0];
    var formData = new FormData();
    var cleanedPhoneValue = document.getElementById('phone').value.replace(/[\s\(\)\-]/g, '');
    formData.append('position_id', position_id);
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', cleanedPhoneValue);
    formData.append('photo', fileField);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': API_TOKEN, }, })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        if(data.success) {
          setSentForm(true);
          clearInterval(intervalId)
        } else { console.log('proccess server errors'); } })
      .catch(function(error) { console.log('proccess network errors'); });

  }

  function Radio(event) {
    currentPos(event.target.id);
  }

  function currentForm() {
    if (sentForm === false) {
      const form = document.querySelector('form');
      const requiredInputs = form.querySelectorAll('input[required]');
      let isFormValid = true;

      requiredInputs.forEach((input) => {
        if (input.type === 'file') {
          if (!input.files || input.files.length === 0) {
            isFormValid = false;
          }
        } else {
          if (input.value.trim() === '') {
            isFormValid = false;
          }
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
      {sentForm ? (
        <>
          <h1>User successfully registered</h1>
          <span>
          <svg width="327" height="290" viewBox="0 0 327 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M155.106 25.2336C143.761 37.7827 138.143 54.8775 139.103 71.7391C140.062 88.6008 146.305 104.748 153.904 119.845C160.56 133.07 168.511 148.067 163.065 161.828C160.022 169.521 153.085 175.217 145.415 178.387C137.745 181.557 129.334 182.474 121.039 182.886C106.901 183.593 92.5513 182.948 78.795 186.251C65.0387 189.553 51.4931 197.712 46.1716 210.774C39.906 226.167 47.0221 244.583 59.569 255.515C72.1237 266.448 88.962 271.142 105.48 273.465C128.624 276.713 152.336 275.897 175.198 271.072C193.558 267.194 211.622 260.597 226.603 249.338C241.576 238.079 253.265 221.792 256.472 203.376C259.671 184.961 253.46 164.595 238.806 152.924C232.712 148.067 225.362 144.749 220.017 139.085C214.672 133.42 211.957 123.987 216.92 117.988C220.197 114.025 225.721 112.813 230.84 112.199C256.019 109.208 283.914 114.375 304.974 100.303C317.029 92.245 324.832 78.5071 326.549 64.1475C328.265 49.7879 325.152 34.2472 316.069 22.9647C291.311 -7.75147 185.428 -8.30316 155.106 25.2336Z" fill="#E5F7FF"/>
<path d="M164.949 290C248.503 290 316.237 286.062 316.237 281.204C316.237 276.346 248.503 272.408 164.949 272.408C81.3951 272.408 13.6611 276.346 13.6611 281.204C13.6611 286.062 81.3951 290 164.949 290Z" fill="#E5F7FF"/>
<path d="M167.055 235.538L172.626 230.946L158.597 217.689L152.612 222.779L167.055 235.538Z" fill="#F6B69E"/>
<path d="M177.136 229.182C176.762 228.949 175.997 229.058 175.209 229.275C174.834 229.384 174.444 229.508 174.101 229.633C173.828 229.734 173.578 229.835 173.367 229.92C173.055 230.052 172.829 230.153 172.751 230.192C172.681 230.208 172.634 230.277 172.626 230.355C172.618 230.378 172.634 230.41 172.65 230.433C172.673 230.472 172.712 230.503 172.759 230.511C173.547 230.72 174.358 230.852 175.178 230.915C175.576 230.969 175.989 230.938 176.371 230.829C176.395 230.821 176.41 230.821 176.426 230.814C176.645 230.744 176.863 230.65 177.058 230.534C177.316 230.324 177.456 230.006 177.425 229.671C177.417 229.477 177.316 229.283 177.136 229.182ZM177.058 229.687C177.097 229.912 176.996 230.138 176.808 230.27C176.66 230.394 176.449 230.472 176.176 230.526C175.911 230.581 175.591 230.596 175.224 230.573C174.795 230.557 174.296 230.487 173.742 230.386C173.625 230.363 173.5 230.34 173.375 230.316C174.038 229.998 174.733 229.757 175.451 229.594C175.833 229.508 176.215 229.446 176.606 229.407C176.723 229.407 176.832 229.43 176.933 229.485C177.019 229.531 177.066 229.609 177.058 229.687Z" fill="#00BDD3"/>
<path d="M174.585 226.26C174.226 226.314 173.898 226.532 173.696 226.827C173.633 226.92 173.579 227.014 173.54 227.122C173.071 228.125 173.313 229.64 173.368 229.92C173.376 229.943 173.376 229.951 173.376 229.959C173.383 230.021 173.43 230.075 173.493 230.091C173.524 230.106 173.563 230.114 173.602 230.098C173.625 230.098 173.649 230.083 173.672 230.06C173.805 229.951 173.945 229.803 174.101 229.624C174.328 229.36 174.562 229.042 174.765 228.692C175.248 227.907 175.592 227.021 175.381 226.563C175.295 226.384 175.092 226.174 174.585 226.26ZM175.053 226.718C175.186 227.021 174.928 227.713 174.531 228.397C174.273 228.832 173.977 229.252 173.68 229.562C173.618 229.073 173.555 228.14 173.797 227.449C173.844 227.293 173.914 227.146 174 227.029C174.133 226.843 174.32 226.695 174.538 226.633L174.648 226.617C174.975 226.563 175.038 226.68 175.053 226.718Z" fill="#00BDD3"/>
<path d="M171.901 230.62L164.91 234.132C164.629 234.264 164.496 234.575 164.582 234.862L166.642 241.374C166.868 242.011 167.57 242.345 168.218 242.12C168.257 242.104 168.304 242.089 168.343 242.073C180.32 237.885 183.988 234.917 185.244 234.241C188.81 232.306 186.804 229.788 185.478 230.099C179.509 231.521 177.503 231.156 174.921 230.487C173.54 230.278 172.322 230.41 171.901 230.62Z" fill="#0E1F3D"/>
<path opacity="0.2" d="M158.597 217.697L165.705 223.967L159.713 229.057L152.612 222.786L158.597 217.697Z" fill="black"/>
<path d="M156.388 229.011L165.323 220.806L163.356 217.363L153.025 226.198L156.388 229.011Z" fill="#00BDD3"/>
<path opacity="0.5" d="M156.388 229.011L165.323 220.806L163.356 217.363L153.025 226.198L156.388 229.011Z" fill="white"/>
<path d="M161.952 218.567L160.759 219.593L158.972 221.123L157.903 222.025L154.789 224.69L154.189 225.195C154.189 225.195 141.462 218.054 134.377 211.954C129.524 207.774 129.087 206.22 128.58 206.609C121.737 211.791 101.481 229.71 90.003 239.034C89.6285 239.073 89.2617 239.112 88.8794 239.135C82.7464 239.586 77.9243 238.91 74.179 237.488C74.14 232.53 78.4003 220.953 78.7514 219.834C78.7514 219.834 95.6912 203.065 123.134 188.892C123.407 188.752 123.688 188.643 123.961 188.527C124.32 188.372 124.671 188.224 125.037 188.092C126.473 187.548 127.878 187.214 129.243 187.144C130.468 187.082 131.662 187.299 132.809 187.703C133.457 187.929 134.096 188.208 134.713 188.535C135.259 188.807 135.79 189.125 136.305 189.452C137.155 189.988 137.974 190.586 138.747 191.177C140.495 192.521 153.752 209.53 160.883 217.378C160.883 217.386 160.883 217.386 160.883 217.386C161.258 217.829 161.617 218.217 161.952 218.567Z" fill="#00BDD3"/>
<g opacity="0.1">
<g opacity="0.1">
<g opacity="0.1">
<g opacity="0.1">
<path opacity="0.1" d="M161.952 218.567L160.759 219.593L158.972 221.123L157.903 222.025L154.789 224.69L154.189 225.195C154.189 225.195 141.462 218.054 134.377 211.954C129.524 207.774 129.087 206.22 128.58 206.609C121.737 211.791 101.481 229.71 90.003 239.034C89.6285 239.073 89.2617 239.112 88.8794 239.135C82.7464 239.586 77.9243 238.91 74.179 237.488C74.14 232.53 78.4003 220.953 78.7514 219.834C78.7514 219.834 95.6912 203.065 123.134 188.892C123.407 188.752 123.688 188.643 123.961 188.527C124.32 188.372 124.671 188.224 125.037 188.092C126.473 187.548 127.878 187.214 129.243 187.144C130.468 187.082 131.662 187.299 132.809 187.703C133.457 187.929 134.096 188.208 134.713 188.535C135.259 188.807 135.79 189.125 136.305 189.452C137.155 189.988 137.974 190.586 138.747 191.177C140.495 192.521 153.752 209.53 160.883 217.378C160.883 217.386 160.883 217.386 160.883 217.386C161.258 217.829 161.617 218.217 161.952 218.567Z" fill="black"/>
</g>
</g>
</g>
</g>
<path d="M71.5581 146.987C72.6271 151.828 73.7507 158.892 70.4189 162.209C74.5544 169.467 79.5248 176.219 85.2286 182.335C92.5398 169.677 85.6109 161.852 85.6109 161.852C80.1334 160.686 80.2192 158.487 81.0775 154.696L71.5581 146.987Z" fill="#F6B69E"/>
<path d="M67.0322 162.823C67.438 161.51 68.2729 160.375 69.4043 159.59C70.4967 158.751 81.8575 158.627 84.8147 159.59C86.5392 160.134 88.0061 161.284 88.9424 162.831L67.0322 162.823Z" fill="#00BDD3"/>
<path d="M119.444 182.094L122.385 180.757L122.534 185.528C122.534 185.528 121.16 186.748 119.654 187.214C118.211 187.657 116.838 186.336 117.196 184.876C117.485 183.663 118.312 182.638 119.444 182.094Z" fill="#F6B69E"/>
<path d="M126.137 182.109L125.981 183.858C125.942 184.402 125.544 184.852 125.014 184.969L122.501 185.528L122.353 180.757L124.905 180.796C125.583 180.788 126.13 181.325 126.137 182.001C126.137 182.039 126.137 182.071 126.137 182.109Z" fill="#F6B69E"/>
<path d="M82.1385 195.668C86.5548 197.836 91.97 199.08 97.2836 198.186C103.541 197.137 114.442 190.882 119.186 187.292L117.586 184.922C115.222 185.427 95.9025 195.202 83.4181 186.359C81.0929 184.712 71.9637 177.929 68.7333 178.069C63.4976 178.302 63.9502 183.764 66.1974 186.041C68.8425 188.698 78.5258 193.897 82.1385 195.668Z" fill="#F6B69E"/>
<g opacity="0.2">
<path opacity="0.2" d="M125.982 183.857C125.935 184.394 125.545 184.852 125.015 184.969L122.518 185.528V185.536C122.518 185.536 121.145 186.756 119.646 187.222C119.49 187.269 119.334 187.3 119.186 187.3L119.178 187.307C114.434 190.897 103.541 197.145 97.2836 198.194C91.97 199.08 86.5548 197.844 82.1385 195.668C78.5258 193.897 68.8269 188.698 66.1974 186.041C63.9502 183.764 63.4976 178.309 68.7333 178.069C71.9559 177.929 81.0929 184.712 83.4181 186.359C95.3251 194.79 113.443 186.29 117.15 185.046C117.157 184.992 117.165 184.93 117.181 184.875C117.329 184.269 117.602 183.71 117.992 183.228C118.367 182.754 118.866 182.358 119.428 182.086L122.338 180.765L122.37 180.757L124.898 180.788C125.569 180.78 126.123 181.324 126.123 182C126.123 182.031 126.123 182.062 126.123 182.101L125.982 183.857Z" fill="black"/>
<path opacity="0.2" d="M122.376 180.757L122.353 180.765V180.757H122.376Z" fill="black"/>
</g>
<path d="M98.5009 170.632C105.125 185.17 89.7618 189.32 96.7999 213.159L63.404 213.959C63.6303 201.185 68.1871 203.928 62.179 179.91C61.6718 177.874 60.8213 172.038 62.9983 166.724C63.8488 164.657 65.3547 162.901 67.3288 161.836C69.7945 160.507 80.6559 161.549 85.6107 161.875C90.979 161.129 97.5177 168.814 98.5009 170.632Z" fill="#00BDD3"/>
<path opacity="0.5" d="M98.5009 170.632C105.125 185.17 89.7618 189.32 96.7999 213.159L63.404 213.959C63.6303 201.185 68.1871 203.928 62.179 179.91C61.6718 177.874 60.8213 172.038 62.9983 166.724C63.8488 164.657 65.3547 162.901 67.3288 161.836C69.7945 160.507 80.6559 161.549 85.6107 161.875C90.979 161.129 97.5177 168.814 98.5009 170.632Z" fill="white"/>
<path d="M92.1184 141.789C92.0247 142.426 92.2822 142.946 92.6802 143.001C93.0781 143.055 93.4839 142.612 93.5697 141.998C93.6633 141.384 93.4058 140.841 93.0079 140.786C92.61 140.74 92.2042 141.182 92.1184 141.789Z" fill="#0E1F3D"/>
<path d="M92.8276 140.802L94.357 140.592C94.357 140.584 93.4363 141.625 92.8276 140.802Z" fill="#0E1F3D"/>
<path d="M92.2194 142.628C92.2194 142.628 92.8749 145.41 93.8424 146.832C92.9217 147.469 91.5952 146.925 91.5952 146.925L92.2194 142.628Z" fill="#A02724"/>
<path d="M94.3262 137.516C94.4433 137.469 94.5291 137.36 94.5525 137.236C94.5837 137.033 94.4432 136.855 94.2482 136.824C93.0934 136.621 91.9074 136.995 91.0803 137.819C90.932 137.959 90.9242 138.184 91.0568 138.332C91.1973 138.48 91.4236 138.487 91.5718 138.355C91.5874 138.34 91.603 138.324 91.6186 138.301C92.2897 137.663 93.226 137.383 94.1389 137.547C94.2014 137.554 94.2716 137.547 94.3262 137.516Z" fill="#0E1F3D"/>
<path d="M71.9087 136.761C71.2767 144.337 70.8475 147.523 74.0935 151.929C78.978 158.557 88.4662 157.687 91.3454 150.445C93.9515 143.933 94.5523 132.643 87.6079 128.587C82.6609 125.665 76.2782 127.289 73.3366 132.208C72.5095 133.591 72.0179 135.153 71.9087 136.761Z" fill="#F6B69E"/>
<path d="M91.5171 149.987C90.9397 149.505 90.5028 148.868 90.2531 148.137C90.2297 148.06 90.2765 147.974 90.3623 147.943C90.4403 147.92 90.5262 147.966 90.5496 148.052C90.7759 148.681 91.1504 149.233 91.6342 149.676L91.5171 149.987Z" fill="#0E1F3D"/>
<path d="M66.4857 126.908C63.5831 130.824 62.2644 131.842 65.8537 142.262C67.2972 146.45 71.4873 151.998 73.5238 152.503C77.1755 153.42 80.7258 150.864 83.4724 148.292C85.8756 146.038 88.1774 143.606 89.6366 140.661C91.0957 137.716 91.6341 134.188 90.4324 131.135C89.1216 127.817 84.4945 124.856 81.0301 124.126C76.9571 123.271 68.8968 123.652 66.4857 126.908Z" fill="#0E1F3D"/>
<path d="M89.2375 141.307C89.2375 141.307 90.1503 142.869 88.9956 144.034L89.019 141.952L89.2375 141.307Z" fill="#0E1F3D"/>
<path d="M89.223 141.307C89.223 141.307 89.5585 143.7 87.5454 144.594L88.63 142.006L89.223 141.307Z" fill="#0E1F3D"/>
<path d="M75.8261 151.617C75.8261 151.617 73.6101 152.62 73.93 154.788L75.5452 152.495L75.8261 151.617Z" fill="#0E1F3D"/>
<path d="M75.9122 151.664C75.9122 151.664 74.2268 153.405 75.3348 155.308L75.9824 152.581L75.9122 151.664Z" fill="#0E1F3D"/>
<path d="M92.2737 138.183C93.0618 137.375 93.8655 136.551 94.4429 135.58C95.0281 134.609 95.3792 133.459 95.2076 132.347C94.9813 130.902 93.8889 129.713 92.6171 128.983C91.3452 128.26 89.8861 127.934 88.4504 127.615C87.7481 127.46 86.96 127.312 86.3436 127.685C85.7428 128.043 85.4853 128.796 85.5243 129.488C85.5556 130.18 85.8364 130.832 86.0861 131.477C87.0771 134.003 87.7013 136.598 88.1773 139.255C88.4192 140.6 88.2319 141.485 89.5662 140.973C90.4557 140.623 91.5949 138.882 92.2737 138.183Z" fill="#0E1F3D"/>
<path d="M81.7722 141.921C81.6942 143.677 82.3106 145.386 83.4966 146.684C85.0806 148.401 87.0937 147.274 87.6711 145.145C88.2017 143.234 87.9988 140.04 85.9233 139.123C83.8478 138.199 81.8815 139.784 81.7722 141.921Z" fill="#F6B69E"/>
<path d="M170.271 239.034L176.294 233.183L164.637 218.583L157.349 222.864L170.271 239.034Z" fill="#F6B69E"/>
<path d="M182.443 231.381C181.772 231.147 180.398 231.893 179.361 232.554C179.095 232.717 178.861 232.88 178.658 233.02L178.643 233.028C178.604 233.059 178.572 233.082 178.541 233.106C178.307 233.269 178.136 233.393 178.073 233.44C177.995 233.479 177.964 233.556 177.979 233.634C178.003 233.712 178.073 233.766 178.151 233.774C178.869 233.805 179.587 233.782 180.305 233.704C180.469 233.688 180.625 233.673 180.781 233.649C181.303 233.611 181.803 233.44 182.232 233.152C182.388 233.051 182.536 232.942 182.661 232.818C182.887 232.546 182.965 232.173 182.856 231.831C182.809 231.637 182.653 231.466 182.443 231.381ZM182.489 231.94C182.568 232.165 182.528 232.422 182.365 232.608C182.162 232.857 181.756 233.059 181.179 233.199C180.734 233.308 180.195 233.385 179.563 233.416C179.314 233.424 179.048 233.44 178.775 233.44C178.861 233.37 178.947 233.308 179.041 233.245C179.103 233.199 179.165 233.16 179.228 233.113C180.063 232.531 180.984 232.072 181.959 231.754C182.076 231.722 182.201 231.722 182.326 231.761C182.404 231.785 182.466 231.855 182.489 231.94Z" fill="#00BDD3"/>
<path d="M179.102 228.902C178.735 229.042 178.447 229.337 178.306 229.694C177.815 230.891 178.54 232.733 178.665 233.02C178.665 233.028 178.665 233.028 178.673 233.028C178.673 233.043 178.673 233.051 178.681 233.051C178.712 233.113 178.766 233.16 178.837 233.168C178.876 233.176 178.915 233.168 178.954 233.152C178.977 233.144 179.008 233.121 179.016 233.106C179.024 233.09 179.032 233.09 179.04 233.082C179.149 232.942 179.266 232.764 179.367 232.554C179.945 231.474 180.483 229.671 180.007 229.05C179.867 228.871 179.609 228.7 179.102 228.902ZM178.907 232.577C178.696 231.963 178.322 230.658 178.665 229.85C178.759 229.625 178.923 229.43 179.141 229.314L179.25 229.259C179.586 229.127 179.672 229.244 179.703 229.283C180.038 229.733 179.516 231.575 178.907 232.577Z" fill="#00BDD3"/>
<path opacity="0.2" d="M164.021 217.689L169.514 224.69L162.086 228.808L156.507 221.994L164.021 217.689Z" fill="black"/>
<path d="M63.0991 211.426L62.3266 214.441C62.2096 214.682 62.4983 214.907 62.8806 214.9L97.2753 214.092C97.5796 214.076 97.8214 213.928 97.8371 213.742L96.9787 210.579C97.0022 210.377 96.729 210.206 96.4013 210.214L63.6531 211.17C63.4346 211.147 63.224 211.248 63.0991 211.426Z" fill="#0E1F3D"/>
<path d="M93.7025 214.449L92.7974 214.542C92.618 214.534 92.4697 214.488 92.4697 214.379L92.4541 210.486C92.4541 210.377 92.6024 210.268 92.7818 210.245L93.6869 210.144C93.8664 210.152 94.0147 210.198 94.0147 210.315L94.0303 214.208C94.0225 214.317 93.882 214.426 93.7025 214.449Z" fill="#00BDD3"/>
<path d="M81.3896 214.605L80.4844 214.698C80.305 214.69 80.1645 214.643 80.1567 214.535L80.1489 210.642C80.1489 210.533 80.2972 210.424 80.4766 210.401L81.374 210.3C81.5534 210.308 81.7017 210.354 81.7017 210.471L81.7173 214.364C81.7173 214.488 81.569 214.581 81.3896 214.605Z" fill="#00BDD3"/>
<path d="M81.3896 214.605L80.4844 214.698C80.305 214.69 80.1645 214.643 80.1567 214.535L80.1489 210.642C80.1489 210.533 80.2972 210.424 80.4766 210.401L81.374 210.3C81.5534 210.308 81.7017 210.354 81.7017 210.471L81.7173 214.364C81.7173 214.488 81.569 214.581 81.3896 214.605Z" fill="#00BDD3"/>
<path d="M168.632 220.821L167.11 221.676L167.103 221.683L164.489 223.152L162.14 224.465L162.132 224.473L159.721 225.825V225.833L158.801 226.353C158.801 226.353 158.59 226.206 158.223 225.934C158.083 225.833 157.919 225.716 157.732 225.576C157.162 225.149 156.358 224.551 155.43 223.812C155.43 223.812 155.43 223.812 155.43 223.805C150.576 219.989 141.939 212.475 139.372 205.653C137.71 207.627 135.72 210.098 133.442 212.833C123.633 224.62 108.379 241.257 90.0503 243.425C89.6758 243.479 89.3091 243.51 88.9267 243.541C82.8016 244.07 77.9716 243.456 74.2107 242.08C64.6991 238.615 62.0462 230.285 62.7016 223.206V223.183C62.7562 219.873 63.4117 213.967 63.4117 213.967L98.1106 214.006C103.003 208.093 112.811 198.831 122.845 192.987C123.079 192.84 123.321 192.7 123.563 192.576C123.86 192.397 124.164 192.241 124.461 192.078C127.722 190.299 130.984 188.924 134.074 188.178C134.76 188.014 135.439 187.875 136.11 187.774C136.812 187.665 137.507 187.603 138.186 187.572V187.579C142.937 187.362 147.065 189.126 149.866 193.85L168.125 220.083L168.632 220.821Z" fill="#00BDD3"/>
<path d="M149.906 184.915L111.563 186.492L112.687 162.194L151.029 160.617L149.906 184.915Z" fill="#00BDD3"/>
<path d="M149.461 186.834L111.673 188.388C110.604 188.434 109.769 187.595 109.823 186.531L110.939 162.388C110.986 161.316 111.899 160.415 112.968 160.368L150.757 158.814C151.826 158.767 152.661 159.599 152.606 160.671L151.49 184.813C151.443 185.886 150.53 186.787 149.461 186.834Z" fill="#0E1F3D"/>
<path d="M149.906 184.915L111.563 186.492L112.687 162.194L151.029 160.617L149.906 184.915Z" fill="#00BDD3"/>
<path opacity="0.9" d="M149.906 184.915L111.563 186.492L112.687 162.194L151.029 160.617L149.906 184.915Z" fill="white"/>
<path opacity="0.1" d="M126.295 159.824L119.959 188.03L122.479 187.929L128.729 159.723L126.295 159.824Z" fill="white"/>
<path opacity="0.1" d="M130.18 159.668L123.844 187.875L128.846 187.665L135.096 159.466L130.18 159.668Z" fill="white"/>
<path d="M137.46 187.137L150.225 186.779C150.444 188.256 149.812 188.807 149 188.831L144.919 188.932L142.196 188.994L137.959 189.11L111.672 189.872L111.461 188.03L137.46 187.137Z" fill="#00BDD3"/>
<path d="M137.46 187.136L150.225 186.779C150.444 188.255 149.812 188.807 149 188.83L144.919 188.931L142.196 188.993L137.959 189.11L105.422 190.105C105.047 190.112 104.704 189.91 104.54 189.568C104.251 188.962 104.681 188.247 105.359 188.224L137.46 187.136Z" fill="#00BDD3"/>
<path opacity="0.2" d="M137.46 187.136L150.225 186.779C150.444 188.255 149.812 188.807 149 188.83L144.919 188.931L142.196 188.993L137.959 189.11L105.422 190.105C105.047 190.112 104.704 189.91 104.54 189.568C104.251 188.962 104.681 188.247 105.359 188.224L137.46 187.136Z" fill="black"/>
<path opacity="0.2" d="M150.226 186.779L150.304 187.292C150.421 188.084 149.812 188.807 149.001 188.83L144.92 188.931L137.343 189.203L137.468 187.136L150.226 186.779Z" fill="black"/>
<path opacity="0.2" d="M84.1046 171.347C84.1046 171.347 82.3021 175.007 87.5066 184.673L89.6835 188.613C90.4014 189.911 95.1767 187.261 96.5968 184.829C96.5968 184.829 87.4754 179.374 84.1046 171.347Z" fill="black"/>
<path d="M128.244 182.613L131.872 181.549L131.287 187.136C131.287 187.136 126.223 190.508 124.467 187.283L125.17 185.481C125.716 184.113 126.839 183.064 128.244 182.613Z" fill="#F6B69E"/>
<path d="M136.039 183.748L135.586 185.761C135.454 186.382 134.923 186.841 134.283 186.895L131.264 187.128L131.849 181.542L134.814 182.008C135.602 182.109 136.164 182.831 136.055 183.616C136.055 183.663 136.047 183.702 136.039 183.748Z" fill="#F6B69E"/>
<path d="M98.0321 192.063C100.56 195.481 104.118 198.333 108.308 199.149C113.24 200.113 122.728 193.166 127.175 188.667C126.949 186.771 127.082 185.745 125.178 185.481C125.178 185.481 120.286 189.055 111.047 191.2C108.067 191.892 106.077 188.853 103.471 184.432C102.175 182.225 97.9775 173.188 96.3936 171.176C93.8577 167.943 86.6245 170.259 89.4959 178.037C90.7053 181.308 95.9644 189.265 98.0321 192.063Z" fill="#F6B69E"/>
<path d="M95.3329 165.885C100.467 170.578 102.964 178.877 102.964 178.877L90.979 186.15C90.979 186.15 82.2165 173.904 83.777 169.638C85.0098 166.327 87.2961 164.152 90.3001 163.965C92.165 163.856 93.9596 164.626 95.3329 165.885Z" fill="#00BDD3"/>
<path d="M67.8518 215.079L66.9467 215.102C66.7672 215.079 66.6268 215.017 66.6346 214.9L66.9623 211.023C66.9779 210.906 67.1262 210.813 67.3056 210.805L68.2107 210.782C68.3902 210.805 68.5307 210.875 68.5229 210.984L68.1951 214.869C68.1873 214.978 68.0313 215.094 67.8518 215.079Z" fill="#00BDD3"/>
<path d="M157.326 228.001L168.999 222.189L168 218.055L154.688 224.108L157.326 228.001Z" fill="#00BDD3"/>
<path opacity="0.5" d="M157.326 228.001L168.999 222.189L168 218.055L154.688 224.108L157.326 228.001Z" fill="white"/>
<path d="M175.826 232.546L167.773 234.979C167.453 235.064 167.25 235.367 167.289 235.693L168.257 242.966C168.382 243.681 169.061 244.171 169.779 244.047C169.825 244.039 169.872 244.031 169.919 244.015C183.371 241.785 187.811 239.33 189.254 238.84C193.382 237.45 191.736 234.411 190.269 234.505C183.683 234.909 181.631 234.155 179.017 232.974C177.62 232.484 176.309 232.407 175.826 232.546Z" fill="#0E1F3D"/>
<path d="M67.5471 136.668C65.1282 137.049 62.7328 135.199 61.9759 132.884C61.219 130.568 61.8433 127.981 63.0839 125.875C63.9968 124.321 69.9816 120.638 72.2053 124.787C76.6217 133.047 67.5471 136.668 67.5471 136.668Z" fill="#0E1F3D"/>
<path d="M149.562 168.946L125.958 169.948L126.068 167.617L149.671 166.615L149.562 168.946Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M149.562 168.946L125.958 169.948L126.068 167.617L149.671 166.615L149.562 168.946Z" fill="white"/>
</g>
<path d="M149.422 172.186L125.818 173.181L125.92 170.85L149.523 169.855L149.422 172.186Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M149.422 172.186L125.818 173.181L125.92 170.85L149.523 169.855L149.422 172.186Z" fill="white"/>
</g>
<path d="M149.274 175.419L125.67 176.421L125.78 174.09L149.383 173.087L149.274 175.419Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M149.274 175.419L125.67 176.421L125.78 174.09L149.383 173.087L149.274 175.419Z" fill="white"/>
</g>
<path d="M149.126 178.659L125.522 179.654L125.632 177.323L149.235 176.328L149.126 178.659Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M149.126 178.659L125.522 179.654L125.632 177.323L149.235 176.328L149.126 178.659Z" fill="white"/>
</g>
<path d="M148.985 181.892L125.381 182.895L125.483 180.563L149.086 179.561L148.985 181.892Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M148.985 181.892L125.381 182.895L125.483 180.563L149.086 179.561L148.985 181.892Z" fill="white"/>
</g>
<path d="M116.432 171.25L114.538 171.332L114.571 172.108L116.466 172.026L116.432 171.25Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M116.432 171.25L114.538 171.332L114.571 172.108L116.466 172.026L116.432 171.25Z" fill="white"/>
</g>
<path d="M116.347 173.495L114.452 173.576L114.486 174.352L116.38 174.271L116.347 173.495Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M116.347 173.495L114.452 173.576L114.486 174.352L116.38 174.271L116.347 173.495Z" fill="white"/>
</g>
<path d="M116.251 175.733L114.357 175.814L114.39 176.591L116.285 176.509L116.251 175.733Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M116.251 175.733L114.357 175.814L114.39 176.591L116.285 176.509L116.251 175.733Z" fill="white"/>
</g>
<path d="M116.166 177.979L114.272 178.061L114.305 178.837L116.2 178.755L116.166 177.979Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M116.166 177.979L114.272 178.061L114.305 178.837L116.2 178.755L116.166 177.979Z" fill="white"/>
</g>
<path d="M116.073 180.217L114.179 180.298L114.212 181.075L116.106 180.993L116.073 180.217Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M114.208 181.084L114.278 180.299L116.166 180.221L116.096 180.998L114.208 181.084Z" fill="white"/>
</g>
<path d="M115.982 182.456L114.088 182.536L114.121 183.312L116.015 183.233L115.982 182.456Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M115.982 182.456L114.088 182.536L114.121 183.312L116.015 183.233L115.982 182.456Z" fill="white"/>
</g>
<path d="M118.397 169.109L114.48 170.562L114.519 169.537L116.689 169.187L114.543 169.039L114.582 168.014L118.397 169.109Z" fill="#00BDD3"/>
<path d="M142.313 165.402L125.958 166.094L126.037 164.478L142.391 163.786L142.313 165.402Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M142.313 165.402L125.958 166.094L126.037 164.478L142.391 163.786L142.313 165.402Z" fill="white"/>
</g>
<path d="M120.247 166.242L117.852 166.343L118.819 165.729L119.084 165.977L119.373 165.721L120.247 166.242Z" fill="#00BDD3"/>
<path d="M118.725 165.658L117.758 166.272L117.828 164.85L118.725 165.658Z" fill="#00BDD3"/>
<path d="M120.403 164.804L120.325 166.156L119.443 165.643L120.403 164.804Z" fill="#00BDD3"/>
<path d="M119.118 165.397L119.064 165.454L119.07 165.459L119.124 165.403L119.118 165.397Z" fill="white"/>
<path d="M119.072 165.42L119.066 165.425L119.119 165.482L119.125 165.476L119.072 165.42Z" fill="white"/>
<path d="M120.402 164.671L119.372 165.604L119.083 165.852L118.818 165.612L117.921 164.803L117.851 164.734L120.402 164.671Z" fill="#00BDD3"/>
<path d="M116.44 164.921L114.546 165.001L114.556 165.234L116.45 165.154L116.44 164.921Z" fill="#00BDD3"/>
<path d="M116.442 165.51L114.548 165.591L114.558 165.824L116.452 165.743L116.442 165.51Z" fill="#00BDD3"/>
<path d="M116.44 166.111L114.546 166.191L114.556 166.424L116.45 166.344L116.44 166.111Z" fill="#00BDD3"/>
<path d="M226.365 48.0785H214.997C213.967 48.0785 213.132 47.2471 213.132 46.2214C213.132 45.1957 213.967 44.3643 214.997 44.3643H226.365C227.395 44.3643 228.23 45.1957 228.23 46.2214C228.23 47.2471 227.395 48.0785 226.365 48.0785Z" fill="#00BDD3"/>
<g opacity="0.7">
<path opacity="0.7" d="M226.365 48.0785H214.997C213.967 48.0785 213.132 47.2471 213.132 46.2214C213.132 45.1957 213.967 44.3643 214.997 44.3643H226.365C227.395 44.3643 228.23 45.1957 228.23 46.2214C228.23 47.2471 227.395 48.0785 226.365 48.0785Z" fill="white"/>
</g>
<path d="M268.072 86.2382L224.485 166.117C223.923 167.143 222.628 167.524 221.598 166.964L147.433 126.83C146.403 126.271 146.021 124.981 146.582 123.955L203.269 20.0582C203.831 19.0325 205.127 18.6518 206.157 19.2112L256.133 46.252L268.072 86.2382Z" fill="#00BDD3"/>
<g opacity="0.2">
<path opacity="0.2" d="M268.072 86.2382L224.485 166.117C223.923 167.143 222.628 167.524 221.598 166.964L147.433 126.83C146.403 126.271 146.021 124.981 146.582 123.955L203.269 20.0582C203.831 19.0325 205.127 18.6518 206.157 19.2112L256.133 46.252L268.072 86.2382Z" fill="white"/>
</g>
<path d="M243.619 104.167L188.228 74.4083L186.375 77.8276L241.766 107.586L243.619 104.167Z" fill="#00BDD3"/>
<path d="M236.049 118.138L180.658 88.3795L178.806 91.7988L234.197 121.557L236.049 118.138Z" fill="#00BDD3"/>
<path d="M228.482 132.109L173.091 102.351L171.239 105.77L226.63 135.528L228.482 132.109Z" fill="#00BDD3"/>
<path d="M256.196 46.2208L243.056 70.3166C242.494 71.3423 242.877 72.6322 243.907 73.1917L268.025 86.2458L256.196 46.2208Z" fill="#00BDD3"/>
<path opacity="0.7" d="M256.196 46.2208L243.056 70.3166C242.494 71.3423 242.877 72.6322 243.907 73.1917L268.025 86.2458L256.196 46.2208Z" fill="white"/>
<path d="M279.432 83.5492L235.846 163.428C235.284 164.454 233.989 164.835 232.959 164.275L158.793 124.141C157.763 123.582 157.381 122.292 157.943 121.266L214.63 17.3692C215.192 16.3436 216.487 15.9628 217.517 16.5223L267.494 43.5631L279.432 83.5492Z" fill="#00BDD3"/>
<g opacity="0.5">
<path opacity="0.5" d="M279.432 83.5492L235.846 163.428C235.284 164.454 233.989 164.835 232.959 164.275L158.793 124.141C157.763 123.582 157.381 122.292 157.943 121.266L214.63 17.3692C215.192 16.3436 216.487 15.9628 217.517 16.5223L267.494 43.5631L279.432 83.5492Z" fill="white"/>
</g>
<path d="M253.504 100.683L201.069 72.5158C200.25 72.0806 199.235 72.3837 198.791 73.1918L198.533 73.6658C198.096 74.4817 198.4 75.4918 199.212 75.9347L251.647 104.102C252.466 104.537 253.48 104.234 253.925 103.426L254.182 102.952C254.627 102.136 254.323 101.118 253.504 100.683Z" fill="#00BDD3"/>
<path d="M245.935 114.654L193.5 86.4865C192.681 86.0513 191.667 86.3544 191.222 87.1625L190.964 87.6365C190.527 88.4524 190.832 89.4625 191.643 89.9054L244.078 118.073C244.897 118.508 245.911 118.205 246.356 117.397L246.614 116.923C247.058 116.107 246.754 115.097 245.935 114.654Z" fill="#00BDD3"/>
<path d="M238.366 128.625L185.932 100.458C185.113 100.023 184.098 100.326 183.653 101.134L183.396 101.608C182.959 102.424 183.263 103.434 184.075 103.877L236.509 132.044C237.329 132.479 238.343 132.176 238.788 131.368L239.045 130.894C239.49 130.078 239.186 129.068 238.366 128.625Z" fill="#00BDD3"/>
<path d="M267.565 43.5322L254.417 67.628C253.855 68.6537 254.237 69.9436 255.267 70.5031L279.386 83.5572L267.565 43.5322Z" fill="#00BDD3"/>
<path opacity="0.7" d="M267.565 43.5322L254.417 67.628C253.855 68.6537 254.237 69.9436 255.267 70.5031L279.386 83.5572L267.565 43.5322Z" fill="white"/>
<path d="M264.552 6.91113L268.219 23.1278C254.331 26.9275 241.869 40.6111 232.904 53.5487C229.369 58.6538 226.373 64.5826 224.134 70.8533C224.134 70.8533 252.138 45.623 267.58 44.1466L266.846 70.9543C266.846 70.9543 282.857 39.8962 313.959 28.5282C313.951 28.5204 287.906 9.84055 264.552 6.91113Z" fill="#F4E041"/>
<path d="M75.616 184.083L82.6931 264.638H71.2854L63.6699 177.952H68.8978C72.4012 177.952 75.3117 180.61 75.616 184.083Z" fill="#00BDD3"/>
<path opacity="0.2" d="M75.6852 184.806L82.6999 264.638H71.2923L63.6768 177.952H68.1712C72.0803 177.952 75.3419 180.928 75.6852 184.806Z" fill="black"/>
<path d="M68.2032 183.197L75.3583 264.638H7.44297L0.37366 184.2C0.0771549 180.843 2.7379 177.952 6.1243 177.952H62.4447C65.4488 177.952 67.9457 180.229 68.2032 183.197Z" fill="#00BDD3"/>
<path opacity="0.2" d="M68.2803 184.083L75.3574 264.638H7.44207L0.466392 185.256C0.12307 181.332 3.22857 177.952 7.18458 177.952H61.5543C65.0577 177.952 67.976 180.61 68.2803 184.083Z" fill="white"/>
<path d="M187.727 264.638H7.75586L5.79736 242.298H178.559C182.546 242.298 186.057 245.515 186.4 249.486L187.727 264.638Z" fill="#00BDD3"/>
<path opacity="0.2" d="M187.727 264.638H7.75586L5.79736 242.298H178.559C182.546 242.298 186.057 245.515 186.4 249.486L187.727 264.638Z" fill="white"/>
<path d="M195.981 273.193H5.64042C3.17475 273.193 1.16943 271.204 1.16943 268.741C1.16943 266.286 3.16695 264.289 5.64042 264.289H195.981C198.447 264.289 200.452 266.278 200.452 268.741C200.452 271.196 198.447 273.193 195.981 273.193Z" fill="#00BDD3"/>
<path opacity="0.2" d="M195.982 273.193H85.4866C83.0209 273.193 81.0156 271.204 81.0156 268.741C81.0156 266.286 83.0131 264.289 85.4866 264.289H195.982C198.447 264.289 200.453 266.278 200.453 268.741C200.453 271.196 198.447 273.193 195.982 273.193Z" fill="black"/>
<path d="M8.1377 273.193L10.3927 280.839H14.9027L17.384 273.193H8.1377Z" fill="#263238"/>
<path opacity="0.5" d="M8.1377 273.193L10.3927 280.839H14.9027L17.384 273.193H8.1377Z" fill="white"/>
<path d="M72.7676 273.193L75.0226 280.839H79.5326L82.0139 273.193H72.7676Z" fill="#263238"/>
<path opacity="0.5" d="M72.7676 273.193L75.0226 280.839H79.5326L82.0139 273.193H72.7676Z" fill="white"/>
<path d="M122.238 273.193L124.493 280.839H129.003L131.484 273.193H122.238Z" fill="#263238"/>
<path opacity="0.5" d="M122.238 273.193L124.493 280.839H129.003L131.484 273.193H122.238Z" fill="white"/>
<path d="M186.868 273.193L189.123 280.839H193.633L196.114 273.193H186.868Z" fill="#263238"/>
<path opacity="0.5" d="M186.868 273.193L189.123 280.839H193.633L196.114 273.193H186.868Z" fill="white"/>
          </svg> 
          </span>
        </>
      ) : (
        <>
          <h1>Working with POST request</h1>
          <form action="">
            <Fieldset />
            <Position testRadio={Radio} />
            <ImageUploader />
          </form>
          <Button text="Sign up" type={formOK ? 'yellow' : 'disabled'} func={() => FormSent()} />
        </>
      )}
    </section>
  );
}