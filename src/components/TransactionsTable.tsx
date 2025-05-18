import { Link } from 'react-router-dom';

const TransactionsTable = () => {
  const transactions = [
    { date: '2025-05-01', desc: 'Salary', type: 'Credit', category: 'Income', amount: 5000 },
    { date: '2025-05-02', desc: 'Grocery', type: 'Debit', category: 'Food', amount: 1200 },
    { date: '2025-05-03', desc: 'Rent', type: 'Debit', category: 'Rent', amount: 1800 },
  ];

  const formatDate = (dateStr: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-semibold mb-4 text-lg text-gray-800 uppercase tracking-wide">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-inner">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={idx}
                className={`border-t ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-gray-100 transition-colors duration-150`}
              >
                <td className="px-4 py-3 whitespace-nowrap">{formatDate(tx.date)}</td>
                <td className="px-4 py-3">{tx.desc}</td>
                <td
                  className={`px-4 py-3 font-semibold whitespace-nowrap ${
                    tx.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {tx.type}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{tx.category}</td>
                <td className="px-4 py-3 text-right font-mono whitespace-nowrap">${tx.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <Link
          to="/transactions"
          className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition"
        >
          View All &rarr;
        </Link>
      </div>
    </div>
  );
};

export default TransactionsTable;
