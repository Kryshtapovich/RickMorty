import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

function useOrientation(onChange?: (width: number, height: number) => void) {
  const [window, setWindow] = useState(Dimensions.get('window'));

  const handleChange = (window: ScaledSize) => {
    setWindow(window);
    onChange && onChange(window.width, window.height);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) =>
      handleChange(window),
    );
    return () => subscription.remove();
  }, []);

  return window;
}

export default useOrientation;
