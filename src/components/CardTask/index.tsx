import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates";
import {
  IconCalendar,
  IconClock,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";

export const CardTask = () => {
  return (
    <Flex direction="column">
      <Flex mt="lg" justify="space-between" align="center">
        <Checkbox label="I agree to sell my privacy" />
        <Flex gap="sm">
          <Text fz="xs">2 Days Left</Text>
          <Text fz="xs">12/06/2021</Text>
          <Box
            sx={(theme) => ({
              display: "flex",
              color: theme.colors.red[6],
              justifyContent: "center",
              alignItems: "center",
              w: 35,
              h: 35,
              borderRadius: 9999,
              ":hover": {
                cursor: "pointer",
                backgroundColor: theme.colors.red[0],
              },
            })}
          >
            <IconTrash size={18} />
          </Box>
        </Flex>
      </Flex>
      <Flex ml={24} mt="sm" align="center" gap="md">
        <IconClock color="#2F80ED" size={18} />
        <DateInput
          valueFormat="YYYY MMM DD"
          //   label="Date input"
          icon={<IconCalendar color="#4F4F4F" size={18} />}
          placeholder="Set Date"
          //   mx="auto"
        />
      </Flex>
      <Flex ml={24} mt="sm" align="center" gap="md">
        <IconPencil color="#2F80ED" size={18} />
        <TextInput placeholder="description" />
      </Flex>
      <Divider mt="lg" />
    </Flex>
  );
};
