import { useDisclosure } from "@mantine/hooks";

import { Modal, Text, UnstyledButton } from "@mantine/core";

function TimelineEntry({ description, pages }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <UnstyledButton onClick={open}>
        <Text color="" size="sm">
          {description}
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          {pages}
        </Text>
      </UnstyledButton>
    </>
  );
}

export default TimelineEntry;
