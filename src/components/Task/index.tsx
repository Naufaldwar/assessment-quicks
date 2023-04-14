import { Button, Checkbox, Flex, ScrollArea, Select } from "@mantine/core";
import { CardTask } from "../CardTask";
import { useState } from "react";

type Props = {
  // dataTaskBaru: TEntity.Task ;
  dataTask: TEntity.Task[];
};

export const Task = ({ dataTask }: Props) => {
  const [data, setData] = useState(dataTask);
  const lenghtData = data.length;

  const handleAddTask = (e: number) => {
    const newData = [
      {
        id: e + 1,
        title: "",
        description: "",
        status: "",
        date: "2023 01 01",
      },
    ];
    setData([...data, ...newData]);
  };

  return (
    <Flex p="md" w={500} direction="column">
      <Flex justify="space-between">
        <Select
          // label="Your favorite framework/library"
          placeholder="My Task"
          data={[
            { value: "Personal Errands", label: "Personal Errands" },
            { value: "Urgent To-Do", label: "Urgent To-Do" },
          ]}
        />
        <Button onClick={() => handleAddTask(lenghtData)}>New Task</Button>
      </Flex>
      <ScrollArea h={500}>
        {data.map((item, index) => (
          <CardTask dataTask={item} key={index} />
        ))}
      </ScrollArea>
      {/* <p>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </p> */}
    </Flex>
  );
};
