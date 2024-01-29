import styles from "./ButtonContainer.module.css";
function ButtonContainer({ onbuttonclick }) {
  const buttonnames = [
    "AC",
    "%",
    "DEL",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonnames.map((names) => (
        <button className={styles.button} onClick={() => onbuttonclick(names)}>
          {names}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
