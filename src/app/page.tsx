import Image from "next/image";
import MainPage from "./pages/MainPage";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <MainPage/>
    </>
  );
}
