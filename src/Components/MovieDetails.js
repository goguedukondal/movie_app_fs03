import React from "react";
import {
  Box,
  Center,
 
  Image,
  Text,
  Heading,
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";
import { useData } from "./Context";
function MovieDetails() {
  const { movies } = useData();
 if(!movies){
  return  <Heading>No Movies were searched</Heading>
 }
  return (
    <Center>
      <Box>
        
      {movies&&movies.map((m) => {
            return (
              <Card
                align="center"
                key={m.imdbID}
                w="40vw"
                mt={30}
                p="10"
                boxShadow={"dark-lg"}
                rounded="lg"
              >
                <CardHeader>
                  <Image src={m.Poster} alt="poster" />
                </CardHeader>
                <CardBody>
                  <Heading size="md">{m.Title}</Heading>
                  <Text>Released Year : {m.Year}</Text>
                  <Text>Type : {m.Type}</Text>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="teal">Watch here</Button>
                </CardFooter>
              </Card>
            );
          })
        // ) : (
        //   <Heading>No Movies were searched</Heading>
        // )
      }
      </Box>
    </Center>
  );
}

export default MovieDetails;
