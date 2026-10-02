import { useState, useEffect } from 'react';

const initialHeight = document.documentElement.clientHeight;
const initialWidth = document.documentElement.clientWidth;

export function useScreenSize() {
  const [heigthHook, setHeigthPos] = useState(initialHeight);
  const [widthHook, setWidthPos] = useState(initialWidth);

  useEffect(() => {
    const foo = () => {
      setHeigthPos(document.documentElement.clientHeight);
      setWidthPos(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', foo);
    return () => {
      window.removeEventListener('resize', foo);
    };
  }, []);

  return [heigthHook, widthHook];
}
