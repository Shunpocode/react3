import { useState } from "react";
import "./card.css";

export default function Card({ avatar, name, position, email, phone }) {
  const [isHovered, setHovered] = useState(false);
  const visibleCharsThreshold = 25; // Порог для определения видимости текста

  return (
    <span className={`card ${isHovered ? "hovered" : ""}`}>
      <img src={avatar} alt="" />
      <p>{name}</p>
      <p>
        <span>
          <a>{position}</a>
        </span>
        <span className={email.length > visibleCharsThreshold ? "email-container hovering" : ""}>
          <a>
            {email.length > visibleCharsThreshold
              ? email.slice(0, visibleCharsThreshold) + "..."
              : email}
          </a>
          {email.length > visibleCharsThreshold && (
            <span className={'full-email'}>
              {email}
            </span>
          )}
        </span>
        <span>
          <a>{phone}</a>
        </span>
      </p>
    </span>
  );
}

