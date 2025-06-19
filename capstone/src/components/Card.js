import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignItems="flex-start"
      backgroundColor="white"
      p={4}
      spacing={4}
      width="100%"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading as="h3" size="md" color="gray.800">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
      <HStack spacing={2} mt={2}>
        <Text color="blue.500">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;
