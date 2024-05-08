import { FC, useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import Datepicker, {
  DateType,
  DateValueType,
} from "react-tailwindcss-datepicker";
import { Model, submitSampleCollection } from "../../../services";
import { VehicleTypeDropdown } from "../../../components/dropdown";
import { useAuth } from "../../../context/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QRImage from "../../../components/QRImage";

interface CollectionProps {
  model: Model;
  labMasters: Array<{
    id: number;
    labName: string;
    number: string;
  }>;
}

interface InitialValues {
  jobNumber: string;
  despatchDate: string;
  collectionSystemId: string;
  commodity: string;
  labNumber: string;
  tcrcSampleId: string;
  tcrcQrCode: string;
  plantQrCode: string;
  refereeQrCode: string;
  tcrcSealNo: string;
  plantSealNo: string;
  refereeSealNo: string;
  tmSealNo: string;
  jrfNumber: string;
  preparationDate: string;
  createdBy: string;
}

const CollectionCard: FC<CollectionProps> = ({ model, labMasters }) => {
  console.log("model", model);
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
      // const previousData = queryClient.getQueryData(
      //   sampleCollectionOptions.queryKey
      // );
      // const collectionSummaries =
      //   previousData?.collectionSummaries?.map((x) => {
      //     if (x.jobNumber === jobNumber) {
      //       return {
      //         ...x,
      //         totalSampleCount: (Number(x.totalSampleCount) + 1).toString(),
      //       };
      //     }
      //     return x;
      //   }) || [];
      // console.log({ collectionSummaries });
      // Optimistically update to the new value
      // if (previousData) {
      //   queryClient.setQueryData(sampleCollectionOptions.queryKey, {
      //     ...previousData,
      //     collectionSummaries,
      //   });
      // }
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

  const onSubmit = () =>
    // values: InitialValues,
    // formikHelpers: FormikHelpers<InitialValues>
    {
      // mutation.mutateAsync(values).then(() => {
      //   formikHelpers.resetForm();
      //   formikHelpers.setSubmitting(false);
      // });
    };

  const initialValues: InitialValues = {
    collectionSystemId: model.collectionSystemId,
    commodity: "",
    createdBy: user?.employee_id!,
    jobNumber: model.jobNumber,
    jrfNumber: model.jrfNumber,
    labNumber: model.labNumber,
    plantQrCode: model.plantQrCode,
    plantSealNo: model.plantSealNo,
    preparationDate: model.preparationDate,
    refereeQrCode: model.refereeQrCode,
    refereeSealNo: model.refereeSealNo,
    tcrcQrCode: model.tcrcQrCode,
    tcrcSampleId: model.tcrcSampleId,
    tcrcSealNo: model.tcrcSealNo,
    tmSealNo: model.tmSealNo,
    despatchDate: model.despatchDate,
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
                  <label htmlFor="full_name">
                    Sample Id : {model?.collectionSystemId}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Vehicle Type : {model?.vehicleType}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Vehicle No. : {model?.vehicleNumber}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Sample Collection Date Time : 12-jun-2024 10:00AM
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="full_name">Plant : {model?.plant}</label>
                </div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-10">
                <div className="md:col-span-2">
                  <label htmlFor="email">TCRC QR Code</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Plant QR Code</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Retention QR Code</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                  <Field
                    as="select"
                    name="unitNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select</option>
                    {labMasters?.map((lab) => (
                      <option key={lab.number} value={lab.number}>
                        {lab.labName}
                      </option>
                    ))}
                  </Field>
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
                <div className="md:col-span-2">
                  <label htmlFor="city">TCRC Seal No</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Plant Seal No</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Retention Seal No</label>
                  <input
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
