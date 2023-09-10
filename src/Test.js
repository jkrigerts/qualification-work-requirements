import { Container, Title, List, ThemeIcon, Anchor } from "@mantine/core";
import { Helmet } from "react-helmet";
import { DiscountCheck } from "tabler-icons-react";

const Test = () => {
  return (
    <>
      <Helmet>
        <title>Tests kvalifikācijas eksāmenā</title>
        <meta
          name="description"
          content="Kā un kur gatavoties kvalifikācijas eksāmena testa daļai?"
        />
      </Helmet>
      <Container mt="3rem" mb="3rem">
        <Title align="center" mb="1rem">
          Kvalifikācijas eksamena testa daļa
        </Title>
        <List
          spacing="md"
          center
          icon={
            <ThemeIcon color="teal" size={34} radius="xl">
              <DiscountCheck size="1.5rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Tiek sagaidīts, ka šajā mācību gadā būs izmaiņas eksāmenā, tomēr vēl
            nav zināmas kādas. Iepriekš 1/3 daļu no eksāmena rezultāta noteica
            testa rezultāti.
          </List.Item>
          <List.Item>
            Novembra beigās Tevi sagaida izmēģinājuma eksāmens, kurā būs jāpilda
            arī tests, tāpēc ir vērts gatavoties!
          </List.Item>
          <List.Item>
            Vari pildīt 2020. gada eksāmena testu, kurš pieejams{" "}
            <Anchor
              target="_blank"
              href="https://skolo.lv/mod/quiz/view.php?id=77326001"
            >
              skolo.lv
            </Anchor>
          </List.Item>
          <List.Item>
            Un tad ir kaut kāds{" "}
            <Anchor href="Prog_tehn_kv_eks_saturs.pdf" target="_blank">
              garš dokuments
            </Anchor>{" "}
            ar daudz testa jautājumiem, tomēr bez pareizajām atbildēm.
          </List.Item>
        </List>
      </Container>
    </>
  );
};

export default Test;
