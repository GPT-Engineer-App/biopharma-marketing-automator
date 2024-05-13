import { Box, Button, Container, Heading, Input, Stack, Text, Textarea, VStack, Image, useToast } from "@chakra-ui/react";
import { FaSearch, FaRegClipboard, FaLanguage } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Initiated.",
      description: "Searching across multiple data sources...",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleGenerateContent = () => {
    toast({
      title: "Content Generation.",
      description: "Analyzing data and generating marketing content...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Biopharma Marketing Content Generator
        </Heading>
        <Text fontSize="lg">Automate the creation of marketing and advertising content for the biopharma industry.</Text>
        <Image src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaW9waGFybWElMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzE1NTY1OTc0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Biopharma Marketing" />

        <Box as="form" w="full">
          <Stack spacing={4}>
            <Input placeholder="Enter search keywords..." size="lg" />
            <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
              Search Data Sources
            </Button>
          </Stack>
        </Box>

        <Box as="form" w="full">
          <Stack spacing={4}>
            <Textarea placeholder="Enter raw data here..." size="lg" />
            <Button leftIcon={<FaRegClipboard />} colorScheme="teal" onClick={handleGenerateContent}>
              Generate Marketing Content
            </Button>
          </Stack>
        </Box>

        <Box as="form" w="full">
          <Stack spacing={4} direction="row" align="center">
            <Input placeholder="Enter content to translate..." size="lg" />
            <Button leftIcon={<FaLanguage />} colorScheme="purple">
              Translate Content
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
