import React from "react";
import {
  Box,
  Text,
  HStack,
  Stack,
  Heading,
  Tag,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { Card } from "../Card";

export type TimelineCardProps = {
  title: string;
  company: string;
  keywords: string[];
  bullets: string[];
  description: string;
  location: string;
  date: string;
};

export const TimelineCard = ({
  title,
  company,
  bullets,
  keywords,
  description,
  location,
  date,
}: Partial<TimelineCardProps>) => {
  return (
    <Card w="full">
      <HStack spacing={5} alignItems="flex-start" pos="relative">
        <Stack w="full" spacing={4} mb={3}>
          <HStack justifyContent="space-between" fontSize="sm">
            <Text>{location}</Text>
            <Text>{date}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Heading as="h2" fontSize="xl" lineHeight={1.2} fontWeight="bold">
              {title}
              <Text as="span" fontWeight="thin" px="2">
                at
              </Text>
              {company}
            </Heading>
          </HStack>

          {description && <Text>{description}</Text>}
          {bullets && (
            <UnorderedList>
              {bullets.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </UnorderedList>
          )}

          {keywords && (
            <Wrap>
              {keywords.map((k, i) => (
                <Tag key={i}>{k}</Tag>
              ))}
            </Wrap>
          )}
        </Stack>
      </HStack>
    </Card>
  );
};
