import React from "react";
import { Briefcase, ClipboardList, PenTool } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color }) => {
  
  return (
    <div className={`flex flex-col items-start p-6 bg-white shadow rounded-2xl border-l-4 ${color} w-full`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-md bg-opacity-10 ${color}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mt-4 text-3xl font-bold">{value}</p>
    </div>
  );
};

const ApplicationStats = ({ totalApplied, totalPosted, totalBlogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <StatCard
        title="Applied Jobs"
        value={totalApplied}
        icon={ClipboardList}
        color="text-blue-500"
      />
      <StatCard
        title="Jobs Posted"
        value={totalPosted}
        icon={Briefcase}
        color="text-green-500"
      />
      <StatCard
        title="Blog Posts"
        value={totalBlogs}
        icon={PenTool}
        color="text-purple-500"
      />
    </div>
  );
};

export default ApplicationStats;
