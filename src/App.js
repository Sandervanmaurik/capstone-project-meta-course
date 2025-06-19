import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import BookingSection from "./components/ProjectsSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <BookingSection />
          <Footer />
          <Alert />
        </main>
        
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
