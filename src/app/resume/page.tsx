import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
import ResumeContent from "@/components/ResumeContent";

export const metadata = {
  title: "Resume",
  description: "View and download Om Chavda's resume",
};

export default function ResumePage() {
  const resumePDF = "/resume.pdf";

  return (
    <Container>
      <ResumeContent resumePDF={resumePDF} />
    </Container>
  );
}
