import Header from "@/components/common/header/header";
import DashboardLayout from "@/components/dashboardLayout";
import Overview from "@/components/overview/overview";

export default function Home() {
  return (
    <div className="font-roboto">
      <DashboardLayout>
        <div>
          <Header></Header>
          <Overview></Overview>
        </div>
      </DashboardLayout>
    </div>
  );
}
