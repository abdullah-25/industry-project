import {
  Card,
  CardHeader,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import "./DisplayCard.scss";
export default function DisplayCard() {
  return (
    <div className="card">
      <Card align="center" pt={4}>
        <CardHeader>
          <Heading size="md"> Concern # 1</Heading>
        </CardHeader>
        <CardBody>
          <Text>Reserach Goes here.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Learn More</Button>
        </CardFooter>
      </Card>
      <Card align="center" pt={10}>
        <CardHeader>
          <Heading size="md"> Concern # 1</Heading>
        </CardHeader>
        <CardBody>
          <Text>Reserach Goes here.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
