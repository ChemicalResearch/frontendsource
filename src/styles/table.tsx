import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const TableContainer: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.TableHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <div className={twMerge("overflow-x-auto", className)} {...props} />
  );
};

export const Table: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.TableHTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <table
      className={twMerge(
        "table-auto min-w-full border-collapse border border-custom-gray",
        className
      )}
      {...props}
    />
  );
};

export const Thead: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <thead
      className={twMerge(
        "text-xs font-semibold text-gray-400 bg-gray-50",
        className
      )}
      {...props}
    />
  );
};

export const Tbody: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <tbody
      className={twMerge("text-sm divide-y divide-gray-100", className)}
      {...props}
    />
  );
};

export const Tr: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableRowElement>,
      HTMLTableRowElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <tr
      className={twMerge("odd:bg-custom-gray even:bg-custom-white", className)}
      {...props}
    />
  );
};

export const Th: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <th
      className={twMerge(
        "py-4 px-2 bg-black text-white whitespace-nowrap border border-custom-gray sticky top-0 z-50",
        className
      )}
      {...props}
    />
  );
};

export const Td: FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    >
  >
> = ({ className, ...props }) => {
  return (
    <td
      className={twMerge("px-2 border border-custom-gray", className)}
      {...props}
    />
  );
};
