import * as React from "react";
import { type HeadFC } from "gatsby";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  SimpleGrid,
  Tag,
  HStack,
  Divider,
  ListItem,
  Link,
  Wrap,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CheckCircleIcon } from "@chakra-ui/icons";

import { SkillCard } from "../components/SkillCard";
import { Timeline } from "../components/Timeline";
import { Highlighter } from "../components/Highlighter";
import { Accounts } from "../components/Accounts";
import { skills } from "../components/data";
import { TimelineCard } from "../components/Timeline/TimelineCard";

export const Head: HeadFC = () => (
  <title>David Frtala - Product Engineer</title>
);

export default function Index() {
  return (
    <Container maxW="5xl" p={{ base: 4, lg: 20 }}>
      <Stack as={Box} spacing={{ base: 8, md: 14 }}>
        <Stack spacing={4} px={2}>
          <HStack justifyContent="space-between">
            <Heading as="h1" size="3xl">
              David Frtala
            </Heading>
            <Accounts />
          </HStack>
          <Heading size="lg">
            <Highlighter>Product</Highlighter> Engineer
          </Heading>

          <Text>
            Entrepreneur with a strong technical background. I combine my
            passion for online products with technologies.
            <br />I am full-stack{" "}
            <Link
              href="https://productengineer.org/"
              color="text.primary"
              isExternal
            >
              Product Engineer
              <ExternalLinkIcon mx="2px" mt="-1" />
            </Link>{" "}
            with 10+ years of experience in software development and leading
            development teams.
          </Text>
          <Text>
            Proven track record of building scalable, maintainable products and
            ensuring high-quality code through rigorous testing and code
            reviews. Demonstrated leadership in project management and team
            collaboration, driving feature development and improving product
            quality.
          </Text>
          <Text>
            Looking to leverage my expertise to drive innovation and
            customer-focused solutions.
          </Text>
          <Text fontSize="sm" fontWeight="thin" textAlign="right">
            Central Europe 🇪🇺, (GMT+2)
          </Text>
        </Stack>

        <Divider />

        <Stack>
          <Heading size="lg" pb="4">
            Skills
          </Heading>
          <Text>
            I am a Full-stack developer at heart 🤓. Started with PHP (version
            4) all back to my high school times (+15 years ago). Over the years,
            I've accumulated a wealth of skills in various technologies and
            frameworks that I use to solve engineering problems.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
          {Object.keys(skills).map((category, i) => (
            <SkillCard key={i} title={category}>
              <Wrap>
                {skills[category].map((skill, j) => (
                  <Tag key={j}>{skill}</Tag>
                ))}
              </Wrap>
            </SkillCard>
          ))}
        </SimpleGrid>
        <Stack>
          <Heading size="lg" pb="4">
            Work <Highlighter>Experience</Highlighter>
          </Heading>
          <Text>
            I have been fortunate to work with some amazing teams across various
            industries 👏🙏. I'm used to wear a lot of hats and my journey has
            primarily been with startups, where I had the opportunity to drive
            innovation and lead development teams, but I've also contributed to
            large enterprises.
          </Text>
          <Text>
            Here is a brief overview of my employment history, showcasing my
            experience in full-stack development, leadership, and project
            management.
          </Text>
        </Stack>

        <Timeline />

        <Stack>
          <Heading size="lg" pb="4">
            Volunteering
          </Heading>

          <TimelineCard
            title="IT Leader"
            company="IAESTE Slovakia"
            date="2011 - 2012"
            location="Bratislava, Slovakia"
            description="During my college times, I could not just sit idle and do nothing. So I joined a student organisation to help them on their technical side"
            bullets={[
              "Team reform and reorganisation",
              "Development of a reservation system",
            ]}
          />
        </Stack>

        <Stack>
          <Heading size="lg" pb="4">
            Achievements, Certificates & <Highlighter>Honors</Highlighter>
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Certified{" "}
              <Link
                href="https://credentials.corporatefinanceinstitute.com/d639fc42-dec6-43b5-9fd0-b33c12e2f47f"
                color="text.primary"
                isExternal
              >
                Financial Modeling & Valuation Analyst (FMVA) ®
                <ExternalLinkIcon mx="2px" mt="-1" />
              </Link>{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              1st place & 10K EUR price money @ <b>Swiss RE Hackathon 2017</b>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Valuation Training with
              <Link
                href="https://pages.stern.nyu.edu/~adamodar/"
                color="text.primary"
                isExternal
                px="2"
              >
                Professor Damodaran
                <ExternalLinkIcon mx="2px" mt="-1" />
              </Link>
              @ <b>Institute for Mergers, Acquisitions and Alliances</b>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <b>Mensa IQ +130</b> Member
            </ListItem>
          </List>
        </Stack>

        <Stack>
          <Heading size="lg" pb="4">
            A quote to <Highlighter>live</Highlighter> by
          </Heading>

          <Text
            as="blockquote"
            fontStyle="italic"
            borderLeft="5px solid"
            borderColor="border.subtle"
            background="surface.default"
            borderRadius="lg"
            px="4"
            py="2"
            fontSize="lg"
          >
            The highest form of knowledge is empathy, for it requires us to
            suspend our egos
            <br /> and live in another's world.
            <Text fontWeight="bold" textAlign="right">
              - Plato
            </Text>
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
