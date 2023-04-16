import { Box, Flex, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { CardChat } from "../CardChat";

export const Inbox = () => {
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
        <CardChat />
      </Flex>
    </>
  );
};
