import { FC } from "react";

type RakeTypeDropdownProps = {
    name?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export const RakeTypeDropdown: FC<RakeTypeDropdownProps> = ({ name,value, onChange }) => {
    return (
        <select
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="OCP">OCP</option>
            <option value="IR">IR</option>
        </select>
    )
}