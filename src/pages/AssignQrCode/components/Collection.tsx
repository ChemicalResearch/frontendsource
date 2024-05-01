import { FC, Fragment, useState } from "react";
import { Formik, FormikHelpers } from "formik";
import Datepicker, {
  DateType,
  DateValueType,
} from "react-tailwindcss-datepicker";
import { submitSampleCollection, type Collection } from "../../../services";
import {
  VehicleTypeDropdown,
  UnitDropdown,
  RakeTypeDropdown,
} from "../../../components/dropdown";
import { useAuth } from "../../../context/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QRImage from "../../../components/QRImage";
import { sampleCollectionOptions } from "../index";

interface CollectionProps extends Collection {}

interface InitialValues {
  jobNumber: string;
  collectionNumber: string;
  vehicleTypeNumber: string;
  vehicleNumber: string;
  quantity: string;
  unitNumber: string;
  createdBy: string;
}

const CollectionCard: FC<CollectionProps> = ({
  jobNumber,
  commodityName,
  collectionNumber,
  customerName,
  totalSampleCount,
}) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: submitSampleCollection,
    // onMutate: async () => {
    //     // Cancel any outgoing refetch
    //     // (so they don't overwrite our optimistic update)
    //     await queryClient.cancelQueries(sampleCollectionOptions);
    //     // Snapshot the previous value
    //     const previousData = queryClient.getQueryData(sampleCollectionOptions.queryKey);
    //     const collectionSummaries = previousData?.collectionSummaries?.map(x => {
    //         if (x.jobNumber === jobNumber) {
    //             return ({
    //                 ...x,
    //                 totalSampleCount: (Number(x.totalSampleCount) + 1).toString()
    //             })
    //         }
    //         return x;
    //     }) || [];
    //     console.log({collectionSummaries})
    //     // Optimistically update to the new value
    //     if (previousData) {
    //         queryClient.setQueryData(sampleCollectionOptions.queryKey, {
    //             ...previousData,
    //             collectionSummaries
    //         })
    //     }
    //     return { previousData }
    // }
    onSuccess() {
      const previousData = queryClient.getQueryData(
        sampleCollectionOptions.queryKey
      );
      const collectionSummaries =
        previousData?.collectionSummaries?.map((x) => {
          if (x.jobNumber === jobNumber) {
            return {
              ...x,
              totalSampleCount: (Number(x.totalSampleCount) + 1).toString(),
            };
          }
          return x;
        }) || [];
      console.log({ collectionSummaries });
      // Optimistically update to the new value
      if (previousData) {
        queryClient.setQueryData(sampleCollectionOptions.queryKey, {
          ...previousData,
          collectionSummaries,
        });
      }
    },
  });

  const [value, setValue] = useState<{
    startDate: DateType;
    endDate: DateType;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue as any);
  };

  const onSubmit = (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    mutation.mutateAsync(values).then(() => {
      formikHelpers.resetForm();
      formikHelpers.setSubmitting(false);
    });
  };

  const initialValues: InitialValues = {
    jobNumber,
    collectionNumber,
    vehicleTypeNumber: "",
    vehicleNumber: "",
    quantity: "",
    unitNumber: "",
    createdBy: user?.employee_id!,
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
          <div className="grid gap-8 gap-y-8 text-sm grid-cols-1 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="grid gap-8 text-sm grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="full_name">Sample Id : {jobNumber}</label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">Vehicle Type : ashs</label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">Vehicle No. : 3773636</label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Sample Collection Date Time : 12-jun-2024 10:00AM
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="full_name">Plant : {}</label>
                </div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-10">
                <div className="md:col-span-2">
                  <label htmlFor="email">Start Date Time</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">End Date Time</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">TCRC QR Code</label>
                  <VehicleTypeDropdown
                    name="vehicleTypeNumber"
                    value={values.vehicleTypeNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Sample Preparation Date</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Lab</label>
                  <VehicleTypeDropdown
                    name="vehicleTypeNumber"
                    value={values.vehicleTypeNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Despatch Date</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
              </div>
              <div className="md:col-span-4 text-left mt-10">
                <div className="inline-flex items-end">
                  <button
                    disabled={isSubmitting}
                    onClick={() => handleSubmit()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {mutation.isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <div className="inline-flex items-end">
                  <a href="/sample-collection-details">
                    <button
                      style={{ marginLeft: "15px" }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-gray-600">
              {mutation.data?.data?.imageUrl ? (
                <QRImage image={mutation.data?.data?.imageUrl} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CollectionCard;
