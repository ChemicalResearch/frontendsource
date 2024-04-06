import { useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { getSampleCollection } from "../../services";

type UnitDropdownProps = {
    name?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export const UnitDropdown: FC<UnitDropdownProps> = ({ name,value, onChange }) => {
    const { data } = useQuery({
        queryKey: ["units"],
        queryFn: async () => {
            const { data } = await getSampleCollection();
            return data.unitModel;
        }
    })

    const renderUnits = useMemo(() => data?.map((unit) => <option key={unit.identifier} value={unit.identifier}>{unit.name}</option>)
        , [data])

    return (
        <select
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value=""></option>
            {renderUnits}
        </select>
    )
}