import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingBox() {
  return (
    <Spinner animation="border" roles="status">
      <span className="Visually-hidden"> Loading..</span>
    </Spinner>
  );
}

export default LoadingBox;
