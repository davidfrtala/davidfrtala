import * as rx from "@radix-ui/colors";

const renameScale = (color: any, colorName: string, rename: string) =>
  Object.keys(color).reduce((acc, key) => {
    const scale = key.replace(colorName, rename);
    acc[scale] = color[key];
    return acc;
  }, {} as any);

export const colors = {
  rx: {
    ...rx,
    light: {
      ...renameScale(rx.sand, "sand", "accent"),
      ...renameScale(rx.plum, "plum", "brand"),
      ...renameScale(rx.brown, "brown", "secondary"),
      ...rx.gray,
    },
    dark: {
      ...renameScale(rx.sandDark, "sand", "accent"),
      ...renameScale(rx.plumDark, "plum", "brand"),
      ...renameScale(rx.brownDark, "brown", "secondary"),
      ...rx.grayDark,
    },
  },
};

export const semanticColors = {
  background: { default: "rx.light.accent2", _dark: "rx.dark.accent2" },
  // surface
  "surface.white": {
    default: "#fff",
    _dark: "rx.dark.gray1",
  },
  "surface.default": {
    default: "rx.light.accent3",
    _dark: "rx.dark.accent3",
  },
  "surface.primary": {
    default: "rx.light.brand9",
    _dark: "rx.dark.brand9",
  },

  "text.default": { default: "rx.light.accent12", _dark: "rx.dark.accent12" },
  "text.subtle": { default: "rx.light.accent11", _dark: "rx.dark.accent11" },
  "text.inverse": { default: "rx.whiteA12", _dark: "rx.blackA12" },
  "text.primary": {
    default: "rx.light.brand11",
    _dark: "rx.dark.brand11",
  },
  "text.primary.soft": {
    default: "rx.light.brand4",
    _dark: "rx.dark.brand4",
  },

  "border.default": { default: "rx.light.accent7", _dark: "rx.dark.accent7" },
  "border.subtle": { default: "rx.light.accent6", _dark: "rx.dark.accent6" },
};
