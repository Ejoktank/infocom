import { useState } from "react";
import "../../call_manager/call_manager.less";

export function FormCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="form_checkboxes-container">
      <svg className={`checkbox ${isChecked ? "checkbox--active" : ""}`} aria-hidden="true" viewBox="0 0 15 11" fill="none">
        <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={isChecked ? "#fff" : "none"} />
      </svg>
      <span className="form-label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
      <input type="checkbox" onChange={() => {setIsChecked(!isChecked);}}/>
    </label>
  );
}