import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar
        name="Pete"
        src={"https://i.pravatar.cc/150?img=7"}
        size="2xl"
        mb={4}
      />
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="whiteAlpha.800">
        {bio1}
      </Heading>
      <Heading as="h3" size="md" color="whiteAlpha.600">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
