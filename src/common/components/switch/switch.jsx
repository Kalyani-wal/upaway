import React, { useState } from "react";
import Switch from "react-switch";
import cx from "classnames";

const ToggleSwitch = ({name}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="container-switch">
      <label className={cx({"switch-checked": checked})}>
        <Switch onChange={() => setChecked(!checked)} checked={checked} />
        <span className="switch-name">{name}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
