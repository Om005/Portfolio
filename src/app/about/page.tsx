import { Container } from "@/components/Container";
import { Metadata } from "next";
import AboutNew from "@/components/AboutNew";

export const metadata: Metadata = {
  title: "About | Om Chavda",
  description:
    "Om Chavda is a full-stack developer passionate about solving real-world problems through code and design — powered by algorithms, creativity, and modern technology.",
};

export default function AboutPage() {
  return (
    <Container>
      <AboutNew />
    </Container>
  );
}
