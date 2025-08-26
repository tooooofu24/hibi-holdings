import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Flex,
  Image,
  Card,
  Input,
  Textarea,
  Grid,
  Link,
} from "@chakra-ui/react";
import { LuSettings, LuMonitor, LuUsers } from "react-icons/lu";

export default function Home() {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="white" shadow="sm" position="sticky" top="0" zIndex="sticky">
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Flex
            h={{ base: "16", md: "20" }}
            align="center"
            justify="space-between"
          >
            <Box
              fontWeight="900"
              fontSize={{ base: "xl", md: "2xl" }}
              color="gray.900"
              letterSpacing="tight"
            >
              Hibi Holdings
            </Box>
            <HStack
              gap={{ base: "6", md: "8" }}
              align="center"
              display={{ base: "none", md: "flex" }}
            >
              <Link
                href="#services"
                fontWeight="medium"
                fontSize="lg"
                _hover={{ color: "teal.600" }}
              >
                事業内容
              </Link>
              <Link
                href="#about"
                fontWeight="medium"
                fontSize="lg"
                _hover={{ color: "teal.600" }}
              >
                会社情報
              </Link>
              <Link
                href="#contact"
                fontWeight="medium"
                fontSize="lg"
                _hover={{ color: "teal.600" }}
              >
                お問い合わせ
              </Link>
              <Button colorPalette="teal" size="md" px="8">
                資料請求
              </Button>
            </HStack>
            <Box display={{ base: "block", md: "none" }}>
              <Button variant="ghost" size="md">
                ≡
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        minH={{ base: "80vh", md: "90vh" }}
        position="relative"
        display="flex"
        alignItems="center"
        bg="gray.50"
        py={{ base: "16", md: "24", lg: "32" }}
      >
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1.3fr 0.7fr" }}
            gap={{ base: "12", lg: "16", xl: "20" }}
            alignItems="center"
          >
            <Stack
              gap={{ base: "8", md: "10", lg: "12" }}
              order={{ base: "2", lg: "1" }}
              maxW={{ lg: "none" }}
            >
              <Stack gap={{ base: "6", md: "8" }}>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="600"
                  color="teal.600"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  mb="2"
                >
                  Hibi Holdings
                </Text>
                <Heading
                  size={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="900"
                  color="gray.900"
                  lineHeight="0.9"
                  letterSpacing="tight"
                  mb={{ base: "4", md: "6" }}
                >
                  未来を創る
                  <br />
                  <Box as="span" color="teal.600">
                    デジタル
                  </Box>
                  <br />
                  ソリューション
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="gray.600"
                  lineHeight="1.6"
                  fontWeight="400"
                  maxW={{ md: "2xl" }}
                >
                  テクノロジーと戦略コンサルティングで、企業の成長と変革を支援します。
                  持続可能な未来に向けて、革新的なソリューションを提供いたします。
                </Text>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                gap={{ base: "4", md: "6" }}
                w={{ base: "full", sm: "auto" }}
              >
                <Button
                  size={{ base: "lg", md: "xl" }}
                  colorPalette="teal"
                  px={{ base: "8", md: "12" }}
                  py={{ base: "3", md: "4" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="600"
                  w={{ base: "full", sm: "auto" }}
                  borderRadius="xl"
                >
                  サービス詳細
                </Button>
                <Button
                  size={{ base: "lg", md: "xl" }}
                  variant="outline"
                  colorPalette="gray"
                  px={{ base: "8", md: "12" }}
                  py={{ base: "3", md: "4" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="600"
                  w={{ base: "full", sm: "auto" }}
                  borderRadius="xl"
                >
                  会社案内
                </Button>
              </Stack>
            </Stack>
            <Box order={{ base: "1", lg: "2" }} position="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Modern office workspace"
                borderRadius={{ base: "2xl", md: "3xl" }}
                shadow="2xl"
                width="100%"
                height={{ base: "300px", md: "450px", lg: "550px" }}
                objectFit="cover"
              />
              <Box
                position="absolute"
                top="-4"
                right="-4"
                w="20"
                h="20"
                bg="teal.500"
                borderRadius="full"
                display={{ base: "none", lg: "block" }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Box py={{ base: "20", md: "28", lg: "36" }} bg="white" id="services">
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Stack gap={{ base: "16", md: "18", lg: "20" }}>
            <Stack
              gap={{ base: "6", md: "8" }}
              maxW="4xl"
              mx="auto"
              textAlign="center"
            >
              <Text
                color="teal.600"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize={{ base: "sm", md: "md" }}
              >
                事業内容
              </Text>
              <Heading
                size={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                color="gray.900"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                私たちのサービス
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                lineHeight="1.6"
                maxW="3xl"
                mx="auto"
              >
                戦略からテクノロジー、実行まで包括的なアプローチで、
                お客様の成功を実現します。
              </Text>
            </Stack>

            <Grid
              templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
              gap={{ base: "10", md: "12", lg: "16" }}
              maxW="6xl"
              mx="auto"
            >
              <Card.Root
                p={{ base: "8", md: "10", lg: "12" }}
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap={{ base: "6", md: "8" }} textAlign="center">
                  <Box
                    bg="gradient-to-br"
                    gradientFrom="teal.400"
                    gradientTo="teal.600"
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    width="fit-content"
                    mx="auto"
                  >
                    <LuSettings size={{ base: "32", md: "40" }} color="white" />
                  </Box>
                  <Stack gap={{ base: "4", md: "6" }}>
                    <Heading
                      size={{ base: "xl", md: "2xl" }}
                      color="gray.900"
                      fontWeight="800"
                      lineHeight="1.2"
                    >
                      ITコンサルティング
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      最新技術の導入から運用最適化まで、
                      企業のIT戦略を包括的にサポートします。
                    </Text>
                  </Stack>
                </Stack>
              </Card.Root>

              <Card.Root
                p={{ base: "8", md: "10", lg: "12" }}
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap={{ base: "6", md: "8" }} textAlign="center">
                  <Box
                    bg="gradient-to-br"
                    gradientFrom="teal.400"
                    gradientTo="teal.600"
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    width="fit-content"
                    mx="auto"
                  >
                    <LuMonitor size={{ base: "32", md: "40" }} color="white" />
                  </Box>
                  <Stack gap={{ base: "4", md: "6" }}>
                    <Heading
                      size={{ base: "xl", md: "2xl" }}
                      color="gray.900"
                      fontWeight="800"
                      lineHeight="1.2"
                    >
                      DX推進支援
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      デジタル変革の計画から実行まで、
                      企業の競争力向上をトータルサポートします。
                    </Text>
                  </Stack>
                </Stack>
              </Card.Root>

              <Card.Root
                p={{ base: "8", md: "10", lg: "12" }}
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap={{ base: "6", md: "8" }} textAlign="center">
                  <Box
                    bg="gradient-to-br"
                    gradientFrom="teal.400"
                    gradientTo="teal.600"
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    width="fit-content"
                    mx="auto"
                  >
                    <LuUsers size={{ base: "32", md: "40" }} color="white" />
                  </Box>
                  <Stack gap={{ base: "4", md: "6" }}>
                    <Heading
                      size={{ base: "xl", md: "2xl" }}
                      color="gray.900"
                      fontWeight="800"
                      lineHeight="1.2"
                    >
                      人材ソリューション
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      高度なスキルを持つ専門人材により、
                      プロジェクトの成功を加速させます。
                    </Text>
                  </Stack>
                </Stack>
              </Card.Root>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box py={{ base: "20", md: "28", lg: "36" }} bg="gray.50" id="about">
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Stack gap={{ base: "16", md: "18", lg: "20" }}>
            <Stack
              gap={{ base: "6", md: "8" }}
              maxW="4xl"
              mx="auto"
              textAlign="center"
            >
              <Text
                color="teal.600"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize={{ base: "sm", md: "md" }}
              >
                会社情報
              </Text>
              <Heading
                size={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                color="gray.900"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                Hibi Holdingsについて
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                lineHeight="1.6"
                maxW="3xl"
                mx="auto"
              >
                私たちは、戦略家、デザイナー、エンジニアからなるチームで、
                複雑なビジネス課題の解決に情熱を注いでいます。
              </Text>
            </Stack>

            <Grid
              templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
              gap={{ base: "12", md: "14", lg: "16", xl: "18" }}
              alignItems="center"
              maxW="6xl"
              mx="auto"
            >
              <Box>
                <Stack gap={{ base: "8", md: "10", lg: "12" }}>
                  <Box
                    bg="white"
                    p={{ base: "6", md: "8", lg: "10" }}
                    borderRadius="3xl"
                    shadow="lg"
                    border="2px"
                    borderColor="gray.100"
                  >
                    <Heading
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color="gray.900"
                      fontWeight="800"
                      mb={{ base: "4", md: "6" }}
                      lineHeight="1.2"
                    >
                      私たちのアプローチ
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    >
                      単なる供給業者ではなく、真のパートナーシップを重視します。
                      お客様固有の課題を深く理解し、
                      持続的なインパクトをもたらすソリューションを開発します。
                    </Text>
                  </Box>
                  <Box
                    bg="white"
                    p={{ base: "6", md: "8", lg: "10" }}
                    borderRadius="3xl"
                    shadow="lg"
                    border="2px"
                    borderColor="gray.100"
                  >
                    <Heading
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color="gray.900"
                      fontWeight="800"
                      mb={{ base: "4", md: "6" }}
                      lineHeight="1.2"
                    >
                      私たちの強み
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight="1.6"
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    >
                      10年以上のテクノロジーとビジネス変革の経験を活かし、
                      業界を問わず企業の運営改善と
                      持続的な成長を支援してきました。
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box position="relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Hibi Holdings team"
                  borderRadius={{ base: "2xl", md: "3xl" }}
                  width="100%"
                  height={{ base: "300px", md: "400px", lg: "550px" }}
                  objectFit="cover"
                  shadow="2xl"
                />
                <Box
                  position="absolute"
                  top="-6"
                  left="-6"
                  w="24"
                  h="24"
                  bg="teal.500"
                  borderRadius="full"
                  display={{ base: "none", lg: "block" }}
                />
              </Box>
            </Grid>

            <Box
              bg="white"
              borderRadius="3xl"
              p={{ base: "8", md: "12", lg: "16" }}
              shadow="xl"
              border="2px"
              borderColor="gray.100"
              maxW="6xl"
              mx="auto"
              w="full"
            >
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                gap={{ base: "8", md: "12" }}
              >
                <Box textAlign="center">
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1"
                  >
                    150+
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="600"
                    letterSpacing="wide"
                  >
                    プロジェクト実績
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1"
                  >
                    10年
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="600"
                    letterSpacing="wide"
                  >
                    業界経験
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1"
                  >
                    98%
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="600"
                    letterSpacing="wide"
                  >
                    顧客満足度
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={{ base: "20", md: "28", lg: "36" }} bg="white" id="contact">
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
            gap={{ base: "12", md: "14", lg: "16", xl: "18" }}
            alignItems="start"
            maxW="6xl"
            mx="auto"
          >
            <Stack gap={{ base: "8", md: "10" }}>
              <Stack gap={{ base: "6", md: "8" }}>
                <Text
                  color="teal.600"
                  fontWeight="600"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  お問い合わせ
                </Text>
                <Heading
                  size={{ base: "3xl", md: "5xl", lg: "6xl" }}
                  fontWeight="900"
                  color="gray.900"
                  lineHeight="1.1"
                  letterSpacing="tight"
                >
                  一緒に未来を
                  <br />
                  創りませんか
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="gray.600"
                  lineHeight="1.6"
                  maxW="2xl"
                >
                  ビジネスを次のレベルに引き上げる準備はできていますか？
                  あなたのプロジェクトについてお聞かせください。
                </Text>
              </Stack>
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                gap={{ base: "6", md: "8" }}
              >
                <Box
                  bg="gray.50"
                  p={{ base: "6", md: "8" }}
                  borderRadius="2xl"
                  border="2px"
                  borderColor="gray.100"
                >
                  <Text
                    fontWeight="700"
                    color="gray.900"
                    mb={{ base: "3", md: "4" }}
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    直接メールでご連絡
                  </Text>
                  <Link
                    href="mailto:contact@hibi-holdings.com"
                    color="teal.600"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="600"
                    wordBreak="break-all"
                    _hover={{ color: "teal.700" }}
                  >
                    contact@hibi-holdings.com
                  </Link>
                </Box>
                <Box
                  bg="gray.50"
                  p={{ base: "6", md: "8" }}
                  borderRadius="2xl"
                  border="2px"
                  borderColor="gray.100"
                >
                  <Text
                    fontWeight="700"
                    color="gray.900"
                    mb={{ base: "3", md: "4" }}
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    お電話でのお問い合わせ
                  </Text>
                  <Text
                    color="gray.700"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="600"
                  >
                    03-1234-5678
                  </Text>
                </Box>
              </Grid>
            </Stack>

            <Card.Root
              p={{ base: "8", md: "10", lg: "12" }}
              shadow="xl"
              border="2px"
              borderColor="gray.200"
              borderRadius="3xl"
              bg="white"
            >
              <Stack gap={{ base: "6", md: "8" }}>
                <Heading
                  size={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="gray.900"
                  fontWeight="800"
                  lineHeight="1.2"
                >
                  お気軽にお問い合わせください
                </Heading>
                <Grid
                  templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                  gap={{ base: "4", md: "6" }}
                >
                  <Box>
                    <Text
                      fontWeight="600"
                      mb="3"
                      color="gray.700"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      お名前
                    </Text>
                    <Input
                      placeholder="山田太郎"
                      size={{ base: "md", md: "lg" }}
                      borderRadius="xl"
                      border="2px"
                      borderColor="gray.200"
                      _focus={{ borderColor: "teal.500", shadow: "md" }}
                    />
                  </Box>

                  <Box>
                    <Text
                      fontWeight="600"
                      mb="3"
                      color="gray.700"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      メールアドレス
                    </Text>
                    <Input
                      placeholder="yamada@example.com"
                      size={{ base: "md", md: "lg" }}
                      borderRadius="xl"
                      border="2px"
                      borderColor="gray.200"
                      _focus={{ borderColor: "teal.500", shadow: "md" }}
                    />
                  </Box>
                </Grid>

                <Box>
                  <Text
                    fontWeight="600"
                    mb="3"
                    color="gray.700"
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    会社名
                  </Text>
                  <Input
                    placeholder="株式会社○○"
                    size={{ base: "md", md: "lg" }}
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.200"
                    _focus={{ borderColor: "teal.500", shadow: "md" }}
                  />
                </Box>

                <Box>
                  <Text
                    fontWeight="600"
                    mb="3"
                    color="gray.700"
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    お問い合わせ内容
                  </Text>
                  <Textarea
                    placeholder="プロジェクトの詳細やご質問をお聞かせください..."
                    minH={{ base: "120px", md: "140px" }}
                    size={{ base: "md", md: "lg" }}
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.200"
                    _focus={{ borderColor: "teal.500", shadow: "md" }}
                  />
                </Box>

                <Button
                  colorPalette="teal"
                  size={{ base: "lg", md: "xl" }}
                  fontWeight="700"
                  w="full"
                  py={{ base: "3", md: "4" }}
                  fontSize={{ base: "md", md: "lg" }}
                  borderRadius="xl"
                  shadow="md"
                  _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                  transition="all 0.3s ease"
                >
                  送信する
                </Button>
              </Stack>
            </Card.Root>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={{ base: "16", md: "20", lg: "24" }}>
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: "8", md: "12", lg: "16" }}
            maxW="6xl"
            mx="auto"
          >
            <Stack gap={{ base: "5", md: "6" }}>
              <Heading
                size={{ base: "lg", md: "xl", lg: "2xl" }}
                color="white"
                fontWeight="900"
                letterSpacing="tight"
              >
                Hibi Holdings
              </Heading>
              <Text
                color="gray.300"
                lineHeight="1.6"
                fontSize={{ base: "md", md: "lg" }}
                maxW="sm"
              >
                テクノロジーと戦略で、 企業の未来を創造します。
              </Text>
            </Stack>

            <Stack gap={{ base: "5", md: "6" }}>
              <Heading
                size={{ base: "md", md: "lg" }}
                color="white"
                fontWeight="700"
              >
                サービス
              </Heading>
              <Stack gap={{ base: "3", md: "4" }}>
                <Link
                  href="#services"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  ITコンサルティング
                </Link>
                <Link
                  href="#services"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  DX推進支援
                </Link>
                <Link
                  href="#services"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  人材ソリューション
                </Link>
              </Stack>
            </Stack>

            <Stack gap={{ base: "5", md: "6" }}>
              <Heading
                size={{ base: "md", md: "lg" }}
                color="white"
                fontWeight="700"
              >
                会社情報
              </Heading>
              <Stack gap={{ base: "3", md: "4" }}>
                <Link
                  href="#about"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  会社概要
                </Link>
                <Link
                  href="#contact"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "teal.400" }}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="500"
                  transition="color 0.2s ease"
                >
                  プライバシーポリシー
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Box
            borderTop="1px"
            borderColor="gray.700"
            mt={{ base: "12", md: "16", lg: "20" }}
            pt={{ base: "8", md: "10", lg: "12" }}
          >
            <Flex
              justify="space-between"
              align="center"
              wrap="wrap"
              gap={{ base: "4", md: "6" }}
              direction={{ base: "column", md: "row" }}
              textAlign={{ base: "center", md: "left" }}
              maxW="6xl"
              mx="auto"
            >
              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="500"
              >
                © 2024 Hibi Holdings. All rights reserved.
              </Text>
              <Text
                color="gray.400"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="500"
                wordBreak="break-all"
              >
                東京都渋谷区 | contact@hibi-holdings.com
              </Text>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
