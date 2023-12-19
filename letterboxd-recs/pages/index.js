import { Image, Text, Box, Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box bg="black" minH="100vh"> {/* Set background color to black */}
        <Center>
          <Image src="/logo.png" alt="Letterboxd Recs Logo" w="500px" l="240" />
        </Center>
        <Center>
          <Box maxW={{ base: "80%", xl: "1000px" }} textAlign="center">
            <Text mt="40px" color="white" fontSize="1em" fontFamily="Courier New, monospace" fontWeight="thin">
              Welcome fellow movie enjoyers! As you know, LetterBoxd is a social media platform for users to share their reviews for movies they've watched and discover new films. However, the platform currently recommends movies based on popularity rather than personalization. This is where this project comes in! Enter your LetterBoxd username, and we will provide you with a list of personalized recommendations that you can then directly add to your Letterboxd watchlist. Additionally, the chatbot "Friday" is available to assist you in the movie searching process. Enjoy!
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
