import { useCallback, useState } from "react";

export function Chapter11() {
  const onClick = () => {
    console.log('clicked');
  };

  return <button onClick={onClick}>Click me</button>
}
