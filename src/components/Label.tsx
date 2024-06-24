import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Label: FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={twMerge(
        "block mb-2 text-sm text-gray-900 font-semibold",
        className
      )}
      {...rest}
    />
  );
};

export default Label;
