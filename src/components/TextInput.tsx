import { Field } from "formik";
import { FC, PropsWithChildren, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const TextInput: FC<PropsWithChildren<TextInputProps>> = ({
  id,
  label,
  className,
  ...rest
}) => {
  return (
    <div className={twMerge(className)}>
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        className="h-10 border rounded px-4 w-full bg-gray-50"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
