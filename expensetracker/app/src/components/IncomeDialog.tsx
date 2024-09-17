import React, { useState } from "react";

import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

interface IncomeValue {
  income: number | string;
  category: string;
}
const TABLE_HEAD = ["Index", "Income", "Category"];

const IncomeDialog: React.FC = () => {
  const [numberInput, setNumberInput] = useState<number | string>(""); // Number input
  const [selectInput, setSelectInput] = useState<string>(""); // Select input
  // const [displayText, setDisplayText] = useState<string | null>(null);
  // State for the array of Person objects
  const [incomeValue, setIncomeValue] = useState<IncomeValue[]>([]);

  const handlAddIncome = () => {
    // Create a new Person object
    const newIncome: IncomeValue = {
      income: numberInput,
      category: selectInput,
    };

    setIncomeValue([...incomeValue, newIncome]);

    setNumberInput("");
    setSelectInput("");
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className=" flex flex-col max-w-[24rem] w-full h-[38px] boorder rounded-sm"
    >
      <Typography variant="h2">Declare Income Sources</Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="flex flex-col mb-3 gap-y-2 p-4 mt-2 ">
          <Input
            onChange={(e) => setNumberInput(e.target.value)}
            type="number"
            value={numberInput}
            variant="outlined"
            label="Income source"
            className="outline-lime-900"
          ></Input>
          <Select
            value={selectInput}
            onChange={(value) => setSelectInput(value as string)}
            variant="outlined"
            label="Category"
          >
            <Option value="Salary">Salary</Option>
            <Option value="House/Property">House/Property</Option>
            <Option value="Capital Gain">Capital Gain</Option>
            <Option value="Bussiness">Bussiness</Option>
            <Option value="Other">Other</Option>
          </Select>

          <Button onClick={handlAddIncome} className="mt-6">
            Add
          </Button>
        </div>
      </form>

      <table className="w-full mt-4 min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {incomeValue.map((income, index) => (
            <tr key={index}>
              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {index}
                </Typography>
              </td>

              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {income.income}
                </Typography>
              </td>

              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {income.category}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default IncomeDialog;
