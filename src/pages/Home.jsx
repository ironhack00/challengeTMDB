// src/pages/Home.jsx
import { useState } from "react";
import NavBar from "../component/layout/NavBar";
import SectionLeft from "../component/sectionLeft/SectionLeft";
import SectionRigth from "../component/SectionRight/SectionRigth";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="w-full min-h-screen bg-black flex flex-col ">
      <NavBar />
      <section className="flex flex-1 lg:flex-row overflow-hidden">
        <SectionLeft collapsed={collapsed} setCollapsed={setCollapsed} />
        <SectionRigth collapsed={collapsed} />
      </section>
    </main>
  );
}
