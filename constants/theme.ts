import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const widthPercentage = (percentage: number): number => {
   return (percentage * width) / 100;
};

export const heightPercentage = (percentage: number): number => {
   return (percentage * height) / 100;
};

export const theme = {
   colors: {
      white: "#fff",
      primary: "#f6f6fa",
      secondary: "#35478c",
      accent: "#D23600",
      info: "#89e0eb",
      text: "#ffffff",
      textMuted: "#cccde2",
      background: "#0a0a12",
      backgroundMuted: "#242b50",
      error: "#ffbbbd",
   },
   font: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
};
