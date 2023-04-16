import { Box, Flex, createStyles } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({}));

export const CardChat = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <Flex>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.blue[6],
            width: 30,
            height: 30,
            borderRadius: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <IconUser color="white" />
        </Box>
      </Flex>
    </>
  );
};
