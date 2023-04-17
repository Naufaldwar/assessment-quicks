import { Box, Divider, Flex, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

type Props = {
  dataChat: TEntity.Chatlist;
  idRoom: number;
};

export const CardChat = ({ dataChat }: Props) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <Flex
        align="center"
        gap="md"
        style={{ cursor: "pointer" }}
        // onClick={handleClick}
      >
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
        <Flex direction="column">
          <Flex gap="">
            <Text size="xs" sx={(theme) => ({ color: theme.colors.blue[6] })}>
              {dataChat.name}
            </Text>
            <Text size="xs">January 1,2021 19.10</Text>
          </Flex>
          <Text size="xs">Joko :</Text>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
