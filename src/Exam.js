import { useEffect } from "react";

import { notifications } from "@mantine/notifications";

function Exam() {
  useEffect(() => {
    notifications.show({
      title: "📆 Eksāmens jau 2025. gada maijā!",
      message: "Hei! Jāsāk cītīgi gatavoties! 📚",
      styles: (theme) => ({
        root: {
          "&::before": { backgroundColor: theme.colors.violet[6] },
        },
      }),
    });
  });

  return <></>;
}

export default Exam;
