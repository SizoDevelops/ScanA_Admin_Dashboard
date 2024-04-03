import React from "react";
import styles from "@/components/Settings/SettingsCSS/movement.module.css";
const CodeContainer = () => {
  return (
    <div className={styles.codeCont}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.Hicon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 14 14"
            >
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect width="13" height="7" x=".5" y="3.5" rx="1" />
                <circle cx="3.5" cy="7" r=".5" />
                <circle cx="6.5" cy="7" r=".5" />
                <path d="M9.5 8H11" />
              </g>
            </svg>
          </span>
          <p>Movement Code</p>
        </div>

        <p>11 May 2024</p>
      </div>
      <p className={styles.code}>SCANA-MCODE</p>

      <div className={styles.actions}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M20.5 6h-17m5.67-2a3.001 3.001 0 0 1 5.66 0m3.543 11.4c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CodeContainer;
