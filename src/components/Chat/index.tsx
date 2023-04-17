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
import { type } from "os";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor: theme.colors.red[2],
    padding: theme.spacing.xs,
  },
}));

type Props = {
  onBackClick: () => void;
};

export const Chat = ({ onBackClick }: Props) => {
  const { classes } = useStyles();
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!" },
    { id: 2, text: "How are you doing?" },
    { id: 3, text: "What are your plans for the weekend?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event: any) => {
    event.preventDefault();

    const newMessageObj = {
      id: messages.length + 1,
      text: newMessage,
    };

    setMessages([...messages, newMessageObj]);
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
          <Flex direction="column">
            <Text
              fw="bolder"
              sx={(theme) => ({ color: theme.colors.blue[6] })}
              size="xs"
            >
              Nopaldwar
            </Text>
            <Text size="xs">3 participants</Text>
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
      <ScrollArea px="md" h={450}>
        <Flex direction="column-reverse" style={{ minHeight: 450 }}>
          <Flex direction="column">
            <Flex justify="end">
              <Text size="sm" sx={(theme) => ({ color: theme.colors.red[6] })}>
                You
              </Text>
            </Flex>
            <Flex justify="end" w="100%">
              <Paper
                style={{ minWidth: 250, maxWidth: 350 }}
                className={classes.paper}
              >
                <Text size="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ullam obcaecati dolor mollitia eaque distinctio,
                  illo molestiae nesciunt in provident eius magni voluptate aut
                  placeat voluptatum ut totam doloribus unde!
                </Text>
                <Text size="10px" mt="xs">
                  12.00
                </Text>
              </Paper>
            </Flex>
          </Flex>
        </Flex>
      </ScrollArea>
      <Flex gap="sm" p="md">
        <Input autoFocus placeholder="Type a new message" w="85%" />
        <Button>Send</Button>
      </Flex>
      {/* <div>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
        <form onSubmit={handleNewMessageSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={handleNewMessageChange}
          />
          <button type="submit">Send</button>
        </form>
      </div> */}
    </Flex>
  );
};
