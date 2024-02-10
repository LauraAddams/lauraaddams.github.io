"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { emoijs, peachpack } from "./data";

export default function Emojis() {
  const download = (filename: string, url: string) => {
    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownload = async (
    event: React.MouseEvent,
    source: StaticImageData,
    filename: string,
  ) => {
    event.stopPropagation();
    try {
      const result = await fetch(source.src, {
        method: "GET",
        headers: {},
      });
      const blob = await result.blob();
      const url = URL.createObjectURL(blob);
      download(filename, url);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box my={24}>
      <Container maxW="container.sm">
        <Heading> Slack Emojis</Heading>
        <Text>
          Premium, hand-sculpted, one-of-a-kind emojis for your custom
          workspace. (Click to download)
        </Text>
        <Heading mt={12}>Party Pack</Heading>
        <SimpleGrid columns={[2, 4]}>
          {emoijs.map((emoji) => (
            <Tooltip key={emoji.alt} label={emoji.name} bg="hotpink">
              <Button
                width={128}
                height={128}
                variant="ghost"
                onClick={(event) =>
                  handleDownload(event, emoji.image, emoji.name)
                }
              >
                <Image alt={emoji.alt} src={emoji.image} />
              </Button>
            </Tooltip>
          ))}
        </SimpleGrid>
        <Heading mt={12}>Peach Pack</Heading>
        <SimpleGrid columns={[2, 4]}>
          {peachpack.map((emoji) => (
            <Tooltip key={emoji.alt} label={emoji.name} bg="hotpink">
              <Button
                width={128}
                height={128}
                variant="ghost"
                onClick={(event) =>
                  handleDownload(event, emoji.image, emoji.alt)
                }
              >
                <Image alt={emoji.alt} src={emoji.image} />
              </Button>
            </Tooltip>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
