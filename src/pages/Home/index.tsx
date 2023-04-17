import { PopOver } from "@/components/PopOver";
import { Text } from "@mantine/core";
// import { dataChat } from "./data";

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

  const dataChat = [
    {
      id: 1, // ID unik untuk setiap chat room
      name: "Jane Doe", // Nama pengguna lain yang sedang diajak chatting
      // avatar: "https://example.com/avatar.jpg", // URL gambar avatar pengguna lain
      messages: [
        {
          id: 1, // ID unik untuk setiap pesan
          sender: "me", // Identitas pengirim pesan (dapat berupa "me" atau nama pengguna lain)
          text: "Hi there!", // Teks pesan
          date: "2022-04-17T08:30:00.000Z", // Waktu pengiriman pesan (dalam format ISO 8601)
        },
        {
          id: 2,
          sender: "Jane Doe",
          text: "Hey! How are you doing?",
          date: "2022-04-17T08:32:00.000Z",
        },
        {
          id: 3,
          sender: "me",
          text: "I'm doing great, thanks for asking!",
          date: "2022-04-17T08:35:00.000Z",
        },
      ],
    },
  ];
  return (
    <>
      <Text>Quicks Assessment</Text>
      <PopOver dataTask={dataTask} dataChat={dataChat} />
    </>
  );
}
