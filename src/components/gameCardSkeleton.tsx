import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameSkeleton() {
  return (
    <>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
}
