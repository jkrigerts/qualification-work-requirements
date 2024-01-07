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
        <Title align="center" mb="4rem">
          Kvalifikācijas eksamena testa daļa
        </Title>
        <List
          spacing="xl"
          center
          icon={
            <ThemeIcon color="teal" size={34} radius="xl">
              <DiscountCheck size="1.5rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Eksāmena testā var iegūt 100 punktus (no kopā 300 punktiem) - 70
            punktus par 70 vienas izvēles jautājumiem un 30 punktus par 10
            paaugstinātas grūtības uzdevumiem.
          </List.Item>
          <List.Item>
            Kvalifikācijas prakses starpaizstāvēšanā obligāti jāvar izpildīt 30
            jautājumu tests ar 3 vai mazāk kļūdām! Šis tests saturēs iepriekšējo
            gadu eksāmena testa daļas vienas izvēles jautājumus.
          </List.Item>
          <List.Item>
            Vari <em>skolo.lv</em> pildīt{" "}
            <Anchor
              target="_blank"
              href="https://skolo.lv/mod/quiz/view.php?id=81122648"
            >
              30 nejauši jautājumi
            </Anchor>
            .
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
