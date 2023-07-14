import React, { useState } from "react"

const MapPoint = (props: { label: string, coords: string }) => {
  const { label, coords } = props;
  const getArea = () => {};
  return (
    <React.Fragment>
      <area
        onClick={getArea}
        shape="rect"
        coords={coords}
        title={label}
      />
    </React.Fragment>
  );
}

export default MapPoint;
