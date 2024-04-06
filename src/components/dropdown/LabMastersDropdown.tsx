import { useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { getSamplePreparation } from "../../services";

type LabMastersDropdownProps = {
    name?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

export const LabMastersDropdown: FC<LabMastersDropdownProps> = ({ name,value, onChange }) => {
    const { data } = useQuery({
        queryKey: ["lab-masters"],
        queryFn: async () => {
          const { data } = await getSamplePreparation();
          return data.labMasters;
        }
      })

    const renderLabMasters = useMemo(() => data?.map((lab) => <option key={lab.id} value={lab.id}>{lab.labName}</option>)
        , [data])

    return (
        <select
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value=""></option>
            {renderLabMasters}
        </select>
    )
}