import { Flex, Image, Stack, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      backgroundImage="/images/Background.png"
      flexDirection="row"
      width="100%"
      justify="space-around"
      align="center"
    >
      <Stack direction="column" spacing="5">
        <Text as="h1" color="gray.50" fontSize="3xl" maxWidth={400}>
          6 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text color="gray.50" fontSize="1xl" maxWidth={500}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Stack>
      <Image src="/images/Airplane.png" alt="Airplane" />
    </Flex>
  );
}
