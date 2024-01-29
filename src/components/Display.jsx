import styles from "./Display.module.css";
function Display({ displayvalue }) {
  return (
    <input
      type="text"
      className={styles.display}
      readOnly
      value={displayvalue}
    />
  );
}

export default Display;
