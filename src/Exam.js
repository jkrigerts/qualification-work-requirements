import { useEffect } from "react";

import { notifications } from "@mantine/notifications";

function Exam() {
  useEffect(() => {
    notifications.show({
      title: "📆 Eksāmens ir 22. jūnijā",
      message: "Hei! Laiks sākt cītīgi gatavoties 22. jūnijam! 📚",
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
