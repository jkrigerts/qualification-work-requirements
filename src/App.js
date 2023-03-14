import { MantineProvider, Text, Container } from "@mantine/core";
import Demo from "./Structure";

export default function App() {
  return (
    <MantineProvider
      theme={{
        fontSizes: {
          xs: "1rem",
          sm: "1.1rem",
          md: "1.5rem",
          lg: "1.8rem",
          xl: "1.2rem",
        },
        spacing: {
          xl: "3rem",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Container mt="3rem" mb="3rem">
        <Demo />
      </Container>
    </MantineProvider>
  );
}
