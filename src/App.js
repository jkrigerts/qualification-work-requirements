import { Container, Anchor, Card, Title, Text, Group } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import {
  Book2,
  ArrowDownCircle,
  ListDetails,
  BuildingEstate,
  Presentation,
} from "tabler-icons-react";
import Exam from "./Exam";

export default function App() {
  return (
    <Container mt="3rem" mb="3rem">
      <Title align="center">Programmēšanas tehniķis. Noslēgums</Title>
      <Text align="center" mb="3rem">
        Programmēšanas tehniķa eksāmens jau <strong>2025. gada maijā</strong>!
      </Text>
      <Anchor href="IP20_kv_eks_progr_2024.pdf" target="_blank">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <ArrowDownCircle size={41} />
            <Text weight={500}>Eksāmena programma</Text>
          </Group>
        </Card>
      </Anchor>
      <Anchor href="tests">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <ListDetails size={40} />
            <Text weight={500}>Par testa daļu eksāmenā</Text>
          </Group>
        </Card>
      </Anchor>
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
            <BuildingEstate size={43} />
            <Text weight={500}>Par ārējās prakses aizstāvēšanu</Text>
          </Group>
        </Card>
      </Anchor>

      <Anchor href="kvd-prezentacija">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <Presentation size={43} />
            <Text weight={500}>Par kvalifikācijas darba prezentāciju</Text>
          </Group>
        </Card>
      </Anchor>

      {/* <Anchor href="prakses-aizstavesana">
        <Card shadow="sm" padding="lg" radius="md" withBorder mb="3rem">
          <Group>
            <Presentation size={43} />
            <Text weight={500}>Par ārējās prakses aizstāvēšanu</Text>
          </Group>
        </Card>
      </Anchor> */}
      <Notifications autoClose={5000} />
      <Exam></Exam>
    </Container>
  );
}
