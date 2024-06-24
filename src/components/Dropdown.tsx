import { Field } from "formik";
import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface DropdownProps {
  className?: string;
  name: string;
  label: string;
  id?: string;
}

const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  label,
  className,
  children,
  name,
  id,
}) => {
  return (
    <div className={twMerge(className)}>
      <Label htmlFor={id}>{label}</Label>
      <Field
        as="select"
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {children}
      </Field>
    </div>
  );
};

export default Dropdown;
