import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  useEffect(() => {
    setCreation(dummyCreationData);
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      {/* Stats Cards */}
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creation.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center">
            <Sparkles className="w-5" />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">Premium</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center">
            <Gem className="w-5" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-3">
        <p className="mt-6 mb-4 font-medium">Recent Creations</p>

        {creation.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded-lg border border-gray-200"
          >
            <p className="text-sm text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
