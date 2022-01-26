import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex as="main" direction="column" w="100vw">
        <Banner />

        <Flex marginY="20" justify="space-evenly">
          <Box width={158} align="center">
            <Image src="/images/Nightlife.png" alt="vida noturna" />
          </Box>
          <Box width={158} align="center">
            <Image src="/images/Beach.png" alt="praia" />
          </Box>
          <Box width={158} align="center">
            <Image src="/images/Modern.png" alt="moderno" />
          </Box>
          <Box width={158} align="center">
            <Image src="/images/Classic.png" alt="clássico" />
          </Box>
          <Box width={158} align="center">
            <Image src="/images/More.png" alt="e mais..." />
          </Box>
        </Flex>

        <Divider
          width="20"
          height="0.5"
          backgroundColor="gray.600"
          alignSelf="center"
        />

        <Text
          fontWeight="medium"
          fontSize="3xl"
          textAlign="center"
          marginY="14"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Slider />
      </Flex>
    </>
  );
}
