import React from "react";
import type { ReactElement } from "react";
import Navigation from "./navigation/navigation";
import Activity from "./activity/activity";

const DashboardLayout = ({ children }: { children: ReactElement }) => (
    <div className="flex h-screen bg-white ">
        <div className="xl:w-left w-1/3 overflow-y-auto md:block hidden">
            <Navigation></Navigation>
        </div>

        <div className="w-full xl:w-mid border overflow-y-auto">
            {children}
        </div>

        <div className="w-right overflow-y-auto xl:block hidden">
            <Activity></Activity>
        </div>
    </div>
);

export default DashboardLayout;
