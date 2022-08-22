import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { PModal } from "./PModal";
export function Products({
              brand,
              image,
              price,
              title,
              id
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setIsModalOpen(true);
    setSelectedBox(item);
    console.log(item);
  };
  return (
    <>
      
      <Box>
        <Box
          onClick={() =>
            handleClick({
              brand,
              image,
              price,
              title,
              id
            })
          }
        >
          <Box>{brand}</Box>
          <Box>{title}</Box>
          <Box>
          <Image src = {image}/>
          </Box>
          <Box> {price}</Box>
        </Box>
        <PModal
          data={selectedBox}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Box>
    </>
  );
}
