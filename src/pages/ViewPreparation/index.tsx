import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  viewSamplePreparation,
  getSamplePreparation,
  GetSamplePreparationBody,
} from "../../services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
import ViewPreparationTableHead from "./ViewPreparationTableHead";
import { TableContainer, Table, Tbody, Tr, Td } from "../../styles/table";

interface InitialValues {
  fromDate: Date | null;
  toDate: Date | null;
  plantId: string;
}

function ViewPreparation() {
  const [{ fromDate, plantId, toDate }, setSamplePreparationBody] =
    useState<GetSamplePreparationBody>({} as GetSamplePreparationBody);

  const { data, isPending } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data } = await viewSamplePreparation();
      return data;
    },
  });

  const { data: preparations, isPending: isPreparationPending } = useQuery({
    queryKey: ["prepartaions", fromDate, plantId, toDate],
    queryFn: async () => {
      const { data } = await getSamplePreparation({
        fromDate,
        plantId,
        toDate,
      });
      return data;
    },
    enabled: Boolean(fromDate && plantId && toDate),
  });

  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      const { fromDate, plantId, toDate } = values;
      setSamplePreparationBody({
        plantId,
        fromDate: dayjs(fromDate).format("YYYY-MM-DD"),
        toDate: dayjs(toDate).format("YYYY-MM-DD"),
      });
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: InitialValues = {
    plantId: "",
    fromDate: null,
    toDate: null,
  };

  console.log({ preparations, isPreparationPending });

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        displayPlantModels
        onSubmit={onSubmit}
      >
        {({ submitForm, values, isSubmitting, setFieldValue }) => {
          return (
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-7 items-end m-3">
              <div className="md:col-span-2">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  From Date
                </label>
                <DatePicker
                  selected={values.fromDate}
                  onChange={(date) => setFieldValue("fromDate", date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  withPortal
                  className="h-10 border rounded px-4 bg-gray-50 w-full"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  To Date
                </label>
                <DatePicker
                  selected={values.toDate}
                  onChange={(date) => setFieldValue("toDate", date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="YYYY-MM-DD"
                  withPortal
                  className="h-10 border rounded px-4 bg-gray-50 w-full"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  Select Plant
                </label>
                <Field
                  as="select"
                  id="plantId"
                  name="plantId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  disabled={isPending}
                >
                  <option>Select</option>
                  {data?.map((plant) => (
                    <option key={plant.plantId} value={plant.plantId}>
                      {plant.plantName}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="md:col-span-1">
                <button
                  onClick={submitForm}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                  disabled={isSubmitting}
                >
                  Search
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
      <TableContainer className="mx-3">
        <Table>
          <ViewPreparationTableHead />
          <Tbody>
            {preparations?.map((preparation, key) => (
              <Tr key={key}>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcReferenceNumber}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcSampleId}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.plannedPrepDate}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tmSealNo}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcSealNo}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.plantSealNo}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.refereeSealNo}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.tcrcQrCode}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.plantQrCode}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.refereeQrCode}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.preparationDate}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.despatchDate}
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ViewPreparation;
