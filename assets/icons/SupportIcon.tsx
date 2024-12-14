import React from "react";
import Svg, { Circle, Line } from "react-native-svg";
import { IconProps } from "../../types/types";

const SupportIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#000000",
  fill = "none",
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-5 12) rotate(-45)"
    />
    <Circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-5 12) rotate(-45)"
    />
    <Line
      x1="5"
      y1="5"
      x2="9"
      y2="9"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1="15"
      y1="9"
      x2="19"
      y2="5"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1="15"
      y1="15"
      x2="19"
      y2="19"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1="9"
      y1="15"
      x2="5"
      y2="19"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SupportIcon;
