import { PopOver } from "@/components/PopOver";
import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { dataTask } from "./data";

export default function HomePage() {
  // const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Text>Quicks Assessment</Text>
      <PopOver dataTask={dataTask} />
    </>
  );
}
