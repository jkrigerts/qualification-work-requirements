import { Helmet } from "react-helmet";

import {
  Container,
  Title,
  Text,
  Anchor,
  List,
  ThemeIcon,
  Timeline,
} from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import {
  IconPaint,
  Icon123,
  IconExternalLink,
  IconSquareRoundedNumber1,
  IconSquareRoundedNumber2,
  IconSquareRoundedNumber3,
  IconSquareRoundedNumber4,
  IconSquareRoundedNumber5,
  IconSquareRoundedNumber6,
  IconSquareRoundedNumber7,
  IconSquareRoundedNumber8,
  IconSquareRoundedNumber9,
} from "@tabler/icons-react";
import { Clock } from "tabler-icons-react";

function Practice() {
  return (
    <>
      <Helmet>
        <title>Ārējās prakses prezentācija</title>
        <meta
          name="description"
          content="Kas iekļaujams ārējās prakses prezentācijā?"
        />
      </Helmet>
      <Container mt="3rem" mb="3rem">
        <Title align="center" mb="1rem">
          Ārējās prakses prezentācijas saturs
        </Title>
        <List
          spacing="md"
          center
          icon={
            <ThemeIcon color="teal" size={34} radius="xl">
              <IconPaint size="1.5rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Prezentācijas noformējumam jābūt atbilstoši sagatavei:&nbsp;
            <Anchor
              target="_blank"
              href="https://1drv.ms/p/s!Akkmflzgkd9WgcYf-Bz3BrySnfUNrw?e=jQMnGa"
            >
              KVP-vārds_uzvārds-IP19.pptx
            </Anchor>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={34} radius="xl">
                <Icon123 size="1.5rem" />
              </ThemeIcon>
            }
          >
            Obligāta ir slaidu numerācija. Tikai titulslaidu nenumurē.
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="purple" size={34} radius="xl">
                <IconExternalLink size="1.5rem" />
              </ThemeIcon>
            }
          >
            Prezentācija jāiesniedz <em>skolo.lv</em> kursa{" "}
            <em>Programmēšanas tehniķa prakse</em>&nbsp; uzdevumā{" "}
            <Anchor
              href="https://skolo.lv/mod/assign/view.php?id=73368542"
              target="_blank"
            >
              Kvalifikācijas prakses prezentācija.
            </Anchor>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={34} radius="xl">
                <Clock size="1.5rem" />
              </ThemeIcon>
            }
          >
            Prezentācijas ilgums ir 7 min - 10 min.
          </List.Item>
        </List>

        <Timeline active={14} bulletSize={38} lineWidth={3} mt="3rem" mb="3rem">
          <Timeline.Item
            bullet={<IconSquareRoundedNumber1 size={26} />}
            title="Titulslaids"
            color="violet"
          >
            <Text color="" size="sm">
              Titulslaida paraugs jau ir dots sagatavē. Ja biji 2 uzņēmumos,
              piemini abus.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber2 size={26} />}
            title="Mērķis"
            color="violet"
          >
            <Text color="" size="sm">
              Jā, visiem tas būs vienāds, bet mērķim ir jābūt atbilstoši &nbsp;
              <Anchor
                href="IP19_programmesanas_tehnika_prakse_uznemuma-2022-2023.pdf"
                target="_blank"
                size="sm"
              >
                moduļa programmai
              </Anchor>
              .
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber3 size={26} />}
            title="Par uzņēmumu"
            color="violet"
          >
            <Text color="" size="sm">
              Ar ko nodarbojas uzņēmums, kurā biji praksē? Cik darbinieku tajā
              ir? Ko vēl interesantu vari pastāstīt? Ja biji 2 uzņēmumos,
              piemini abus.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber4 size={26} />}
            title="Prakses norise"
            color="violet"
          >
            <Text color="" size="sm">
              Kāda bija Tava loma uzņēmumā? Darbs bija klātienē vai attālināti?
              Cik stingri noteikts bija darba laiks?
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber5 size={26} />}
            title="Sadarbība"
            color="violet"
          >
            <Text color="" size="sm">
              Apraksti, lūdzu, cik veiksmīga bija sadarbība ar prakses vadītāju
              un kolēģiem. Ar kādiem izaicinājumiem un prieka brīžiem saskāries
              tieši komunikācijā?
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber6 size={26} />}
            title="Veiktie uzdevumi"
            color="violet"
          >
            <Text color="" size="sm">
              Apraksti, kādus darbus veici. Ja iespējams, papildini ar vizuāliem
              materiāliem, kas apliecina uzdevumu izpildi.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber7 size={26} />}
            title="Grūtības un risinājumi"
            color="violet"
          >
            <Text color="" size="sm">
              Vai bija kādas grūtības, ar kurām saskāries prakses laikā? Kā tās
              atirisnāji?
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber8 size={26} />}
            title="Ieguvumi"
            color="violet"
          >
            <Text color="" size="sm">
              Kādas jaunas zināšanas ieguvi ārējā praksē?
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconSquareRoundedNumber9 size={26} />}
            title="Secinājumi"
            color="violet"
          >
            <Text color="" size="sm">
              Vienam no secinājumiem obligāti jāatsaucas uz izvirzīto mērķi no
              &nbsp;
              <Anchor
                href="IP19_programmesanas_tehnika_prakse_uznemuma-2022-2023.pdf"
                target="_blank"
                size="sm"
              >
                moduļa programmas
              </Anchor>
              . Vai mērķis tika sasniegts?
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconConfetti size={26} />}
            title="Paldies"
            color="violet"
          >
            <Text color="" size="sm">
              Neaizmirsti pateikties par klausītāju uzmanību!
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  );
}

export default Practice;
