import { useEffect, useState } from "react";

import { Dimensions } from "react-native";

export function useOrientation() {
  const [window, setWindow] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) =>
      setWindow(window)
    );
    return () => subscription.remove();
  }, []);

  return {
    width: window.width,
    height: window.height,
    isPortrait: window.width < window.height
  };
}
