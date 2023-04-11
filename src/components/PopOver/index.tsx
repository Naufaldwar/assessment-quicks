import { Button, Flex, Popover, createStyles } from "@mantine/core";
import { IconNews, IconMessages } from "@tabler/icons-react";
import { quicks } from "@/assets/svg";
import Image from "next/image";

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
}));

export const PopOver = () => {
  const { classes, cx } = useStyles();
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
            <Button
              className={cx(classes.button, classes.item)}
              style={{ backgroundColor: "#8785FF" }}
            >
              <IconMessages />
            </Button>
            <Button
              className={cx(classes.button, classes.item2)}
              style={{ backgroundColor: "#F8B76B" }}
            >
              <IconNews />
            </Button>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};
