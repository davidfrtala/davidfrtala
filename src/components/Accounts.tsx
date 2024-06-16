import React from "react";
import { Link, IconButton, Flex, Box, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Debater from "../assets/debater.svg";

export const Accounts = () => (
  <Flex alignItems="center">
    <Box textAlign="center">
      {accounts.map((sc, index) => (
        <Tooltip label={sc.label} placement="bottom" hasArrow>
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            rounded="full"
            icon={sc.icon}
            variant="ghost"
            isRound={true}
          />
        </Tooltip>
      ))}
    </Box>
  </Flex>
);

const accounts = [
  {
    url: "https://github.com/davidfrtala",
    label: "Github",
    icon: <FaGithub />,
  },
  {
    url: "https://linkedin.com/in/davidfrtala",
    label: "LinkedIn",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
  {
    url: "https://leetcode.com/u/davidfrtala/",
    label: "LeetCode",
    icon: <SiLeetcode />,
  },
  {
    url: "https://www.16personalities.com/profiles/7ca16d49d200c",
    label: "16personalities (ENTP-A)",
    icon: <Debater width="20px" />,
  },
];
