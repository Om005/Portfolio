import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">🧑‍💻</span>
      <Heading className="font-black">Hello there! I&apos;m Om</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer passionate about solving real-world problems through code and design — powered by <Highlight>algorithms</Highlight>, <Highlight>creativity</Highlight>, and <Highlight>modern technology</Highlight>.{" "}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        {/* I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking. */}
        Turning ideas into performant web apps with <Highlight>1100+</Highlight> LeetCode & Codeforces challenges proving deep problem-solving expertise.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
