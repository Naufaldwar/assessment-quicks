import { PopOver } from "@/components/PopOver";
import { Text } from "@mantine/core";

export default function HomePage() {
  const dataTask = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "done",
      date: "2021-01-01",
    },
  ];
  return (
    <>
      <Text>Quicks Assessment</Text>
      <PopOver dataTask={dataTask} />
    </>
  );
}
