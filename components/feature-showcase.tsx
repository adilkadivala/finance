"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { expencedata, incomedata, remaindata } from "@/lib/utils";

function FeatureShowCase() {
  return (
    <div
      id="features"
      className="w-full min-h-screen sm:py-20 py-12 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-600 max-w-3xl mx-auto leading-tight">
            Managing Catgory wise income, expence, and remain, OfCourse by
            account Too !!
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* SEO Goal Setting Card */}
          <div className="rounded-2xl bg-gradient-to-b from-rose-200 to-slate-200 p-6 space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div className="flex gap-2 text-rose-800 ">
                  <FaArrowTrendDown size={25}/>
                  <span className="">Expence</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-black">10.15%</span>
                  <span className="text-rose-500 ml-2">-5.6%</span>
                </div>
              </div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={expencedata}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-indigo-900">Expence</h2>
            <p className="text-slate-500">
              Representation in Diagram of each Account of Expences
            </p>
          </div>

          {/* Dashboard Card */}
          <div className="rounded-2xl bg-gradient-to-b from-green-200 to-slate-200 p-6 space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div className="flex gap-2 text-green-800 ">
                  <FaArrowTrendUp size={25} />
                  <span className="">Income</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-black">10.15%</span>
                  <span className="text-green-500 ml-1">+0.6%</span>
                </div>
              </div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={incomedata}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-green-900">income</h2>
            <p className="text-slate-500">
              Easily treck your every source of income by categories
            </p>
          </div>

          {/* Visual Reports Card */}
          <div className="rounded-2xl bg-gradient-to-b from-indigo-200 to-slate-200 p-6 space-y-4 md:col-span-2">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div className="flex gap-2 text-indigo-800 ">
                  <FaPiggyBank size={25} />
                  <span className="">Remain</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-black">59.8K</span>
                  <span className="text-green-500 ml-1">+10.7%</span>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={remaindata}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-indigo-900">Remain</h2>
            <p className="text-slate-500">Your Final Remain Of all account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureShowCase;
