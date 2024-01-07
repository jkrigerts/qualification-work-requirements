import { useEffect } from "react";

import { notifications } from "@mantine/notifications";

function Exam() {
  useEffect(() => {
    notifications.show({
      title: "📆 Eksāmens jau pirms Līgo svētkiem!",
      message: "Hei! Laiks sākt cītīgi gatavoties! 📚",
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
