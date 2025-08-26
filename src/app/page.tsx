import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Table,
  Text,
  Textarea,
} from "@chakra-ui/react";
// Icons are imported but not used since we switched to images

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
                  lineHeight={{ base: "1.1", md: "1.0" }}
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
                  lineHeight={{ base: "1.7", md: "1.6" }}
                  fontWeight="400"
                  maxW={{ md: "2xl" }}
                >
                  最新のテクノロジーと戦略的なコンサルティングで、
                  お客様の事業成長をサポートします。
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format"
                alt="Digital transformation and technology innovation"
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
                lineHeight={{ base: "1.2", md: "1.1" }}
                letterSpacing="tight"
              >
                私たちのサービス
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                lineHeight={{ base: "1.7", md: "1.6" }}
                maxW="3xl"
                mx="auto"
              >
                企画から実装まで、ワンストップでお客様の課題を解決します。
              </Text>
            </Stack>

            <Grid
              templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
              gap={{ base: "10", md: "12", lg: "16" }}
              maxW="6xl"
              mx="auto"
            >
              <Card.Root
                p="0"
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap="0">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=250&fit=crop&auto=format"
                    alt="IT consulting and technology strategy"
                    width="100%"
                    height={{ base: "200px", md: "220px" }}
                    objectFit="cover"
                  />
                  <Box p={{ base: "6", md: "8" }} textAlign="center">
                    <Stack gap={{ base: "4", md: "6" }}>
                      <Heading
                        size={{ base: "xl", md: "2xl" }}
                        color="gray.900"
                        fontWeight="800"
                        lineHeight={{ base: "1.3", md: "1.2" }}
                      >
                        ITコンサルティング
                      </Heading>
                      <Text
                        color="gray.600"
                        lineHeight={{ base: "1.7", md: "1.6" }}
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        システム導入から運用改善まで、
                        御社のIT戦略をトータルでサポートします。
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Card.Root>

              <Card.Root
                p="0"
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap="0">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=250&fit=crop&auto=format"
                    alt="Digital transformation and business innovation"
                    width="100%"
                    height={{ base: "200px", md: "220px" }}
                    objectFit="cover"
                  />
                  <Box p={{ base: "6", md: "8" }} textAlign="center">
                    <Stack gap={{ base: "4", md: "6" }}>
                      <Heading
                        size={{ base: "xl", md: "2xl" }}
                        color="gray.900"
                        fontWeight="800"
                        lineHeight={{ base: "1.3", md: "1.2" }}
                      >
                        DX推進支援
                      </Heading>
                      <Text
                        color="gray.600"
                        lineHeight={{ base: "1.7", md: "1.6" }}
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        デジタル化の企画から実行まで、
                        事業競争力の向上をお手伝いします。
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Card.Root>

              <Card.Root
                p="0"
                shadow="lg"
                bg="white"
                border="2px"
                borderColor="gray.100"
                borderRadius="3xl"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Stack gap="0">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=250&fit=crop&auto=format"
                    alt="Professional team collaboration and talent solutions"
                    width="100%"
                    height={{ base: "200px", md: "220px" }}
                    objectFit="cover"
                  />
                  <Box p={{ base: "6", md: "8" }} textAlign="center">
                    <Stack gap={{ base: "4", md: "6" }}>
                      <Heading
                        size={{ base: "xl", md: "2xl" }}
                        color="gray.900"
                        fontWeight="800"
                        lineHeight={{ base: "1.3", md: "1.2" }}
                      >
                        人材ソリューション
                      </Heading>
                      <Text
                        color="gray.600"
                        lineHeight={{ base: "1.7", md: "1.6" }}
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        豊富な経験を持つエキスパートが、
                        御社のプロジェクトを成功へと導きます。
                      </Text>
                    </Stack>
                  </Box>
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
                lineHeight={{ base: "1.2", md: "1.1" }}
                letterSpacing="tight"
              >
                Hibi Holdingsについて
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                lineHeight={{ base: "1.7", md: "1.6" }}
                maxW="3xl"
                mx="auto"
              >
                私たちは戦略からテクノロジーまで幅広い専門性を持つチームです。
                お客様と共に、困難な課題にも果敢に取り組みます。
              </Text>
            </Stack>

            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: "12", md: "16", lg: "20" }}
              alignItems="stretch"
              maxW="6xl"
              mx="auto"
            >
              <Flex direction="column">
                <Stack gap={{ base: "8", md: "10", lg: "12" }} flex="1">
                  <Box
                    bg="white"
                    p={{ base: "6", md: "8", lg: "10" }}
                    borderRadius="3xl"
                    shadow="lg"
                    border="2px"
                    borderColor="gray.100"
                    flex="1"
                  >
                    <Heading
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color="gray.900"
                      fontWeight="800"
                      mb={{ base: "4", md: "6" }}
                      lineHeight={{ base: "1.3", md: "1.2" }}
                    >
                      私たちのアプローチ
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight={{ base: "1.7", md: "1.6" }}
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    >
                      お客様との信頼関係を何より大切にしています。
                      御社固有の課題をしっかりとヒアリングし、
                      長期的な視点で最適なソリューションをご提案します。
                    </Text>
                  </Box>
                  <Box
                    bg="white"
                    p={{ base: "6", md: "8", lg: "10" }}
                    borderRadius="3xl"
                    shadow="lg"
                    border="2px"
                    borderColor="gray.100"
                    flex="1"
                  >
                    <Heading
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color="gray.900"
                      fontWeight="800"
                      mb={{ base: "4", md: "6" }}
                      lineHeight={{ base: "1.3", md: "1.2" }}
                    >
                      私たちの強み
                    </Heading>
                    <Text
                      color="gray.600"
                      lineHeight={{ base: "1.7", md: "1.6" }}
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    >
                      創業以来10年にわたり、様々な業界のお客様と
                      お取引いただいております。これまでの豊富な実績と
                      ノウハウで、御社の成長をお手伝いします。
                    </Text>
                  </Box>
                </Stack>
              </Flex>
              <Box position="relative" flex="1">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Hibi Holdings team"
                  borderRadius={{ base: "2xl", md: "3xl" }}
                  width="100%"
                  height="100%"
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

            <Stack gap={{ base: "12", md: "16", lg: "20" }}>
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                gap={{ base: "8", md: "12" }}
                maxW="6xl"
                mx="auto"
              >
                <Card.Root
                  bg="white"
                  borderRadius="3xl"
                  p={{ base: "8", md: "10", lg: "12" }}
                  shadow="xl"
                  border="2px"
                  borderColor="gray.100"
                  textAlign="center"
                >
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1.1"
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
                </Card.Root>

                <Card.Root
                  bg="white"
                  borderRadius="3xl"
                  p={{ base: "8", md: "10", lg: "12" }}
                  shadow="xl"
                  border="2px"
                  borderColor="gray.100"
                  textAlign="center"
                >
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1.1"
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
                </Card.Root>

                <Card.Root
                  bg="white"
                  borderRadius="3xl"
                  p={{ base: "8", md: "10", lg: "12" }}
                  shadow="xl"
                  border="2px"
                  borderColor="gray.100"
                  textAlign="center"
                >
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="teal.600"
                    fontWeight="900"
                    mb={{ base: "3", md: "4" }}
                    lineHeight="1.1"
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
                </Card.Root>
              </Grid>

              <Grid
                templateColumns={{ base: "1fr", lg: "0.4fr 0.6fr" }}
                gap={{ base: "12", md: "16", lg: "20" }}
                alignItems="center"
              >
                <Box position="relative" flex="1">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop&auto=format"
                    alt="Modern office space"
                    borderRadius={{ base: "2xl", md: "3xl" }}
                    width="100%"
                    height={{ base: "300px", md: "400px", lg: "500px" }}
                    objectFit="cover"
                    shadow="2xl"
                  />
                  <Box
                    position="absolute"
                    bottom="-6"
                    right="-6"
                    w="16"
                    h="16"
                    bg="teal.500"
                    borderRadius="full"
                    display={{ base: "none", lg: "block" }}
                  />
                </Box>

                <Box
                  flex="2"
                  bg="white"
                  borderRadius="3xl"
                  p={{ base: "8", md: "12", lg: "16" }}
                  shadow="xl"
                  border="2px"
                  borderColor="gray.100"
                  w="full"
                >
                  <Heading
                    size={{ base: "lg", md: "xl", lg: "2xl" }}
                    color="gray.900"
                    fontWeight="800"
                    mb={{ base: "6", md: "8" }}
                    lineHeight={{ base: "1.3", md: "1.2" }}
                  >
                    会社基本情報
                  </Heading>
                  <Table.Root size={{ base: "sm", md: "md" }}>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          会社名
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          株式会社Hibi Holdings
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          設立
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          2014年4月
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          資本金
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          1,000万円
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          代表者
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          代表取締役 田中 太郎
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          所在地
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          〒150-0001
                          <br />
                          東京都渋谷区神宮前1-1-1
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          従業員数
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          45名
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell
                          fontWeight="700"
                          color="gray.700"
                          bg="gray.50"
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          borderRadius="lg"
                        >
                          事業内容
                        </Table.Cell>
                        <Table.Cell
                          p={{ base: "3", md: "4" }}
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.800"
                        >
                          ITコンサルティング
                          <br />
                          DX推進支援
                          <br />
                          人材ソリューション
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table.Root>
                </Box>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={{ base: "20", md: "28", lg: "36" }} bg="gray.50" id="contact">
        <Container
          maxW={{ base: "container.md", lg: "container.lg", xl: "1200px" }}
          px={{ base: "6", md: "10", lg: "12", xl: "16" }}
        >
          <Stack
            gap={{ base: "16", md: "20", lg: "24" }}
            maxW="5xl"
            mx="auto"
            textAlign="center"
          >
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
                lineHeight={{ base: "1.2", md: "1.1" }}
                letterSpacing="tight"
              >
                一緒に未来を
                <Box as="br" display={{ base: "block", lg: "none" }} />
                創りませんか
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.600"
                lineHeight={{ base: "1.7", md: "1.6" }}
                maxW="3xl"
                mx="auto"
              >
                御社の事業をさらに発展させませんか？
                どのようなお悩みでも、まずはお気軽にご相談ください。
              </Text>
            </Stack>

            <Card.Root
              p={{ base: "8", md: "10", lg: "12" }}
              shadow="xl"
              border="2px"
              borderColor="gray.200"
              borderRadius="3xl"
              bg="white"
              maxW="3xl"
              mx="auto"
              w="full"
            >
                <Stack gap={{ base: "6", md: "8" }}>
                  <Heading
                    size={{ base: "lg", md: "xl", lg: "2xl" }}
                    color="gray.900"
                    fontWeight="800"
                    lineHeight={{ base: "1.3", md: "1.2" }}
                    textAlign="left"
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
                        お名前 *
                      </Text>
                      <Input
                        placeholder="山田太郎"
                        size={{ base: "md", md: "lg" }}
                        borderRadius="xl"
                        border="2px"
                        borderColor="gray.200"
                        _focus={{ borderColor: "teal.500", shadow: "md" }}
                        h={{ lg: "12" }}
                      />
                    </Box>

                    <Box>
                      <Text
                        fontWeight="600"
                        mb="3"
                        color="gray.700"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        メールアドレス *
                      </Text>
                      <Input
                        placeholder="yamada@example.com"
                        size={{ base: "md", md: "lg" }}
                        borderRadius="xl"
                        border="2px"
                        borderColor="gray.200"
                        _focus={{ borderColor: "teal.500", shadow: "md" }}
                        h={{ lg: "12" }}
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
                      h={{ lg: "12" }}
                    />
                  </Box>

                  <Box>
                    <Text
                      fontWeight="600"
                      mb="3"
                      color="gray.700"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      お問い合わせ内容 *
                    </Text>
                    <Textarea
                      placeholder="プロジェクトの詳細やご質問をお聞かせください..."
                      minH={{ base: "120px", md: "140px", lg: "160px" }}
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
          </Stack>
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
                lineHeight={{ base: "1.7", md: "1.6" }}
                fontSize={{ base: "md", md: "lg" }}
                maxW="sm"
              >
                最新技術と戦略で、 お客様の未来を共に創ります。
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
