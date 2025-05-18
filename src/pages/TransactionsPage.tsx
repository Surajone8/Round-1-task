import { useState } from 'react';

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    { date: '2025-05-01', desc: 'Salary', type: 'Credit', category: 'Income', amount: 5000 },
    { date: '2025-05-02', desc: 'Grocery', type: 'Debit', category: 'Food', amount: 1200 },
    { date: '2025-05-03', desc: 'Rent', type: 'Debit', category: 'Rent', amount: 1800 },
  ];

  const filteredTx = transactions.filter(tx =>
    tx.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Transactions</h1>
        <p className="text-gray-600 mt-1">Review your recent financial activity</p>
      </header>

      <div className="mb-6 max-w-md">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <input
            type="search"
            name="search"
            placeholder="Search by description or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow bg-white border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold uppercase">Date</th>
              <th className="px-4 py-3 text-left font-semibold uppercase">Description</th>
              <th className="px-4 py-3 text-left font-semibold uppercase">Type</th>
              <th className="px-4 py-3 text-left font-semibold uppercase">Category</th>
              <th className="px-4 py-3 text-right font-semibold uppercase">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredTx.length > 0 ? (
              filteredTx.map((tx, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-blue-50 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'
                  }`}
                >
                  <td className="px-4 py-3">{new Date(tx.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{tx.desc}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      tx.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {tx.type}
                  </td>
                  <td className="px-4 py-3">{tx.category}</td>
                  <td className="px-4 py-3 text-right font-semibold">${tx.amount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-400">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
