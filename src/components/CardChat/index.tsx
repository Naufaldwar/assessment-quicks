import { Box, Divider, Flex, Text, createStyles } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

type Props = {
  dataChat: TEntity.Chatlist;
  idRoom: number;
};

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor: theme.colors.blue[6],
    width: 30,
    [theme.fn.smallerThan("md")]: {
      height: 20,
      width: 20,
    },
    height: 30,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 10,
    },
  },
}));

export const CardChat = ({ dataChat }: Props) => {
  const { classes } = useStyles();
  return (
    <>
      <Flex align="center" gap="md" style={{ cursor: "pointer" }}>
        <Box className={classes.box}>
          <IconUser size={12} color="white" />
        </Box>
        <Flex direction="column">
          <Flex gap="">
            <Text
              className={classes.font}
              size="xs"
              sx={(theme) => ({ color: theme.colors.blue[6] })}
            >
              {dataChat.name}
            </Text>
            <Text className={classes.font} size="xs">
              January 1,2021 19.10
            </Text>
          </Flex>
          <Text className={classes.font} size="xs">
            {dataChat.messages[dataChat.messages.length - 1].sender}
          </Text>
          <Text className={classes.font} size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </Text>
        </Flex>
      </Flex>
      <Divider mt="sm" />
    </>
  );
};
