import Image from "next/image";
import Landing from "@/components/pages/Landing";
import TaskList from "@/components/ui/TaskList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Landing/>
        <div className="mb-[40px] w-full">
          <TaskList/>
        </div>
    </main>
  );
}