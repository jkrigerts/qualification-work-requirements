import { Container, Timeline, Text, Title, Anchor, Code } from "@mantine/core";
import { Helmet } from "react-helmet";
import {
  IconNotebook,
  IconLanguage,
  IconList,
  IconInfoSquareRounded,
  IconSquareRoundedNumber1,
  IconSquareRoundedNumber2,
  IconSquareRoundedNumber3,
  IconSquareRoundedNumber4,
  IconSquareRoundedNumber5,
  IconSquareRoundedNumber6,
  IconSquareRoundedNumber7,
  IconSquareRoundedNumber8,
  IconAward,
  IconBook,
  IconLink,
} from "@tabler/icons-react";

function Doc() {
  return (
    <>
      <Helmet>
        <title>Dokumentācija</title>
        <meta
          name="description"
          content="Kā veidot kvalifikācijas darba dokumentāciju? Kas tajā iekļaujams?"
        />
      </Helmet>
      <Container mt="3rem" mb="3rem">
        <Title order={1} align="center" mb="1rem">
          Kvalifikācijas eksāmena praktiskās daļās dokumentācijas saturs
        </Title>
        <Text size="md">
          Ir sagaidāms, ka kvalifikācijas darba vērtēšana tiks veikta pēc tiem
          pašiem vai līdzīgiem kritērijiem kā pagājušajā gadā, tāpēc{" "}
          <Anchor href="PT-eksamena-vertesana-2022.pdf" target="_blank">
            tie pieejami šeit
          </Anchor>
          .
        </Text>
        <Timeline active={14} bulletSize={38} lineWidth={3} mt="3rem" mb="3rem">
          <Timeline.Item
            bullet={<IconNotebook size={22} />}
            title="Titullapa"
            color="violet"
          >
            <Text color="" size="sm"></Text>
            <Text size="xs" mt={4} color="dimmed">
              1 lappuse
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<IconLanguage size={22} />}
            title="Anotācija"
            color="violet"
          >
            <Text color="" size="sm">
              Anotācijai jābūt divās valodās - latviešu valodā un angļu valodā.
              Anotācijā tiek atklāts: darba mērķis, darba daļas (nodaļas),
              rezultātu kopsavilkums, tehniskais raksturojums - cik ir lappuses,
              cik attēlu, cik tabulu, cik pielikumu, cik literatūras avoti
              izmantoti?
            </Text>
            <Text color="" size="sm">
              <strong>
                Anotācijā norādi saiti uz pašu projektu, kā arī saiti uz tā kodu{" "}
                <em>GitHub</em>!
              </strong>
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              2 lappuses
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconList size={22} />}
            title="Satura rādītājs"
            color="violet"
          >
            <Text color="" size="sm"></Text>
            <Text size="xs" mt={4} color="dimmed">
              1 - 2 lappuses
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconInfoSquareRounded size={26} />}
            title="Ievads"
            color="violet"
          >
            <Text color="" size="sm">
              Ievads sākas ar tēmas aktualizāciju 3 rindkopu garumā. No
              aktualizācijas izriet darba mērķis (tas pats, kurš jau minēts
              anotācijā). No mērķa izriet darba uzdevumi.
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              1 - 2 lappuses
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber1 size={26} />}
            title="Literatūras apskats un variantu salīdzinājums"
            color="violet"
          >
            <Text color="" size="sm">
              Literatūras apskats sniedz ieskatu par jomu, kurā darbs tiek
              veidots. Piemēram, ja darbā tiek veidota jauna CMS sistēma, tad
              jāapraksta, kas ir CMS, kādu problēmu CMS palīdz atrisināt.
            </Text>
            <Text color="" size="sm">
              Tam, kas tiek veidots, ir līdzinieki. Nepieciešams ir izvirzīt
              prasības un aprakstīt tās. Pēc tam jānovērtē, cik labi šīs
              prasības izpilda katrs no jau eksistējošajiem līdziniekiem. Tad
              jāsecina, kāpēc tomēr veido savu sistēmu, kāpēc nepietiek ar to,
              kas jau eksistē. Piemēram, CMS gadījumā eksistē jau{" "}
              <Text fs="italic" component="span">
                WordPress
              </Text>
              ,{" "}
              <Text fs="italic" component="span">
                Drupal
              </Text>
              ,{" "}
              <Text fs="italic" component="span">
                Joomla
              </Text>
              . Tos var salīdzināt pēc lietošanas ērtuma, ātrdarbības, maksas,
              funkcionalitātes.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber2 size={26} />}
            title="Prasību specifikācija"
            color="violet"
          >
            <Text color="" size="sm">
              Prasību specifikācijā ir divas apakšnodaļas: funkcionālās un
              nefunkcionālās prasības. Funkcionālās prasības sevī ietver arī
              ieejas un izejas datu aprakstu.
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              2 - 3 lappuses
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber3 size={26} />}
            title="Mērķa sasniegšanas līdzekļu izvēle un pamatojums"
            color="violet"
          >
            <Text color="" size="sm">
              Mērķa sasniegšanai ir nepieciešami līdzekļi, tehnoloģijas. Ir
              jāapraksta, kas un kāpēc tiks izmantots. Piemēram, HTML, CSS vai
              SCSS, ietvari (
              <Text fs="italic" component="span">
                frameworks
              </Text>
              ), programmēšanas valodas, datubāzes dzinējs u. c.
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              ≥ 2 lappuses
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber4 size={26} />}
            title="Sistēmas struktūras modelis"
            color="violet"
          >
            <Text color="" size="sm">
              Sistēmas struktūras modelis iekļauj sevī sistēmas uzbūves
              struktūru, arhitektūru - algoritma shēmu ar izvēlētās risināšanas
              metodes aprakstu, klašu diagrammu, ER modeli.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber5 size={26} />}
            title="Funkcionālais un dinamiskais sistēmas modelis"
            color="violet"
          >
            <Text color="" size="sm">
              Datu plūsmas diagrammas, stāvokļu diagramma, scenārijs.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber6 size={26} />}
            title="Datu struktūras apraksts"
            color="violet"
          >
            <Text color="" size="sm">
              Iepriekšējo gadu piemēri ir kļūdaini! Datu struktūra nav saistīta
              ar datu bāzes ER modeli. Šajā nodaļā ir jāapraksta, kādas un kāpēc
              datu struktūras ir izmantotas pašā programmā: <Code>int</Code>,{" "}
              <Code>float</Code>, <Code>string</Code>, <Code>array</Code>,{" "}
              <Code>list</Code>, <Code>linked list</Code>, <Code>tree</Code>{" "}
              u.c.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber7 size={26} />}
            title="Testēšana"
            color="violet"
          >
            <Text color="" size="sm">
              Katrai iepriekš izvirzītajai prasībai nodaļā{" "}
              <Text fs="italic" component="span">
                Mērķa sasniegšanas līdzekļu izvēle un pamatojums
              </Text>{" "}
              jātiek testētai. Šajā nodaļā jāsniedz vismaz viens testa piemērs,
              kurš labi demonstrē programmas produkta lietojamību.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSquareRoundedNumber8 size={26} />}
            title="Lietotāja ceļvedis"
            color="violet"
          >
            <Text color="" size="sm">
              Kā cilvēks, kurš ar tehnoloģijām ir uz Jūs, var mijiedarboties ar
              izstrādāto sistēmu? Lietotāja ceļvedim ir jābūt pēc iespējas
              vienkāršam, tajā pat laikā detalizētam.
            </Text>
            <Text>
              <strong>
                Lietotāja ceļvedi sāc ar saiti uz pašu projektu, kā arī saiti uz
                tā kodu <em>GitHub</em>!
              </strong>
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={22} />}
            title="Secinājumi un priekšlikumi"
            color="violet"
          >
            <Text color="" size="sm">
              Pirmais secinājums ir par to, ka mērķis ticis sasniegts. Ikkatram
              izvirzītajam uzdevumam ir jātiek pieminētam secinājumos. Jāiekļauj
              arī vismaz divas rekomendācijas tālākai sistēmas attīstībai.
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              1 lappuse
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconBook size={22} />}
            title="Izmantotā literatūra"
            color="violet"
          >
            <Text color="" size="sm">
              Izmantotie literatūras avoti, noformēti un sakārtoti atbilstoši
              prasībām. Darba tekstā jābūt vismaz vienai atsaucei uz ikkatru
              literatūras avotu.
            </Text>
            <Text size="xs" mt={4} color="dimmed"></Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconLink size={22} />}
            title="Pielikumi"
            color="violet"
          >
            <Text color="" size="sm">
              Pielikumos ir iekļaujams būtisks programmas koda fragments, garāks
              veikto testu piemērs un cita informācija, kura ir darba būtiska
              sastāvdaļa, tomēr bez kuras darbs ir pietiekošs. Pielikumam ir
              jābūt numurētam, ar savu nosaukumu un darbā ir jābūt atsaucei uz
              ikkatru pielikumu.
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              Neietilpst lapušu skaitā
            </Text>
          </Timeline.Item>
        </Timeline>
        <Text>
          <Anchor
            href="https://sites.google.com/vplt.lv/helpdesk/audz%C4%93k%C5%86iem/noteikumi"
            target="_blank"
            size="sm"
          >
            VTDT noformēšanas nosacījumi
          </Anchor>
        </Text>

        <Text>
          <Anchor
            href="https://skolo.lv/mod/folder/view.php?id=66139229"
            target="_blank"
            size="sm"
          >
            Citu izglītojamo kvalifikācijas darbi
          </Anchor>
        </Text>
      </Container>
    </>
  );
}

export default Doc;
