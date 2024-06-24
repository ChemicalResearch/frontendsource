import { useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { getSampleCollection } from "../../services";

type VehicleTypeDropdownProps = {
    name?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export const VehicleTypeDropdown: FC<VehicleTypeDropdownProps> = ({ name,value, onChange }) => {
    const { data } = useQuery({
        queryKey: ["vehicle-types"],
        queryFn: async () => {
            const { data } = await getSampleCollection();
            return data.vehicleType;
        }
    })

    const renderVehicleTypes = useMemo(() => data?.map((vehicle) => <option key={vehicle.number} value={vehicle.number}>{vehicle.name}</option>)
        , [data])

    return (
        <select
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value=""></option>
            {renderVehicleTypes}
        </select>
    )
}