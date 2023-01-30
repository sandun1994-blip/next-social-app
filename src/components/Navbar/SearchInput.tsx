import { PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import React from 'react';
type SearchinputProps = {
    
};

const Searchinput:React.FC<SearchinputProps> = () => {
    
    return (
        <Flex
        flexGrow={1}
        mr={2}
        ml={2}
        alignItems="center"
      >
          <Input
            placeholder="Search Reddit"
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            height="34px"
            bg="gray.50"
            width={'100%'}
          />
       
      </Flex>
    )
}
export default Searchinput;