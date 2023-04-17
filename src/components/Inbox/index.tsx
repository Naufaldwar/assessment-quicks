import { Box, Flex, Input, ScrollArea } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { CardChat } from "../CardChat";
import { Chat } from "../Chat";
import { useState } from "react";

type Props = {
  dataChat: TEntity.Chatlist[];
  onChatRoomSelect: (id: number) => void;
};

export const Inbox = ({ dataChat, onChatRoomSelect }: Props) => {
  const [chatRooms, setChatRooms] = useState<TEntity.Chatlist[]>(dataChat);
  const handleChatRoomClick = (chatRoom: any) => {
    onChatRoomSelect(chatRoom);
  };
  // const handleCardChat = (id: number) => {
  //   console.log(id);
  // };
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
            {dataChat.map((item) => (
              <Box key={item.id} onClick={() => handleChatRoomClick(item)}>
                <CardChat idRoom={item.id} dataChat={item} />
              </Box>
            ))}
          </Flex>
        </ScrollArea>
      </Flex>
    </>
  );
};
