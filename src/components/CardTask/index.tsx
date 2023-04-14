import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Input,
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
import { useState } from "react";
type Props = {
  dataTask: TEntity.Task;
};
export const CardTask = ({ dataTask }: Props) => {
  // const newDate = new Date(dataTask.date);
  // const [value, setValue] = useState(newDate);
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date(dataTask.date));
  const [data, setData] = useState<TEntity.Task>(dataTask);
  const [dataTitle, setDataTitle] = useState(dataTask.title);
  const [dataDesc, setDataDesc] = useState(dataTask.description);

  const diffTime = Math.abs(selectedDate.getTime() - currentDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const handleDateChange = (value: any) => {
    setSelectedDate(value);
  };

  const handleDelete = () => {
    setData(null);
  };
  console.log(data);

  const handleSubmit = (value: any) => {
    setData({ ...data, title: value.target.value });
  };
  const handleKeyPress = (value: any) => {
    if (value.key === "Enter") {
      value.preventDefault();
      handleSubmit(value);
    }
  };

  const handleChange = (e: any) => {
    setDataTitle(e.target.value);
  };

  const handleSubmitDesc = (e: any) => {
    setData({ ...data, description: e.target.value });
  };

  const handleKeyPressDesc = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitDesc(e);
    }
  };
  const handleChangeDesc = (e: any) => {
    setDataDesc(e.target.value);
  };

  return (
    <div>
      {data ? (
        <Flex direction="column">
          <Flex mt="lg" justify="space-between" align="center">
            {data?.title ? (
              <Checkbox label={data?.title} />
            ) : (
              <Flex gap="md" align="center">
                <Checkbox />
                <Input
                  placeholder="Title"
                  value={dataTitle}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
              </Flex>
            )}
            <Flex gap="sm">
              {currentDate < selectedDate ? (
                <Text fz="xs">{diffDays} hari lagi</Text>
              ) : (
                <Text fz="xs">Expired</Text>
              )}
              <Text fz="xs">{selectedDate.toDateString()}</Text>
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
                onClick={handleDelete}
              >
                <IconTrash size={18} />
              </Box>
            </Flex>
          </Flex>
          <Flex ml={24} mt="sm" align="center" gap="md">
            <IconClock color="#2F80ED" size={18} />

            <DateInput
              valueFormat="YYYY MMM DD"
              value={selectedDate}
              icon={<IconCalendar color="#4F4F4F" size={18} />}
              placeholder="Set Date"
              onChange={handleDateChange}
            />
          </Flex>
          <Flex ml={24} mt="sm" align="center" gap="md">
            <IconPencil color="#2F80ED" size={18} />
            {data?.description ? (
              <Text fz="xs">{data?.description}</Text>
            ) : (
              <TextInput
                placeholder="description"
                value={dataDesc}
                onChange={handleChangeDesc}
                onKeyPress={handleKeyPressDesc}
              />
            )}
          </Flex>
          <Divider mt="lg" />
        </Flex>
      ) : (
        ""
      )}
    </div>
  );
};
