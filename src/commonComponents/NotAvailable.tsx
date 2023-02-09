import React from "react";

const NotAvailable = (props: { label?: string; className?: string }) => {
  return (
    <>
      {props.label ? (
        <div className={`red-font ${props.className}`}>
          {props.label} not available
        </div>
      ) : (
        <div className={`red-font ${props.className}`}>Not available</div>
      )}
    </>
  );
};

export default NotAvailable;
