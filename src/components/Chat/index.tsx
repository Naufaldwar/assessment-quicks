import {
  Box,
  Button,
  Flex,
  Input,
  Paper,
  ScrollArea,
  Text,
  createStyles,
} from "@mantine/core";
import { IconArrowNarrowLeft, IconX } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor: theme.colors.red[2],
    padding: theme.spacing.xs,
  },
  paper1: {
    backgroundColor: theme.colors.green[2],
    padding: theme.spacing.xs,
  },
  scroll: {
    height: 450,
    [theme.fn.smallerThan("md")]: {
      height: 300,
    },
  },
}));

type Props = {
  onBackClick: () => void;
  messages: TEntity.Chatlist;
};

export const Chat = ({ onBackClick, messages }: Props) => {
  const { classes } = useStyles();
  const [message, setMessage] = useState<TEntity.Chatlist>(messages);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event: any) => {
    event.preventDefault();

    const newMessageObj = {
      id: message.messages.length + 1,
      sender: "Me",
      text: newMessage,
      date: new Date(),
    };

    setMessage({ ...message, messages: [...message.messages, newMessageObj] });
    setNewMessage("");
  };

  return (
    <Flex direction="column" w="100%">
      <Flex
        sx={(theme) => ({
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[4],
        })}
        p="md"
        justify="space-between"
        align="center"
      >
        <Flex gap="sm">
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ":hover": {
                cursor: "pointer",
              },
            })}
            onClick={onBackClick}
          >
            <IconArrowNarrowLeft />
          </Box>
          <Flex direction="column" justify="center">
            <Text
              fw="bolder"
              sx={(theme) => ({ color: theme.colors.blue[6] })}
              size="xs"
            >
              {messages.name}
            </Text>
            {/* <Text size="xs">3 participants</Text> */}
          </Flex>
        </Flex>

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <IconX />
        </Box>
      </Flex>
      <ScrollArea px="md" className={classes.scroll}>
        <Flex direction="column" justify="end" style={{ minHeight: 450 }}>
          {message.messages?.map((message: TEntity.Messages) => (
            <Flex key={message.id} direction="column">
              <Flex justify={message.sender === "Me" ? "end" : "start"}>
                <Text
                  size="xs"
                  sx={
                    message.sender === "Me"
                      ? (theme) => ({ color: theme.colors.red[6] })
                      : (theme) => ({ color: theme.colors.green[6] })
                  }
                >
                  {message.sender}
                </Text>
              </Flex>
              <Flex
                justify={message.sender === "Me" ? "end" : "start"}
                w="100%"
              >
                <Paper
                  sx={(theme) => ({
                    minWidth: 250,
                    maxWidth: 350,
                    [theme.fn.smallerThan("md")]: {
                      minWidth: 200,
                      maxWidth: 300,
                    },
                  })}
                  className={
                    message.sender === "Me" ? classes.paper : classes.paper1
                  }
                >
                  <Text size="xs">{message.text}</Text>
                  <Text size="10px" mt="xs">
                    12.00
                  </Text>
                </Paper>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
      <form
        style={{ display: "flex", padding: 14, gap: 8 }}
        onSubmit={handleNewMessageSubmit}
      >
        <Input
          autoFocus
          placeholder="Type a new message"
          w="85%"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <Button type="submit">Send</Button>
      </form>
    </Flex>
  );
};
