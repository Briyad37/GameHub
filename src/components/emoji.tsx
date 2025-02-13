import bulleyes from "../assets/bull-eye.jpeg";
import thumbsup from "../assets/thumbs.jpeg";
import meh from "../assets/meh.jpeg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  //we tell ts that the emojimap is an object going to have multiple keys which are numbers and te values are going to be props fro image element
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    3: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    3: { src: bulleyes, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />
    </>
  );
}
