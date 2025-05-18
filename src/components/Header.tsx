const Header = ({ userName }: { userName: string }) => {
  const monthlyGoal = "$6,500"; 
  const currentSavings = "$4,300"; 

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex flex-col gap-1 max-w-[calc(100%-60px)]">
        <h1 className="text-2xl font-semibold leading-tight">
          Good morning, {userName}
        </h1>
        <p className="text-sm text-gray-500">Monthly savings goal</p>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
          <div className="bg-green-500 h-2 rounded-full w-2/3 transition-all duration-300"></div>
        </div>

        <p className="text-xs text-gray-600 mt-2">
          {currentSavings} saved of {monthlyGoal}
        </p>
      </div>
      <img
        src="https://i.pravatar.cc/40"
        alt="Avatar"
        className="rounded-full w-12 h-12 object-cover ml-4 self-start"
      />
    </div>
  );
};

export default Header;
