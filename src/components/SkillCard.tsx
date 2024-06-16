import React from "react";
import { Heading } from "@chakra-ui/react";

import { Card } from "../components/Card";

export type SkillBoxProps = {
  title: string;
};

export const SkillCard = ({
  title,
  children,
}: React.PropsWithChildren<SkillBoxProps>) => (
  <Card minH="80px" p="6">
    <Heading as="h3" size="md">
      {title}
    </Heading>
    {children}
  </Card>
);
