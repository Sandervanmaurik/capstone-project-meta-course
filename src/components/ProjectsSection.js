import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI } from "../utils/utils";
import FullScreenSection from "./FullScreenSection";
import BookTableForm from "./bookTableForm";

const updateTimes = (state, selectedDate) => {
  console.log("updateTimes called with date:", selectedDate);
  return fetchAPI(selectedDate)
};

const initializeTimes = () => {
  return fetchAPI(new Date())
};

const BookingSection = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(event.target.value);
    dispatch(selectedDate);
  };

  useEffect(() => {
    console.log("Available times updated:", availableTimes);
  }, [availableTimes])

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="book-section">
        Book a table
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        <BookTableForm availableTimes={availableTimes} date={date} onDateChange={handleDateChange} />
      </Box>
    </FullScreenSection>
  );
};

export default BookingSection;
