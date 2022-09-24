import { Box, Stack, Image, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" _hover={{ cursor: 'pointer', opacity: 0.8 }} onClick={onClick}>
      <Stack textAlign="center">
        <Image m="auto" p={4} boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  );
});
