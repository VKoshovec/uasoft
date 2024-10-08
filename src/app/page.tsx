// import Image from "next/image";
import Folder from "@/components/foder/Folder";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import Sale from "@/components/sale/Sale";


export default function Home() {
  return (
    //<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
    
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <main className="">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
        <Header/>
        <Folder>
           <Menu/>
           <Sale/>
        </Folder>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
