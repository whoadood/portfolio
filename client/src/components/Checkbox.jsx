import React from "react";

export default function Checkbox({ name, value, checked, onChange }) {
  return (
    <label className={`checkbox ${checked && "active"}`} htmlFor="name">
      <img crossOrigin="anonymous" src={value} alt="technology icon" />
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </label>
  );
}
