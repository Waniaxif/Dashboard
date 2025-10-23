// import DashboardHeader from 'components/dashboard/DashboardHeader'
// import StatsCard from 'components/dashboard/StatsCard'
// import ActivityTable from 'components/dashboard/ActivityTable'
import MainLayout from "../MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-4 md:p-8">
        <section className="mt-8">{/* <ActivityTable /> */}</section>
      </div>
    </MainLayout>
  );
}
