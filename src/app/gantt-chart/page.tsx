"use client"
import dynamic from "next/dynamic";

const DynamicGanttChart = dynamic(() => import('@/components/pages/GanttChart'), {
  ssr: false,
});
import ApexChart from "@/components/pages/ApexChart";

const Page = () => {
    const tasks = [
        {
            name: 'Market Research',
            planned: { start: 2, duration: 3 },
            actual: { start: 3, duration: 4 },   
            delay: { start: 1, duration: 1 },
     },

        { 
          name: 'Define Specifications',
          planned: { start: 2, duration: 3 },
          actual: { start: 2, duration: 2 },
          delay: { start: 4, duration: 1 }
        },
        { 
          name: 'Overall Architecture',
          planned: { start: 3, duration: 3 },
          actual: { start: 3, duration: 3 }
        },
        { 
          name: 'Project Planning',
          planned: { start: 4, duration: 2 },
          actual: { start: 4, duration: 2 }
        },
        { 
          name: 'Detail Design',
          planned: { start: 5, duration: 3 },
          actual: { start: 5, duration: 3 }
        },
        { 
          name: 'Software Development',
          planned: { start: 6, duration: 4 },
          actual: { start: 6, duration: 3 },
          delay: { start: 9, duration: 1 }
        },
        { 
          name: 'Test Plan',
          planned: { start: 8, duration: 2 },
          actual: { start: 8, duration: 2 }
        },
        { 
          name: 'Testing & QA',
          planned: { start: 10, duration: 1 },
          actual: { start: 10, duration: 1 }
        },
        { 
          name: 'User Documentation',
          planned: { start: 11, duration: 1 },
          actual: { start: 11, duration: 1 }
        },
      ];


    return (
        <div className="container mx-auto p-4">
        <DynamicGanttChart tasks={tasks} />
        <div className="mt-4 flex space-x-4 justify-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            <span>Planned</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2"></div>
            <span>Actual</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 mr-2"></div>
            <span>Slack (Delay)</span>
          </div>
        </div>

        <div className="w-full mt-[100px]">
            <ApexChart/>
        </div>
      </div>
      );
}
 
export default Page;
