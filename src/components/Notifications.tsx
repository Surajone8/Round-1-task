const Notifications = () => {
    const alerts = [
      "Overspending on food",
      "Salary not received yet",
    ];
  
    return (
      <div className="bg-white p-4 rounded shadow h-full max-w-md flex flex-col justify-between">
        <h2 className="font-medium mb-2">Notifications & Tips</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 flex-grow">
          {alerts.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Notifications;
