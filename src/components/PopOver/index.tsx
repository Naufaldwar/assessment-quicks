import {
  Button,
  Flex,
  Popover,
  createStyles,
  Menu,
  Input,
  Box,
  ScrollArea,
} from "@mantine/core";
import { IconNews, IconMessages, IconSearch } from "@tabler/icons-react";
import { quicks } from "@/assets/svg";
import Image from "next/image";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Inbox } from "../Inbox";
import { Task } from "../Task";
import { Chat } from "../Chat";
import { CardChat } from "../CardChat";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.blue[6],
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  },
  position: {
    position: "fixed",
    bottom: 50,
    right: 50,
  },
  item: {
    position: "fixed",
    bottom: 50,
    right: 100,
  },
  item2: {
    position: "fixed",
    bottom: 50,
    right: 150,
  },
  modal: {
    width: 500,
    [theme.fn.smallerThan("md")]: {
      width: 300,
    },
    position: "fixed",
    bottom: 100,
    right: 50,
    border: "1px solid",
    borderColor: theme.colors.gray[4],
    borderRadius: 10,
    // right: 0,
  },
}));

type Props = {
  dataTask: TEntity.Task[];
  dataChat: TEntity.Chatlist[];
};

export const PopOver = ({ dataTask, dataChat }: Props) => {
  const { classes, cx } = useStyles();
  const [openedInbox, { open: openInbox, close: closeInbox }] =
    useDisclosure(false);
  const [openedTask, { open: openTask, close: closeTask }] =
    useDisclosure(false);

  const [currentChatRoom, setCurrentChatRoom] = useState<TEntity.Chatlist>();

  const handleChatRoomSelect = (chatRoom: TEntity.Chatlist) => {
    setCurrentChatRoom(chatRoom);
  };

  const handleBackClick = () => {
    setCurrentChatRoom(undefined);
  };

  return (
    <>
      <Popover position="left" unstyled>
        <Popover.Target>
          <Button className={cx(classes.button, classes.position)}>
            <Image src={quicks} alt="Popover" height={20} />
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex gap="md">
            <Menu opened={openedInbox} onClose={closeInbox} unstyled>
              <Menu.Target>
                <Button
                  onClick={openInbox}
                  className={cx(classes.button, classes.item)}
                  style={{ backgroundColor: "#8785FF" }}
                >
                  <IconMessages />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Flex className={classes.modal}>
                  {currentChatRoom ? (
                    <Chat
                      messages={currentChatRoom}
                      onBackClick={handleBackClick}
                    />
                  ) : (
                    <Inbox
                      dataChat={dataChat}
                      onChatRoomSelect={handleChatRoomSelect}
                    />
                  )}
                </Flex>
              </Menu.Dropdown>
            </Menu>
            <Menu opened={openedTask} onClose={closeTask} unstyled>
              <Menu.Target>
                <Button
                  onClick={openTask}
                  className={cx(classes.button, classes.item2)}
                  style={{ backgroundColor: "#F8B76B" }}
                >
                  <IconNews />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Flex className={classes.modal}>
                  <Task dataTask={dataTask} />
                </Flex>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};
