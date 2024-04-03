import React from "react";
import styles from "@/components/Settings/SettingsCSS/movement.module.css";
import CodeContainer from "./codeContainer";
const MovementCodes = () => {
  return (
    <body className={styles.container}>
      <div className={styles.cardContainer}>
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
        <CodeContainer />
      </div>
      <div className={styles.btn}>
        <p>Generate New</p>
      </div>
    </body>
  );
};

export default MovementCodes;
