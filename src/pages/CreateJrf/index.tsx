import { useQuery } from "@tanstack/react-query";
import { getJRFList } from "../../services";
import { Fragment, lazy, useState, Suspense } from "react";
import type { FilterCreateJrfInitialValues, OnSubmit } from "./CreateJrfFilter";

const FilterCreateJrf = lazy(() => import("./CreateJrfFilter"));
const CreateJrfForm = lazy(() => import("./CreateJrfForm"));

const initialValues: FilterCreateJrfInitialValues = {
  plantId: "",
  despatchDate: "",
};

const CreateJrf = () => {
  const [{ despatchDate, plantId }, setData] =
    useState<FilterCreateJrfInitialValues>(initialValues);

  const { data, refetch } = useQuery({
    queryKey: ["sample-preparation-list", despatchDate, plantId],
    queryFn: async () => {
      const { data } = await getJRFList({
        despatchDate,
        plantId,
      });
      return data;
    },
    enabled: Boolean(despatchDate && plantId),
  });

  const onSubmit: OnSubmit = async (values, formikHelpers) => {
    try {
      setData(values);
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <>
      <Suspense fallback={<Fragment />}>
        <FilterCreateJrf initialValues={initialValues} onSubmit={onSubmit} />
      </Suspense>
      {data?.length ? (
        <Suspense fallback={<Fragment />}>
          <CreateJrfForm plantId={plantId} data={data} refetch={refetch} />
        </Suspense>
      ) : null}
    </>
  );
};

export default CreateJrf;
