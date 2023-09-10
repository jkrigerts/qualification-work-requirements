import { useEffect } from "react";

import { notifications } from "@mantine/notifications";

function Exam() {
  useEffect(() => {
    notifications.show({
      title: "📆 Izmēģinājuma eksāmens jau novembrī!",
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
