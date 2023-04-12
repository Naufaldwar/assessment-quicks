import { Button, Checkbox, Flex, ScrollArea, Select } from "@mantine/core";
import { CardTask } from "../CardTask";

export const Task = () => {
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
        <Button>New Task</Button>
      </Flex>
      <ScrollArea style={{ maxHeight: 500 }}>
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
      </ScrollArea>
    </Flex>
  );
};
