"use client";
import { useState } from "react"
import ListItem from "../common/listItem/listItem"

const PageNavigation = ()  => {
    const pageItems = [
        {url: "user-profile.svg", title: "User Profile", subTitles: ["Overview", "Projects", "Campaigns", "Documents", "Followers"]},
        {url: "account.svg", title: "Account", subTitles: []},
        {url: "corporate.svg", title: "Corporate", subTitles: []},
        {url: "blog.svg", title: "Blog", subTitles: []},
        {url: "social.svg", title: "Social", subTitles: []},
    ]

    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div className="flex flex-col">
            <div className="text-black-40 p-2">Pages</div>
            {
                pageItems.map((item,index) => 
                    <div key={index} onClick={() => selectedIndex == index ? setSelectedIndex(-1) : setSelectedIndex(index)}>
                        <ListItem icon={item.url} title={item.title} isSelected={selectedIndex == index ? true : false} subTitles={item.subTitles}></ListItem>
                    </div>
                )
            }
        </div>
    )
}

export default PageNavigation