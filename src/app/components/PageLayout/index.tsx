import { Box, Container } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box>
      <Header />

      <Box pt="12">
        <Container
          maxW="5xl"
          py={{ base: "20", md: "36" }}
          px={{ base: "8", md: "12" }}
        >
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
