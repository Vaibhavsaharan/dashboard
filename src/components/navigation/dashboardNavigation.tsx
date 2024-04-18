"use client";
import { useState } from "react"
import ListItem from "../common/listItem/listItem"

const DashboardNavigation = ()  => {
    const dashboardItems = [
        {url: "overview.svg", title: "Overview"},
        {url: "eCommerce.svg", title: "eCommerce"},
        {url: "project.svg", title: "Projects"},
        {url: "onlineCourse.svg", title: "Online Courses"},
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="flex flex-col">
            <div className="text-black-40 p-2">Dashboards</div>
            {
                dashboardItems.map((item,index) => 
                    <div key={index} onClick={() => setSelectedIndex(index)}>
                        <ListItem icon={item.url} title={item.title} isSelected={selectedIndex == index ? true : false}></ListItem>
                    </div>
                )
            }
        </div>
    )
}

export default DashboardNavigation