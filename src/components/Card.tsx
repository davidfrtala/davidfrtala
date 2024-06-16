import React, { PropsWithChildren } from "react";
import { useColorModeValue, Stack, StackProps } from "@chakra-ui/react";

export const Card = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  const bg = useColorModeValue("rx.slate.slate3", "rx.slateDark.slate3");

  return (
    <Stack
      p={{ base: 3, sm: 6 }}
      rounded="lg"
      backgroundImage={`linear-gradient(to top, transparent, ${bg})`}
      backgroundAttachment="fixed"
      {...props}
    >
      {children}
    </Stack>
  );
};
