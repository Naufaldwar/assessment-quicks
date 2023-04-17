import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Input,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
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

const useStyles = createStyles((theme) => ({
  check: {
    textDecoration: "line-through black",
    color: theme.colors.gray[6],
  },
  font: {
    [theme.fn.smallerThan("md")]: {
      fontSize: 10,
    },
  },
}));

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
    setData({ ...data, date: value });
  };

  const handleDelete = () => {
    setData({ ...data, status: "deleted" });
  };
  // console.log(data);

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

  const handleCek = () => {
    if (data.status === "done") {
      setData({ ...data, status: "todo" });
    } else {
      setData({ ...data, status: "done" });
    }
  };

  const { classes } = useStyles();
  return (
    <div>
      {data && data.status !== "deleted" ? (
        <Flex direction="column">
          <Flex mt="lg" justify="space-between" align="center">
            {data?.title ? (
              <Checkbox
                // checked={data?.status === "done"}
                onClick={handleCek}
                defaultChecked={data?.status === "done"}
                label={
                  <Text
                    className={data?.status === "done" ? classes.check : ""}
                  >
                    {data?.title}
                  </Text>
                }
              />
            ) : (
              <Flex gap="md" align="center">
                <Checkbox />
                <Input
                  sx={(theme) => ({
                    [theme.fn.smallerThan("md")]: { width: "100px" },
                    fontSize: 10,
                  })}
                  placeholder="Title"
                  value={dataTitle}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
              </Flex>
            )}
            <Flex gap="sm">
              {currentDate < selectedDate ? (
                <Text fz="xs">{diffDays} days left</Text>
              ) : (
                <Text className={classes.font} fz="xs" style={{ color: "red" }}>
                  Expired
                </Text>
              )}
              <Text className={classes.font} fz="xs">
                {selectedDate.toDateString()}
              </Text>
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
