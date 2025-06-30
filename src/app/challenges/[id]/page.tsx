"use client";
import CodeEditor from "@/components/CodeEditor";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code } from "lucide-react";
import React from "react";

export default function ChallengePage({ params }: { params: { id: string } }) {
  const languages: string[] = [
    "javascript",
    "typescript",
    "python",
    "java",
    "php",
  ];

  const tabs = [
    { title: "Instrucciones", icon: BookOpen, value: "instructions" },
    { title: "Soluciones", icon: Code, value: "solutions" },
  ];

  return (
    <div className="bg-slate-900 h-screen">
      <div className="container mx-auto p-4 md:p-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Instructions and Solutions */}
          <div className="flex flex-col h-full">
            <Tabs
              defaultValue="instructions"
              className="w-full flex-1 flex flex-col"
            >
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-slate-600 data-[state=active]:text-white cursor-pointer"
                  >
                    {React.createElement(tab.icon, {
                      className: "mr-2 h-4 w-4",
                    })}
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* Code Editor and Actions */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 flex flex-col">
              <CodeEditor
                language="javascript"
                value={"{}"}
                onValueChange={(code) => console.log(code)}
                placeholder={`Enter your javascript code here...`}
                className="border-t-0 rounded-t-none focus-within:ring-1 focus-within:ring-inset focus-within:ring-ring h-2/4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
