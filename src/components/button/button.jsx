import "./button.css";
export default function Button({text, type, func}) {
    return(
        <button onClick={func} className={type}>{text}</button>
    )
}