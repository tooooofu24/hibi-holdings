import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { ContactCard } from "../components/ContactCard";
import { DocumentsCard } from "../components/DocumentsCard";
import { Footer } from "../components/Footer";
import { ScrollHeader } from "../components/Header/ScrollHeader";
import { Hero } from "../components/Hero";
import { ServiceCard } from "./components/ServiceCard";

export const metadata: Metadata = {
  title: "未来を創るデジタルソリューション",
  description:
    "テクノロジーと経営実装をつなぎ、事業の次の一手を最短で形にします。ITコンサル・DX推進・人材ソリューション・受託開発・VIPキャスティングを提供。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <Box>
      <ScrollHeader />
      <Hero />

      {/* Services Section - 1:1 images in horizontal layout */}
      <Box
        py={{ base: "24", md: "40" }}
        px={{ base: "2", md: "4" }}
        id="services"
      >
        <Container maxW="5xl" px={{ base: "4", md: "6" }}>
          <VStack gap={{ base: "16", md: "24" }} align="stretch">
            {/* Header */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }}
                color="fg"
                fontWeight="bold"
                mb="6"
              >
                事業内容
              </Heading>
            </Box>

            {/* Services Grid */}
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={{ base: "4", md: "8" }}
            >
              <ServiceCard
                title="ITコンサルティング"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&auto=format"
              />

              <ServiceCard
                title="DX推進支援"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&auto=format"
              />

              <ServiceCard
                title="人材ソリューション"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&auto=format"
              />

              <ServiceCard
                title="受託開発"
                image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=600&fit=crop&auto=format"
              />

              <ServiceCard
                title="VIPキャスティング"
                image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop&auto=format"
              />

              {/* 6個目の位置に「もっと見る」 */}
              <LinkBox
                aspectRatio="1"
                bg="bg.muted"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s ease"
                _hover={{ bg: "gray.200" }}
              >
                <LinkOverlay asChild color="fg.muted">
                  <NextLink href="/services">もっと見る</NextLink>
                </LinkOverlay>
              </LinkBox>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={{ base: "32", md: "52" }} bg="gray.50" id="about">
        <Container maxW="8xl" px={{ base: "4", md: "6" }}>
          <VStack gap={{ base: "16", md: "24" }} align="stretch">
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: "12", lg: "16" }}
              alignItems="start"
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                  color="gray.900"
                  lineHeight="1.2"
                  mb="8"
                >
                  テクノロジーに
                  <br />
                  できることを追求する。
                </Heading>
              </Box>

              <VStack
                align="start"
                gap="12"
                position="relative"
                w="fit-content"
              >
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="fg.muted"
                  lineHeight="1.8"
                >
                  私たちは、テクノロジーを「できる」に変える実装力で、
                  <br />
                  お客様の競争力を磨き続けます。
                  <br />
                  短期の成果と長期の基盤づくりを両立させる——
                  <br />
                  それが私たちの仕事です。
                </Text>

                <Flex justifyContent="flex-end" w="full">
                  <Link asChild textStyle="sm">
                    <NextLink href="/about">
                      詳しく見る <HiArrowRight size="16" />
                    </NextLink>
                  </Link>
                </Flex>
              </VStack>
            </Grid>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: "24", md: "40" }} id="contact">
        <Container maxW="5xl" px={{ base: "4", md: "6" }}>
          <VStack
            gap={{ base: "12", md: "20" }}
            align="stretch"
            maxW="4xl"
            mx="auto"
          >
            <Box textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                color="fg"
                fontWeight="bold"
                mb={{ base: "4", md: "6" }}
              >
                お気軽にご相談ください
              </Heading>
              <Text
                textStyle={{ base: "md", md: "lg" }}
                color="fg.muted"
                maxW="2xl"
                mx="auto"
                lineHeight="1.7"
              >
                プロジェクトの課題や要件について、まずはお話を聞かせてください。
                <br />
                最適なソリューションをご提案いたします。
              </Text>
            </Box>

            <VStack gap={{ base: "4", md: "6" }} align="stretch">
              <ContactCard />
              <DocumentsCard />
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
