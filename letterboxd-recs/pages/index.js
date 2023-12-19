import { FormControl, FormErrorMessage, Image, Input, Text, Textarea, Box, Center, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {

  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <Box bg="black" minH="100vh">
        <Center>
          <Image src="/logo.png" alt="Letterboxd Recs Logo" w="500px" l="240" />
        </Center>
        <Center>
          <Box maxW={{ base: "80%", xl: "1000px" }} textAlign="center">
            <Text mt="40px" color="white" fontSize="1em" fontFamily="Courier New, monospace" fontWeight="thin">
              Welcome film enthusiast! Letterboxd is a project for users to discover and review new films. However, the platform doesn't use provide personal recommendations and only shows movies based on popularity. This tool aims to fix that and ease your movie search project by providing user-based recommendations and a personal movie finding chatbot called "Friday". You can additionally add the movies directly to your watchlist on LetterBoxd. Enjoy and leave feedback!
            </Text>
            <FormControl mt="10">
              <Input placeholder="enter in your Letterboxd username" value={user} onChange={handleUserChange} textAlign="center" mt="50px" color="white" fontSize="1em" fontFamily="Courier New, monospace" fontWeight="thin" width="450px" />
            </FormControl>
            <Box mt="10">
              <Button mr="5" colorScheme="green" variant="outline" width="200px">Get Recommendations</Button>
              <Button colorScheme="green" width="200px">Friday Chatbot</Button>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}