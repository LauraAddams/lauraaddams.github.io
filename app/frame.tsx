"use client";

import NextLink from "next/link";
import {
  Link,
  HStack,
  Text,
  useClipboard,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { contact, me } from "base/app/me/data";
import { drive } from "base/app/resume/data";

// ⍥⍜⌒⌓⌑⌗⌁✸✺❊✻❋❇︎❍❑✦✧✸✤△◁►☞◇◦●◻︎◼︎◘◆⚑✚☺︎☻♦︎♥︎♣︎☾☁︎☀︎☼♡⚘⏥✉︎⚡︎

function Header() {
  return (
    <header>
      ✸
      <Link as={NextLink} href="/">
        {me.name}
      </Link>
      ✦
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <HStack spacing={24}>
        <Link as={NextLink} target="_blank" href={drive}>
          Resume
        </Link>
        {/* <Link as={NextLink} href="/projects">
          Projects
        </Link> */}
        <Link as={NextLink} href="/emojis">
          Emojis
        </Link>
      </HStack>
    </nav>
  );
}

function Contact() {
  const { onCopy, hasCopied } = useClipboard(contact.email);
  return (
    <aside>
      <HStack spacing={24}>
        <Text fontSize="xx-large">☞</Text>
        <Link href={contact.linkedIn.link} target="_blank">
          {contact.linkedIn.short}
        </Link>
        <Link href={contact.github.link} target="_blank">
          {contact.github.short}
        </Link>
        <Tooltip
          label={hasCopied ? "Copied!" : "Copy Email"}
          closeDelay={500}
          placement="right"
          closeOnScroll={true}
        >
          <Button fontSize="xx-large" onClick={onCopy}>
            ✉︎
          </Button>
        </Tooltip>
      </HStack>
    </aside>
  );
}

function Footer() {
  return (
    <footer>
      <Text fontSize="xx-large">✤</Text>
      <span>Have a good day</span>
      <Text fontSize="xx-large">❋</Text>
    </footer>
  );
}

export { Header, Navigation, Contact, Footer };
