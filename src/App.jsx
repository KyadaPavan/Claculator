import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");

  const onbuttonclick = (buttonText) => {
    if (buttonText === "AC") {
      setcalval("");
    } else if (buttonText === "DEL") {
      let cval = calval.substring(0, calval.length - 1);
      setcalval(cval);
    } else if (buttonText === "=") {
      let result = eval(calval);
      setcalval(result);
    } else {
      let newdisplayvalue = calval + buttonText;
      setcalval(newdisplayvalue);
    }
  };
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.calaulator}>
          <Display displayvalue={calval} />
          <ButtonContainer onbuttonclick={onbuttonclick} />
        </div>
      </div>
    </>
  );
}

export default App;
