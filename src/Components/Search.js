import React from "react";
import { Box, Button, Input, Center, Flex, Spacer,Heading } from "@chakra-ui/react";
import MovieDetails from "./MovieDetails";
import { useEffect, useState, useRef } from "react";
import { useData } from "./Context";
import axios from "axios";
function Search() {
  const { addMovie } = useData();
  const [query, setQuery] = useState('');

 
  const searchin = useRef(null);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=f2af41e4`)
      .then((res) => {
        addMovie(res.data.Search);
      });
  }, [query,addMovie]);
  const Searchfn = () => {
    setQuery(searchin.current.value);
  };

  return (
    <Center>
      <Flex flexDirection="column">
       <Heading mt={10} style={{textShadow:"3px 3px 2px gray"}}>MOVIE SEARCH APPLICATION</Heading>
        <Box w="75vw" mt={30} p="10" boxShadow={"dark-lg"} rounded="lg" >
          <Flex>
            <Input w="70%" placeholder="Search for movie..." ref={searchin} />
            <Spacer />
            <Button w="25%" colorScheme="teal" onClick={Searchfn}>
              Search
            </Button>
          </Flex>
        </Box>
        <Box mt={10} p="10" boxShadow={"dark-lg"} rounded="lg" mb={10}>
          <MovieDetails />
        </Box>
      </Flex>
    </Center>
  );
}

export default Search;
