import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export default function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize={20} paddingX={3} borderRadius={4}>
        {score}
      </Badge>
    </>
  );
}
