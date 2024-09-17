import React from "react";
import IncomeDialog from "../components/IncomeDialog";
import ExpensesDialog from "../components/ExpensesDialog";

const Homepage: React.FC = () => {
  return (
    <div className="flex p-8 w-full gap-x-8 min-h-max flex-row">
      <IncomeDialog />
      <ExpensesDialog />
    </div>
  );
};

export default Homepage;
