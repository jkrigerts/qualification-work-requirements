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
import { IconConfetti, IconList } from "@tabler/icons-react";
import { IconPaint, Icon123, IconExternalLink } from "@tabler/icons-react";
import { Clock } from "tabler-icons-react";

function Presentation() {
  return (
    <>
      <Helmet>
        <title>Kvalifikācijas darba prezentācijas saturs</title>
        <meta
          name="description"
          content="Kas iekļaujams ārējās prakses prezentācijā?"
        />
      </Helmet>
      <Container mt="3rem" mb="3rem">
        <Title align="center" mb="1rem">
          Kvalifikācijas darba prezentācijas saturs
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
            Prezentācijas noformējumu vari veidot pēc savām vēlmēm un ieskatiem.
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
              href="https://skolo.lv/mod/assign/view.php?id=83492029"
              target="_blank"
            >
              Kvalifikācijas darba prezentācija
            </Anchor>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={34} radius="xl">
                <Clock size="1.5rem" />
              </ThemeIcon>
            }
          >
            Prezentācijas ilgums ir <strong>10 minūtes</strong>.
          </List.Item>
        </List>

        <Timeline active={14} bulletSize={38} lineWidth={3} mt="3rem" mb="3rem">
          <Timeline.Item bullet="1" title="Titulslaids" color="violet">
            <Text color="" size="sm">
              Titulslaida informatīvais (bet ne dizaina) paraugs ir pieejams{" "}
              <Anchor href="LRC-Presentation.pptx">te</Anchor>.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconList size={26} />}
            title="Satura rādītājs"
            color="violet"
          >
            <Text color="" size="sm">
              Prezentācijas satura rādītājs - ko uzzināsim šodien?
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet="2"
            title="Aktualitāte / problēma"
            color="violet"
          >
            <Text color="" size="sm">
              Tāds kā dokumentācijas ievada kopsavilkums.
            </Text>
          </Timeline.Item>
          <Timeline.Item bullet="3" title="Mērķis" color="violet">
            <Text color="" size="sm">
              Nokopēts no dokumentācijas ievada.
            </Text>
          </Timeline.Item>
          <Timeline.Item bullet="4" title="Uzdevumi" color="violet">
            <Text color="" size="sm">
              Nokopēti no dokumentācijas.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="5"
            title="Literatūras apskats un variantu salīdzinājums"
            color="violet"
          >
            <Text color="" size="sm">
              Atkal jau saīsināts kopsavilkums no dokumentācijas, tā arī
              turpmākajos slaidos.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="6"
            title="Prasību specifikācija"
            color="violet"
          >
            <Text color="" size="sm">
              Unikālās prasības var minēt, kas atšķir šo darbu no citiem un bija
              izaicinājums.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="7"
            title="Mērķa sasniegšanas līdzekļu izvēle un pamatojums"
            color="violet"
          >
            <Text color="" size="sm">
              Jāpaspīd ar visadvancētākajām tehnoloģijām, kas izmantotas
              projektā 🙂
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet="8"
            title="Sistēmas struktūras un datu modelis"
            color="violet"
          >
            <Text color="" size="sm">
              Viena skaista diagramma. Ja es būtu Tavā vietā, es netaisītu vnk
              ekrānuzņēmumu no dokumentācijas, bet gan pacenstos, lai diagrammas
              izskatās kā radītas tieši Tavai prezentācijai (sakrīt fona krāsa,
              nav pikseļains attēls, ir pārskatāms).
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="9"
            title="Funkcionālais un dinamiskais sistēmas modelis"
            color="violet"
          >
            <Text color="" size="sm">
              Otra skaista diagramma.
            </Text>
          </Timeline.Item>
          <Timeline.Item bullet="10" title="Testēšana" color="violet">
            <Text color="" size="sm">
              Automātiskās testēšanas apraksts un piemērs.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="11"
            title="Lietotāja ceļvedis - demonstrācija"
            color="violet"
          >
            <Text color="" size="sm">
              Prezentācijā ir video, kā darbojies projektā. Tas ir vismaz 1 min
              ilgs un atklāj visu izcilo Tavā darbā. Ja esi{" "}
              <em>built different</em>, var arī doties pašā projektā un
              demonstrēt prezentācijas laikā.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="11"
            title="Secinājumi un priekšlikumi"
            color="violet"
          >
            <Text color="" size="sm">
              Te noteikti nevajag visus secinājumus. Tikai to, ka mērķis
              sasniegts un vēl kādu interesantāko secinājumu un rekomendāciju.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet="12"
            title="Izmantotā literatūra"
            color="violet"
          >
            <Text color="" size="sm">
              Te parādās tikai tie literatūras avoti, kas izmantoti
              prezentācijas tapšanā, turklāt ne visi. Tikai būtiskākie un
              labākie.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconConfetti size={26} />}
            title="Paldies par uzmanību!"
            color="violet"
          >
            <Text color="" size="sm">
              Un gatavojas atbildēt uz jautājumiem.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  );
}

export default Presentation;
