import { Image, ImageProps } from '@chakra-ui/react';
import bullSeye from '../assets/bulls-eye.webp';
import ok from '../assets/ok.webp';
import thumbsUp from '../assets/thumbs-up.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: ok, alt: 'ok', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullSeye, alt: 'great', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
