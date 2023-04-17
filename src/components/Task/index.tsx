import {
  Button,
  Checkbox,
  Flex,
  ScrollArea,
  Select,
  createStyles,
} from "@mantine/core";
import { CardTask } from "../CardTask";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  scroll: {
    height: 500,
    [theme.fn.smallerThan("md")]: {
      height: 350,
    },
  },
}));

type Props = {
  // dataTaskBaru: TEntity.Task ;
  dataTask: TEntity.Task[];
};

export const Task = ({ dataTask }: Props) => {
  const { classes } = useStyles();
  const [data, setData] = useState(dataTask);
  const lenghtData = data.length;

  const handleAddTask = (e: number) => {
    const newData = [
      {
        id: e + 1,
        title: "",
        description: "",
        status: "todo",
        date: new Date(),
      },
    ];
    setData([...data, ...newData]);
  };

  // console.log(data);

  return (
    <Flex p="md" w={500} direction="column">
      <Flex justify="space-between" pb="sm">
        <Select
          sx={(theme) => ({ [theme.fn.smallerThan("md")]: { width: 150 } })}
          // label="Your favorite framework/library"
          placeholder="My Task"
          data={[
            { value: "Personal Errands", label: "Personal Errands" },
            { value: "Urgent To-Do", label: "Urgent To-Do" },
          ]}
        />
        <Button onClick={() => handleAddTask(lenghtData)}>New Task</Button>
      </Flex>
      <ScrollArea className={classes.scroll}>
        {data.map((item, index) => (
          <CardTask dataTask={item} key={index} />
        ))}
      </ScrollArea>
    </Flex>
  );
};
