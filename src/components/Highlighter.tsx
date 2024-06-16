import React, { PropsWithChildren } from "react";
import { Text, useToken } from "@chakra-ui/react";

export const Highlighter = ({ children }: PropsWithChildren) => {
  const [textPrimarySoft] = useToken("colors", ["text.primary.soft"]);
  return (
    <Text
      as="span"
      color="text.primary"
      bg={`linear-gradient(transparent 50%, ${textPrimarySoft} 50%)`}
    >
      {children}
    </Text>
  );
};
