import DashboardNavigation from "./dashboardNavigation"
import PageNavigation from "./pageNavigation"
import ProfileNavigation from "./profileNavigation"

const Navigation = ()  => {
    return (
        <div className="p-4">
            <ProfileNavigation />
            <DashboardNavigation />
            <PageNavigation />
        </div>
    )
}

export default Navigation