import { getLabactivitySamples } from "../../services/lab-activity-jrfs";
import { lazy, useState, Suspense, Fragment } from "react";
import LabActivitySampleHeadRow from "./LabActivitySampleHeadRow";
import LabActivitySampleBodyRow from "./LabActivitySampleBodyRow";
import { useQuery } from "@tanstack/react-query";
import { Table, TableContainer, Tbody } from "../../styles/table";
import { withRole } from "../../hooks";
import { menuRolesMap } from "../../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";

const JrfNoList = lazy(() => import("./JrfNoList"));

const LabActivity = () => {
  const [jrfNumber, setJrfNumber] = useState<string>("");
  const { data, refetch } = useQuery({
    queryKey: ["lab-activity-sample", jrfNumber],
    queryFn: async () => {
      const { data } = await getLabactivitySamples({ jrfNumber });
      return data;
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJrfNumber((prev) => (prev === value ? "" : value));
  };

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-4 m-3">
      <div className="col-span-1">
        <Suspense fallback={<Fragment />}>
          <JrfNoList jrfNumber={jrfNumber} onChange={handleChange} />
        </Suspense>
      </div>
      <div className="col-span-3">
        {!!data?.length ? (
          <TableContainer>
            <Table className="min-w-[1200px]">
              <LabActivitySampleHeadRow />
              <Tbody>
                {data?.map((sample, key) => (
                  <LabActivitySampleBodyRow
                    key={key}
                    sample={sample}
                    refetch={refetch}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
};

export default withRole(LabActivity, {
  roles: menuRolesMap["Laboratory activity"],
  OnNoAccess: () => <Navigate to="/" replace />,
});
