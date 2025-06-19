import {
   Box,
   Button,
   FormControl,
   FormLabel,
   Input,
   Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { useEffect, useState } from "react";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";

const BookTableForm = ({ availableTimes = [], onDateChange, date }) => {
   const [guests, setGuests] = useState()
   const [occasion, setOccasion] = useState("Birthday");
   const [time, setTime] = useState();
   const { response, submit, isLoading } = useSubmit();
   const { onOpen } = useAlertContext();

   const { handleSubmit, resetForm } = useFormik({
      initialValues: {
         date: "",
         time: "",
         guestAmount: 0,
         occasion: "",
      },
      onSubmit: (values) => {
         console.log("submitting")
         submit("/", values)
      },
   });

   useEffect(() => {
      if (!response) return;
      const isSuccess = response.type === "success";

      onOpen(
         response.type,
         isSuccess ? "Your booking was succesfull" : "There was an error booking your table. Please try again later."
      );
      if (isSuccess) {
         resetForm();
      }
   }, [response, resetForm])


   return (
      <Box as="form" display="grid" gap="20px" onSubmit={handleSubmit}>
         <FormControl id="date">
            <FormLabel>Choose date</FormLabel>
            <Input
               type="date"
               value={date || ""}
               onChange={onDateChange}
            />
         </FormControl>
         <FormControl id="time">
            <FormLabel>Choose time</FormLabel>
            <Select
               value={time}
               onChange={(e) => setTime(e.target.value)}
            >
               {availableTimes?.map((time) => (
                  <option key={time} value={time}>
                     {time}
                  </option>
               ))}
            </Select>
         </FormControl>
         <FormControl id="guests">
            <FormLabel>Number of guests</FormLabel>
            <Input
               type="number"
               placeholder="1"
               min="1"
               max="10"
               value={guests || 1}
               onChange={(e) => setGuests(e.target.value)}
            />
         </FormControl>
         <FormControl id="occasion">
            <FormLabel>Occasion</FormLabel>
            <Select
               value={occasion}
               onChange={(e) => setOccasion(e.target.value)}
            >
               <option value="Birthday">Birthday</option>
               <option value="Anniversary">Anniversary</option>
            </Select>
         </FormControl>
         <Button type="submit" colorScheme="blue" disabled={isLoading}>
            Book table
         </Button>
      </Box>
   )
}

export default BookTableForm;