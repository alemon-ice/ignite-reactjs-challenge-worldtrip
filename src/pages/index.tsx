import { Box, Divider, Flex } from '@chakra-ui/react';
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
            <img src="/images/Nightlife.png" alt="vida noturna" />
          </Box>
          <Box width={158} align="center">
            <img src="/images/Beach.png" alt="praia" />
          </Box>
          <Box width={158} align="center">
            <img src="/images/Modern.png" alt="moderno" />
          </Box>
          <Box width={158} align="center">
            <img src="/images/Classic.png" alt="clássico" />
          </Box>
          <Box width={158} align="center">
            <img src="/images/More.png" alt="e mais..." />
          </Box>
        </Flex>

        <Divider
          marginBottom="13"
          width="20"
          height="0.5"
          backgroundColor="gray.600"
          alignSelf="center"
        />

        <Slider />
      </Flex>
    </>
  );
}
