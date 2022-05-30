import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
};

const Portal: React.FC<PortalProps> = (props) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(props.children, el);
};

export default Portal;
