import React, { useState } from "react"

const GameResult = (props: { actual: string, expected: string }) => {
  const { actual, expected } = props;
  return (
    <React.Fragment>
      {actual === expected ?
      <h2> Right! </h2> :
      <div>
      <h2> Wrong! </h2>
      <h3> {expected} </h3>
      </div>
      }
    </React.Fragment>
  );
}

export default GameResult;
