import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface Continent {
  id: number;
  ref: string;
  name: string;
  imageUrl: string;
  bodyContent: string;
  countriesCount: number;
  languagesCount: number;
  citiesCount: number;
  cities: Array<{
    name: string;
    country: string;
    imageUrl: string;
  }>;
}

interface ContinentPageProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentPageProps) {
  return (
    <Flex direction="column">
      <Flex
        width="100%"
        height={500}
        align="flex-start"
        justify="flex-end"
        direction="column"
        bgImage={continent.imageUrl}
        bgPosition="100% 50%"
        bgRepeat="no-repeat"
        bgSize="cover"
        pl={140}
        pb={59}
      >
        <Heading
          fontSize={['3xl', '4xl', '5xl']}
          color="gray.50"
          fontWeight="bold"
        >
          {continent.name}
        </Heading>
      </Flex>

      <Flex paddingX="140px" paddingY="80px" textAlign="justify">
        <Text fontSize="2xl" pr={70}>
          {continent.bodyContent}
        </Text>

        <Flex minWidth={500} justify="space-between" align="center">
          <Box>
            <Text fontSize="3xl" fontWeight="600" color="yellow.100">
              {continent.countriesCount}
            </Text>
            <Text fontSize="2xl" fontWeight="600" color="gray.600">
              países
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="600" color="yellow.100">
              {continent.languagesCount}
            </Text>
            <Text fontSize="2xl" fontWeight="600" color="gray.600">
              línguas
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="600" color="yellow.100">
              {continent.citiesCount}
            </Text>
            <Text fontSize="2xl" fontWeight="600" color="gray.600">
              cidades +100
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const continentRef = query.name;

  const [continentData] = await fetch(
    `http://localhost:3333/continents?ref=${continentRef}`
  ).then((res) => res.json());

  if (!continentData) {
    return {
      props: {
        continent: null,
      },
    };
  }

  return {
    props: {
      continent: continentData,
    },
  };
};
