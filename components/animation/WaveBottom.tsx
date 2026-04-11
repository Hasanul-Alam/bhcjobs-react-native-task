/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Animated, Easing, useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const WaveBottom = () => {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -width,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [width]);

  const W = width * 2; // SVG is 2x wide so the loop is seamless

  const wave1 = `
    M0,40
    C${width * 0.15},10 ${width * 0.35},70 ${width * 0.5},40
    C${width * 0.65},10 ${width * 0.85},70 ${width},40
    C${width * 1.15},10 ${width * 1.35},70 ${width * 1.5},40
    C${width * 1.65},10 ${width * 1.85},70 ${W},40
    L${W},80 L0,80 Z
  `;

  const wave2 = `
    M0,55
    C${width * 0.2},25 ${width * 0.4},75 ${width * 0.5},50
    C${width * 0.6},25 ${width * 0.8},75 ${width},55
    C${width * 1.2},25 ${width * 1.4},75 ${width * 1.5},50
    C${width * 1.6},25 ${width * 1.8},75 ${W},55
    L${W},80 L0,80 Z
  `;

  return (
    <AnimatedSvg
      width={W}
      height={80}
      viewBox={`0 0 ${W} 80`}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        transform: [{ translateX }],
      }}
    >
      <Path d={wave2} fill="rgba(255,255,255,0.2)" />
      <Path d={wave1} fill="rgba(255,255,255,0.45)" />
    </AnimatedSvg>
  );
};

export default WaveBottom;
