import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './index.scss';

const SwitchButton = ({
  defaultChecked,
  onChange,
  disabled,
  className
}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
      if ( typeof onChange === 'function' ) {
        onChange(!toggle);
      }
    }
}, [defaultChecked]);

  const triggerToggle = () => {
    if ( disabled ) { return; }
    setToggle( !toggle );
    if ( typeof onChange === 'function' ) {
      onChange(!toggle);
    }
  }

  const toggleClasses = classNames('wrg-toggle', {
    'wrg-toggle--checked': toggle,
    'wrg-toggle--disabled': disabled
  }, className);

  return(
    <div onClick={triggerToggle} className={toggleClasses}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span></span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span></span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
    </div>
  )
}

export default SwitchButton;