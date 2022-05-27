import React from "react";

export default function InputField({ name, value, onChange, isPassword }) {
  return (
    <label htmlFor={name}>
      {name}
      <input
        type={isPassword ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
