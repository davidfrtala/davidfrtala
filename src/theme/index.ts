import { extendTheme } from "@chakra-ui/react";
import { colors, semanticColors } from "./colors";

// Or export `extendBaseTheme` if you only want the default Chakra theme tokens to extend (no default component themes)
export const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        lineHeight: "tall",
      },
    },
  },

  components: {
    Tag: {
      baseStyle: {
        container: {
          bg: "rx.sageA.sageA3",

          _dark: {
            bg: "rx.sageDarkA.sageA3",
          },
        },
      },
    },
  },
  colors,
  semanticTokens: {
    colors: {
      ...semanticColors,
      /*
       * Chakra's tokens
       */
      "chakra-body-bg": "var(--chakra-colors-background)",
      "chakra-body-text": "var(--chakra-colors-text-default)",
      "chakra-subtle-bg": "var(--chakra-colors-surface-default)",
      "chakra-subtle-text": "var(--chakra-colors-text-subtle)",
      "chakra-inverse-text": "var(--chakra-colors-text-inverse)",
      "chakra-border-color": "var(--chakra-colors-border-default)",
    },
  },
});
