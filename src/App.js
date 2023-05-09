import { Container, Anchor, Card, Title, Text, Group } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Book2, Presentation } from "tabler-icons-react";
import Exam from "./Exam";

export default function App() {
  return (
    <Container mt="3rem" mb="3rem">
      <Title align="center">Programmēšanas tehniķis. Noslēgums</Title>
      <Text align="center" mb="3rem">
        Vieta, kur atrast visu, kā sekmīgi tikt pie programmēšanas tehniķa
        profesijas.
      </Text>
      <Anchor href="dokumentacija">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <Book2 size={43} />
            <Text weight={500}>Par kvalifikācijas darba dokumentāciju</Text>
          </Group>
        </Card>
      </Anchor>

      <Anchor href="prakses-aizstavesana">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <Presentation size={43} />
            <Text weight={500}>Par ārējās prakses aizstāvēšanu</Text>
          </Group>
        </Card>
      </Anchor>
      <Notifications autoClose={5000} />
      <Exam></Exam>
    </Container>
  );
}
