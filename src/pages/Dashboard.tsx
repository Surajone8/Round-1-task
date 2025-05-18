import Header from "../components/Header";
import OverviewCards from "../components/OverviewCards";
import Charts from "../components/Charts";
import TransactionsTable from "../components/TransactionsTable";
import Notifications from "../components/Notifications";
import BudgetingAssistant from "../components/BudgetingAssistant";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Header userName={"Suraj"} />

      <OverviewCards />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 mt-6 items-stretch">
        <Charts />
        <Notifications />
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <TransactionsTable />
      </div>

      <div className="mt-6">
        <BudgetingAssistant />
      </div>
    </div>
  );
};

export default Dashboard;
