import { FC } from "react";
import Select from "react-tailwindcss-select";
import { SelectProps, SelectValue } from "react-tailwindcss-select/dist/components/type";

const options = [
    { value: "201571", label: "Chemist1" },
    { value: "201572", label: "Chemist2" },
    { value: "201573", label: "Chemist3" }
];

const ChemistDropdown: FC<Omit<SelectProps, "options">> = ({ ...props }) => {
    return (
        <Select
            options={options}
            isMultiple
            classNames={{
                searchBox: ""
            }}
            {...props}
        />
    );
}

export default ChemistDropdown;

interface Chemist {
    "employeeid": string;
    "name": string;
}



export const getTranformData = (chemists: Array<Chemist>) => {
    return chemists.map(d => ({
        value: d.employeeid,
        label: d.name
    })) as unknown as SelectValue
}