import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    //here we are mimicking the same structure as GameCard
    <Card width={"400px"} borderRadius={10} overflow={"hidden"}>
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
}
