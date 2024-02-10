"use client";

import { Box, Heading, VStack } from "@chakra-ui/react";
import { projects } from "base/app/projects/data";
import Image from "next/image";

const MARGIN: number = 4;

export default function Projects() {
  return (
    <VStack spacing={MARGIN * 4}>
      <Heading variant="title">Projects! Wow!</Heading>
      {projects.map((project, index) => (
        <Box key={`${project.title}-${index}`}>
          <Heading>{project.title}</Heading>
          {project.summary}
          {project.link}
          {project.github}
          {project.description}
          {project.technologies.toString()}
          {project.gallery.map((image) => (
            <Image key={image.alt} alt={image.alt} src={image.src} />
          ))}
        </Box>
      ))}
    </VStack>
  );
}
