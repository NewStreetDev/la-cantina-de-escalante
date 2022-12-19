import React from "react";
import { useField } from "formik";

function CustomTextarea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="contentInput">
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomTextarea;
