import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
