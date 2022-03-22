import {Dimensions, ScaledSize} from 'react-native';
import {useEffect, useState} from 'react';

function useOrientation(onChange?: (width: number, height: number) => void) {
  const [window, setWindow] = useState(Dimensions.get('window'));

  const handleChange = (window: ScaledSize) => {
    setWindow(window);
    onChange && onChange(window.width, window.height);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => handleChange(window));

  }, []);

  return window;
}

export default useOrientation;
