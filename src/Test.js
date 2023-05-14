import { Container, Title, List, ThemeIcon, Anchor } from "@mantine/core";
import { DiscountCheck } from "tabler-icons-react";

const Test = () => {
  return (
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
          Vari pildīt atkārtoti un redzēt atbildes tam testam, ko jau pildīji 7.
          decembrī:&nbsp;
          <Anchor
            target="_blank"
            href="https://skolo.lv/mod/quiz/view.php?id=64979579"
          >
            saite uz skolo.lv
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor
            target="_blank"
            href="https://skolo.lv/mod/pdfannotator/view.php?id=66116216"
          >
            skolo.lv ir pieejams vēl viens tests
          </Anchor>
          ,&nbsp; bet tikai kā PDF un bez atbildēm.
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
  );
};

export default Test;
