const OverviewCards = () => {
  const data = [
    { title: "Total Account Balance", amount: "$10,250.30" },
    { title: "Monthly Income", amount: "$5,000.00" },
    { title: "Monthly Expenses", amount: "$3,200.00" },
  ];

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {["Monthly", "Quarterly", "Year-to-date"].map((view) => (
          <button
            key={view}
            className="px-4 py-2 bg-white shadow rounded-md hover:bg-blue-100 transition-colors duration-200"
          >
            {view}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center"
          >
            <h2 className="text-gray-500 text-sm mb-2">{card.title}</h2>
            <p className="text-xl font-semibold">{card.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCards;
