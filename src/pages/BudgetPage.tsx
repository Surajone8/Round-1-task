const budgetData = {
  totalBudget: 5000,
  spent: 3300,
  remaining: 1700,
  categories: [
    { name: 'Food', budget: 1000, spent: 800 },
    { name: 'Rent', budget: 1800, spent: 1800 },
    { name: 'Transport', budget: 500, spent: 300 },
    { name: 'Entertainment', budget: 600, spent: 400 },
    { name: 'Utilities', budget: 400, spent: 300 },
  ],
};

const BudgetPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Budget Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm mb-1">Total Budget</h2>
          <p className="text-2xl font-bold text-blue-600">${budgetData.totalBudget.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm mb-1">Spent So Far</h2>
          <p className="text-2xl font-bold text-red-500">${budgetData.spent.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-sm mb-1">Remaining</h2>
          <p className="text-2xl font-bold text-green-500">${budgetData.remaining.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Category-wise Budget</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="p-3">Category</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Spent</th>
                <th className="p-3">Remaining</th>
                <th className="p-3">Progress</th>
              </tr>
            </thead>
            <tbody>
              {budgetData.categories.map((cat, idx) => {
                const remaining = cat.budget - cat.spent;
                const percent = Math.min((cat.spent / cat.budget) * 100, 100);
                return (
                  <tr
                    key={idx}
                    className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-3 font-medium">{cat.name}</td>
                    <td className="p-3">${cat.budget}</td>
                    <td className="p-3 text-red-600">${cat.spent}</td>
                    <td className="p-3 text-green-600">${remaining >= 0 ? remaining : 0}</td>
                    <td className="p-3 w-1/4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            percent < 80 ? 'bg-blue-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded shadow">
        <p className="font-semibold">Tip:</p>
        <p>You're approaching your limit in the <strong>Rent</strong> and <strong>Food</strong> categories. Consider adjusting your future expenses accordingly.</p>
      </div>
    </div>
  );
};

export default BudgetPage;
