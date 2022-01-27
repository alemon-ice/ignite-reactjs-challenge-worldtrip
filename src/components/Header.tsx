import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      height="20"
      width="100%"
      marginX="auto"
      justify="center"
      align="center"
    >
      <Image src="/images/Logo.png" alt="Logo worldtrip" />
    </Flex>
  );
}
