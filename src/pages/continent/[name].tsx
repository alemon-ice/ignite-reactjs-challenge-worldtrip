import { GetServerSideProps } from 'next';

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
  return <h1>{continent.name}</h1>;
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
