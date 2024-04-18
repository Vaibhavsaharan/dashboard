import React from "react";
import type { ReactElement } from "react";
import Navigation from "./navigation/navigation";
import Activity from "./activity/activity";

const DashboardLayout = ({ children }: { children: ReactElement }) => (
    <div className="flex h-screen bg-white ">
        <div className="w-left overflow-y-auto">
            <Navigation></Navigation>
        </div>

        <div className="w-mid border overflow-y-auto">
            {children}
        </div>

        <div className="w-right overflow-y-auto">
            <Activity></Activity>
        </div>
    </div>
);

export default DashboardLayout;
