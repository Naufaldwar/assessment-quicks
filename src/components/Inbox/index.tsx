import { Box, Flex, Input, ScrollArea } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { CardChat } from "../CardChat";

export const Inbox = () => {
  const handleCardChat = () => {
    console.log("click");
  };
  return (
    <>
      <Flex p="md" w={500} direction="column" gap="lg">
        <Input
          rightSection={
            <Box
              style={{
                alignContent: "center",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <IconSearch size={18} />
            </Box>
          }
          // icon={<IconSearch size={18} />}
          placeholder="Search"
        />
        <ScrollArea h={500}>
          <Flex direction="column" gap="sm">
            <CardChat />
          </Flex>
        </ScrollArea>
      </Flex>
    </>
  );
};
