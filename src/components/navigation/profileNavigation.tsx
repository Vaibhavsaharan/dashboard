import Image from "next/image"

const ProfileNavigation = ()  => {
    return (
        <div className="flex flex-col p-2">
            <div className="flex mb-4 items-center">
                <Image src="profile.svg" alt={"Profile"} width="24" height="24"></Image>
                <div className="ml-2">
                    ByeWind
                </div>
            </div>
            <div>
                <div className="text-sm flex">
                    <div className="px-2 py-1 text-black-40">Favorites</div>
                    <div className="px-2 py-1 text-black-20 ">Recently</div>
                </div>
            </div>
            <div className="m-2">
                <ul className="list-disc list-inside">
                    <li className="mb-2">
                        Overview
                    </li>
                    <li className="">
                        Projects
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default ProfileNavigation