import React from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

type LineWithDotProps = {
  order?: "first" | "last";
};

const orderStyles = {
  first: {
    bottom: "-10px",
    height: "calc(100% - 60px)",
  },
  last: {
    top: "0px",
    height: "calc(100% - 130px)",
  },
};

export const LineWithDot = ({ order }: LineWithDotProps) => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <Text
        as="span"
        position="absolute"
        left="49%"
        border="1px solid"
        borderColor={useColorModeValue("rx.light.gray4", "rx.dark.gray4")}
        {...(order
          ? orderStyles[order]
          : {
              height: "calc(100% + 10px)",
              top: "0px",
            })}
      />
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="-30px"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor={useColorModeValue("rx.light.gray4", "rx.dark.gray4")}
          borderRadius="100px"
          border="3px solid"
          borderColor="text.primary"
          backgroundImage="none"
          opacity={1}
        />
      </Box>
    </Flex>
  );
};
