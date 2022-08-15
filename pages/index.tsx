import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const Operator = (props: {
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onClick={props.onClick}
      className="border h-10 w-10 rounded-xl text-2xl flex justify-center items-center text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white"
    >
      {props.children}
    </div>
  );
};

const InputNumber = (props: {
  value: number | null;
  onChange: (e: any) => void;
  placeholder?: string;
}) => {
  return (
    <input
      placeholder={props.placeholder}
      type="number"
      className="mr-2 border placeholder:text-gray-300 font-semibold text-blue-400 rounded-xl w-full border-blue-200 px-3"
      onChange={props.onChange}
    />
  );
};

const Checkbox = (props: { valid: boolean; datatestid?: string }) => {
  return (
    <input
      type="checkbox"
      className="w-8"
      readOnly={true}
      checked={props.valid}
      data-testid={props.datatestid}
    />
  );
};

const Home: NextPage = () => {
  const [input1, setInput1] = useState<number | null>(null);
  const [input2, setInput2] = useState<number | null>(null);
  const [input3, setInput3] = useState<number | null>(null);
  const [result, setResult] = useState<number | null | string>(null);

  useEffect(() => {
    setResult(null);
  }, [input1, input2, input3]);

  function isInputValid(num: number | null): boolean {
    return Number.isInteger(num);
  }

  function getTotalFilledInput(): number {
    const input1Valid: number = isInputValid(input1) ? 1 : 0;
    const input2Valid: number = isInputValid(input2) ? 1 : 0;
    const input3Valid: number = isInputValid(input3) ? 1 : 0;
    return input1Valid + input2Valid + input3Valid;
  }

  function isFormInvalid(): boolean {
    return getTotalFilledInput() === 1;
  }

  function addAll(): void {
    const processed1 = input1 && isInputValid(input1) ? input1 : 0;
    const processed2 = input2 && isInputValid(input2) ? input2 : 0;
    const processed3 = input3 && isInputValid(input3) ? input3 : 0;
    setResult(processed1 + processed2 + processed3);
  }

  function substractAll(): void {
    let res: number | null = 0;
    if (input1 && input2 && input3) res = input1 - input2 - input3;
    else if (!input1 && input2 && input3) res = input2 - input3;
    else if (input1 && !input2 && input3) res = input1 - input3;
    else if (input1 && input2 && !input3) res = input1 - input2;
    setResult(res);
  }

  function multiplyAll(): void {
    const processed1 = input1 && isInputValid(input1) ? input1 : 1;
    const processed2 = input2 && isInputValid(input2) ? input2 : 1;
    const processed3 = input3 && isInputValid(input3) ? input3 : 1;
    setResult(processed1 * processed2 * processed3);
  }

  function divideAll(): void {
    let res: number | null = 0;
    if (input1 && input2 && input3) res = input1 / input2 / input3;
    else if (!input1 && input2 && input3) res = input2 / input3;
    else if (input1 && !input2 && input3) res = input1 / input3;
    else if (input1 && input2 && !input3) res = input1 / input2;
    setResult(res.toFixed(2));
  }

  function calculateResult(operatorType: string): void {
    if (getTotalFilledInput() && !isFormInvalid()) {
      switch (operatorType) {
        case "add":
          addAll();
          break;
        case "substract":
          substractAll();
          break;
        case "multiply":
          multiplyAll();
          break;
        case "divide":
          divideAll();
          break;
      }
    }
  }

  return (
    <div className="bg-blue-200 min-h-screen w-full flex flex-col justify-center items-center">
      <Head>
        <title>Kalkulator</title>
        <meta name="description" content="Custom calculator app" />
      </Head>
      <div className="bg-white rounded-xl w-[300px] min-h-[200px] p-4 shadow flex flex-col gap-2">
        <h1 className="text-center font-semibold text-blue-400 text-2xl">
          Custom Calculator
        </h1>
        {/* Inputs */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-12 flex">
            <InputNumber
              value={input1}
              placeholder="Input 1"
              onChange={(e) => setInput1(parseInt(e.target.value))}
            />
            <Checkbox valid={isInputValid(input1)} datatestid="Checkbox 1" />
          </div>
          <div className="h-12 flex">
            <InputNumber
              value={input2}
              placeholder="Input 2"
              onChange={(e) => setInput2(parseInt(e.target.value))}
            />
            <Checkbox valid={isInputValid(input2)} datatestid="Checkbox 2" />
          </div>
          <div className="h-12 flex">
            <InputNumber
              value={input3}
              placeholder="Input 3"
              onChange={(e) => setInput3(parseInt(e.target.value))}
            />
            <Checkbox valid={isInputValid(input3)} datatestid="Checkbox 3" />
          </div>
        </div>
        {/* Operators */}
        <div className="mt-4 flex gap-2 justify-center">
          <Operator onClick={() => calculateResult("add")}>
            <FaPlus data-testid="add" />
          </Operator>
          <Operator onClick={() => calculateResult("substract")}>
            <FaMinus data-testid="substract" />
          </Operator>
          <Operator onClick={() => calculateResult("multiply")}>
            <FaTimes data-testid="multiply" />
          </Operator>
          <Operator onClick={() => calculateResult("divide")}>
            <FaDivide data-testid="divide" />
          </Operator>
        </div>
        {/* Error Message */}
        {isFormInvalid() && (
          <div className="mt-2 text-red-500">
            There must be more than one input
          </div>
        )}
        {/* Result */}
        {getTotalFilledInput() > 0 && !isFormInvalid() && (
          <div>
            <hr className="border-2 mt-4 border-blue-200" />
            <div className="mt-4 flex justify-between items-end text-blue-400">
              <div>Result:</div>
              <div className="text-2xl">{result}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
