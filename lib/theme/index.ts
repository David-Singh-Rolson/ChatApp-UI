import { lightTheme, darkTheme } from "./colors";
import { fonts } from "./fonts";

// Radius tokens
export const radius = {
  card: "30px",
  bubble: "20px",
};

// Shadow tokens
export const shadows = {
  card: "0 10px 40px rgba(0,0,0,0.1)",
};

// Combine all theme tokens into one object
export const theme = {
  light: {
    ...lightTheme,
    fonts,
    radius,
    shadows,
  },
  dark: {
    ...darkTheme,
    fonts,
    radius,
    shadows,
  },
};

export { lightTheme, darkTheme, fonts };
