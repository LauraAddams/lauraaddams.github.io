"use client";

import { Box, Container, Heading, Highlight, Link } from "@chakra-ui/react";
import { me } from "base/app/me/data";
import { drive } from "base/app/resume/data";

export default function Home() {
  return (
    <Box my={24}>
      <Container maxW="container.sm">
        <Heading as="p">
          <Highlight
            query={["software engineer", "frontend"]}
            styles={{
              px: "2",
              pt: "1",
              bg: "hotpink",
              rounded: "full",
            }}
          >
            {me.intro}
          </Highlight>
        </Heading>
        <Heading as="p" mt={12}>
          <Highlight
            query={["learning", "collaboration", "empathy"]}
            styles={{
              px: "2",
              pt: "1",
              bg: "limon",
              rounded: "full",
            }}
          >
            {me.loves}
          </Highlight>
        </Heading>
      </Container>
      <Container mt={12} textAlign="center">
        <Heading>❑❒❑❐❏</Heading>
      </Container>
      <Container maxW="container.sm" mt={12} textAlign="center">
        <Heading>
          Check out my{" "}
          <Link
            href={drive}
            target="_blank"
            borderBottom="5px solid var(--chakra-colors-pepper)"
          >
            Resume
          </Link>
        </Heading>
      </Container>
    </Box>
  );
}
