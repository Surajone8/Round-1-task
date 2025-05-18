import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const expenseIncomeData = [
  { month: "Jan", Income: 4000, Expense: 2400 },
  { month: "Feb", Income: 3000, Expense: 1398 },
  { month: "Mar", Income: 5000, Expense: 2800 },
  { month: "Apr", Income: 4780, Expense: 3908 },
  { month: "May", Income: 5890, Expense: 4800 },
  { month: "Jun", Income: 4390, Expense: 3800 },
  { month: "Jul", Income: 4490, Expense: 4300 },
];

const categorySpendingData = [
  { name: "Rent", value: 400 },
  { name: "Groceries", value: 300 },
  { name: "Utilities", value: 200 },
  { name: "Entertainment", value: 150 },
  { name: "Others", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow h-72">
        <h2 className="font-medium mb-2">Expense vs Income</h2>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart
            data={expenseIncomeData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="Income"
              stroke="#82ca9d"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Expense" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded shadow h-72">
        <h2 className="font-medium mb-2">Category-wise Spending</h2>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie
              data={categorySpendingData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categorySpendingData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
