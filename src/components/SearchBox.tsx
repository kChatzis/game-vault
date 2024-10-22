import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";

export default function SearchBox() {
  return (
    <InputGroup>
      <InputLeftElement children={<GoSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
}
