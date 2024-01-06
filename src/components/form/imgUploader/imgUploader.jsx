import React, { useState } from 'react';
import "./imgUploader.css"

const ImageUploader = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [invalidImg, setInvalidImg] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {

      if (file.size > 5 * 1024 * 1024) {
        setInvalidImg(true);
        return;
      } else {
        setInvalidImg(false);
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const maxSize = 70;
          let width = img.width;
          let height = img.height;

          if (width < maxSize || height < maxSize) {

          }

          const fileName = file.name;
          setImgSrc(fileName);
        };
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setImgSrc('');
    }
  };

  return (
    <div id='imgInput'>
      <div id='local-file' className={invalidImg ? "error" : ""}>
        <div id='customInputImg'>Upload</div>
        <input type="file" accept=".jpg, .jpeg" id="imageInput" onChange={handleImageChange} required/>
      </div>
      <span className={invalidImg ? "error" : ""}>
        {imgSrc ? <p>{imgSrc}</p> : "Upload your photo"}
      </span>
      <span id='help'>Max file size 5mb and min img size 70x70</span>
    </div>
  );
};

export default ImageUploader;
