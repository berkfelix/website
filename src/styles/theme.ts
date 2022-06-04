import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "tailwindcss/colors";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    // Tailwind colors
    zinc: colors.zinc,
    neutral: colors.neutral,
    stone: colors.stone,
    emerald: colors.emerald,
    violet: colors.violet,
    sky: colors.sky,
    rose: colors.rose,
    slate: colors.slate,
    // Custom colors
  },
  fonts: {
    navbar: `'Bebas Neue', cursive`,
    body: `'Radio Canada', sans-serif`,
    title: `'Tiro Devanagari Hindi', serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("zinc.300", props.default)(props),
      },
    }),
  },
};
const Button: ComponentStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
};
export default extendTheme(theme, {
  components: {
    Button,
  },
});
