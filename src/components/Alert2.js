import React, { useState } from 'react';

const Alert2 = (props) => {
  const [seeAlert, setseeAlert] = useState(true);

  const handleDismiss = () => {
    setseeAlert(false);
  };

  return (
    props.alert && seeAlert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} onClick={handleDismiss} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
    )
  );
};

export default Alert2;
