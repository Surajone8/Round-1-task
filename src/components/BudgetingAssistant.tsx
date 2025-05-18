const BudgetingAssistant = () => {
  const budgets = [
    { category: "Food", used: 80, color: "bg-red-400" },
    { category: "Shopping", used: 40, color: "bg-purple-400" },
    { category: "Housing", used: 60, color: "bg-green-400" },
    { category: "Transport", used: 30, color: "bg-yellow-400" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full w-full max-w-none lg:max-w-full">
      <h2 className="font-semibold text-xl mb-6 text-gray-800">Budgeting Assistant</h2>
      <div className="space-y-5">
        {budgets.map((item, i) => (
          <div
            key={i}
            className="flex flex-col"
            role="region"
            aria-label={`${item.category} budget usage`}
          >
            <div className="flex justify-between mb-1 items-center">
              <span className="font-medium text-gray-700">{item.category}</span>
              <span className="text-sm font-semibold text-gray-600">{item.used}%</span>
            </div>
            <div
              className="w-full h-4 rounded-full bg-gray-200 overflow-hidden shadow-inner"
              aria-valuenow={item.used}
              aria-valuemin={0}
              aria-valuemax={100}
              role="progressbar"
            >
              <div
                className={`${item.color} h-4 rounded-full transition-width duration-500 ease-in-out`}
                style={{ 
                  width: `${item.used}%`, 
                  backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)" 
                }}
              >
                <span className="sr-only">{`${item.category} budget used ${item.used}%`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetingAssistant;
