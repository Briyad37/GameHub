import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <>
      <Badge color={color} fontSize="14px" borderRadius={"4px"} marginX={2}>
        {score}
      </Badge>
    </>
  );
}
