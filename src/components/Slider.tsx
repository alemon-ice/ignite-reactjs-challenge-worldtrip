import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const continents = [
  {
    name: 'europe',
    image: 'images/Europe.png',
    title: 'Europa',
    subtitle: 'O continente mais antigo.',
  },
  {
    name: 'north-america',
    image: 'images/NorthAmerica.jpeg',
    title: 'América do Norte',
    subtitle: 'O continente mais antigo.',
  },
  {
    name: 'south-america',
    image: 'images/SouthAmerica.jpeg',
    title: 'América do Sul',
    subtitle: 'O continente mais antigo.',
  },
  {
    name: 'asia',
    image: 'images/Asia.jpeg',
    title: 'Ásia',
    subtitle: 'O continente mais antigo.',
  },
  {
    name: 'africa',
    image: 'images/Africa.jpeg',
    title: 'África',
    subtitle: 'O continente mais antigo.',
  },
  {
    name: 'oceania',
    image: 'images/Oceania.jpeg',
    title: 'Oceania',
    subtitle: 'O continente mais antigo.',
  },
];

export function Slider() {
  return (
    <Flex
      width="100%"
      height="450px"
      maxWidth="1240px"
      marginX="auto"
      marginBottom="10"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Flex
              width="100%"
              height="450px"
              align="center"
              justify="center"
              direction="column"
              bgImage={continent.image}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.name}`}>
                <a>
                  <Heading
                    fontSize={['3xl', '4xl', '5xl']}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {continent.subtitle}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
