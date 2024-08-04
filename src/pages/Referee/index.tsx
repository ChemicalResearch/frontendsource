import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {
//   viewSamplePreparation,
//   getSamplePreparation,
//   GetSamplePreparationBody,
// } from "../../services";
import {
  viewPlants,
  GetRefereeBody,
  getRefereeData,
  getRefereeDataSet,
} from "../../services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
import ViewPreparationTableHead from "./ViewPreparationTableHead";
import { TableContainer, Table, Tbody, Tr, Td } from "../../styles/table";
import TextInput from "../../components/TextInput";

interface InitialValues {
  fromDate: Date | null;
  toDate: Date | null;
  plantId: string;
  sampleId: string;
}

function Referee() {
  const [{ fromDate, plantId, toDate, sampleId }, setRefereeBody] =
    useState<GetRefereeBody>({} as GetRefereeBody);

  const { data, isPending } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data } = await viewPlants();
      return data;
    },
  });
  const { data: refereelists, isPending: isRefereePending } = useQuery({
    queryKey: ["refereelists"],
    queryFn: async () => {
      const { data } = await getRefereeDataSet();
      return data;
    },
  });

  const { data: searchreferee, isPending: isPreparationPending } = useQuery({
    queryKey: ["searchreferee", fromDate, plantId, toDate, sampleId],
    queryFn: async () => {
      const { data } = await getRefereeData({
        fromDate,
        plantId,
        toDate,
        sampleId,
      });
      return data;
    },
    enabled: Boolean((fromDate && plantId && toDate) || sampleId),
  });

  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      const { fromDate, plantId, toDate, sampleId } = values;
      console.log({ values });
      setRefereeBody({
        plantId,
        fromDate: dayjs(fromDate).format("YYYY-MM-DD"),
        toDate: dayjs(toDate).format("YYYY-MM-DD"),
        sampleId,
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
    sampleId: "",
  };

  console.log({ searchreferee, isPreparationPending });

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
            <div className="p-2 mt-3 flex flex-row items-center mb-3">
              <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-2 bg-white p-2 items-end rounded">
                  <div className="w-[180px]">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Collection From Date
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
                  <div className="w-[180px]">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Collection To Date
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
                  <div className="w-[200px]">
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
                  <button
                    onClick={submitForm}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                    disabled={isSubmitting}
                  >
                    Search
                  </button>
                </div>
                <p className="mt-9">OR</p>
                <div className="flex flex-row gap-2 bg-white p-2 items-end rounded">
                  <TextInput
                    label="sampleId"
                    id="sampleId"
                    name="sampleId"
                    className="md:col-span-1"
                  />
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
            </div>
          );
        }}
      </Formik>
      <TableContainer className="mx-3">
        <Table>
          <ViewPreparationTableHead />
          <Tbody>
            {searchreferee?.map((preparation, key) => (
              <Tr key={key}>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcSampleId}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.jrfNumber}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcQrCode}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.adbIM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.adbVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbFc}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbTM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbFC}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emEM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emFC}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.jrfLink}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {/* {preparation.paymentDate} */}
                    <DatePicker
                      dateFormat="yyyy-MM-dd"
                      placeholderText="YYYY-MM-DD"
                      withPortal
                      className="h-10 border rounded px-4 bg-gray-50 w-full"
                    />
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    input field for file upload
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    lab details in text area
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    <DatePicker
                      dateFormat="yyyy-MM-dd"
                      placeholderText="YYYY-MM-DD"
                      withPortal
                      className="h-10 border rounded px-4 bg-gray-50 w-full"
                    />
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    input field for file upload
                  </div>
                </Td>
                <Td>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                  >
                    Save
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <TableContainer className="mx-3">
        <Table>
          <ViewPreparationTableHead />
          <Tbody>
            {refereelists?.map((preparation, key) => (
              <Tr key={key}>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcSampleId}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.jrfNumber}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.tcrcQrCode}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.adbIM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    {preparation.adbVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbFc}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.adbGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbTM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbFC}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.arbBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emEM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emVM}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emAsh}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emFC}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emGCV}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.emBand}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {preparation.jrfLink}
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    {/* {preparation.paymentDate} */}
                    <DatePicker
                      dateFormat="yyyy-MM-dd"
                      placeholderText="YYYY-MM-DD"
                      withPortal
                      className="h-10 border rounded px-4 bg-gray-50 w-full"
                    />
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    input field for file upload
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    lab details in text area
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    <DatePicker
                      dateFormat="yyyy-MM-dd"
                      placeholderText="YYYY-MM-DD"
                      withPortal
                      className="h-10 border rounded px-4 bg-gray-50 w-full"
                    />
                  </div>
                </Td>
                <Td className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    input field for file upload
                  </div>
                </Td>
                <Td>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                  >
                    Save
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Referee;
