import { useFormikContext } from "formik";
import { FC } from "react";
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import { TestProgressBodyRowInitialValues } from "../../pages/TestProgress/TestProgressBodyRow";

const DecimalInput: FC<CurrencyInputProps> = ({ name }) => {
  const { values, setFieldValue } =
    useFormikContext<TestProgressBodyRowInitialValues>();
  return (
    <CurrencyInput
      name={name}
      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60 text-right"
      value={(values as any)[`${name}`]}
      onValueChange={(value) => setFieldValue(`${name}`, value)}
    />
  );
};

export default DecimalInput;
