"use client";

import React from "react";
import Select from "react-select";
import styles from  "@/components/HomePageCSS/homePage.module.css"

export default function Selector({
  width,
  multi,
  options,
  onChange,
  defaultV,
}) {
  return (
    <Select
      options={options}
      isMulti={multi}
      defaultValue={defaultV}
      onChange={onChange}
      className={styles.Sele}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: !width ? "min(400px, 28vw)" : width,

          outline: "none",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#111115",
          border: "none",
          outline: "none",
          color: "#ffffff",
          fontSize: "min(12px, 2.4vw)",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,

        colors: {
          primary25: "#68696a",
          primary: "#68696a",
          neutral0: "#FFFFFF",
        },
      })}
    />
  );
}
