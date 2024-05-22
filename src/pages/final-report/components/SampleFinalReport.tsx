import { FC } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FinalReport , submitSamplePreparation } from "../../../services";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useAuth } from "../../../context/auth";
import Swal from "sweetalert2";

interface SampleFinalReportProps {
  row: FinalReport;
  removeSumittedRow: (collectionSystemId: string) => void;
}

interface InitialValues {
    jrfNumber: string;
    labReportnumber: string;
    reportNumber: string;
    labReportDate: string;
    testReport: string;
    gcvReport: string;
}

const SampleFinalReport: FC<SampleFinalReportProps> = ({
  row
}) => {
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: submitSamplePreparation,
  });

  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    return true;
  };
  
  const initialValues: InitialValues = {
    jrfNumber:'', 
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      displayPlantModels
      onSubmit={onSubmit}
      key={row.collectionSystemId}
    >
      {({ submitForm, setFieldValue, isSubmitting, values }) => (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">
                {row.tcrcReferenceNumber}
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{row.tcrcSampleId}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{row.plannedPrepDate}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="tmSealNo"
                name="tmSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="tcrcSealNo"
                name="tcrcSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="plantSealNo"
                name="plantSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="refereeSealNo"
                name="refereeSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="tcrcQrCode"
                name="tcrcQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="plantQrCode"
                name="plantQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="refereeQrCode"
                name="refereeQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <DatePicker
                selected={values.preparationDate}
                onChange={(date) => setFieldValue("preparationDate", date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                withPortal
                className="h-10 border rounded px-4 bg-gray-50 w-32"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <DatePicker
                selected={values.despatchDate}
                onChange={(date) => setFieldValue("despatchDate", date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                withPortal
                className="h-10 border rounded px-4 bg-gray-50 w-32"
              />
            </div>
          </td>
          <td>
            <button
              onClick={submitForm}
              disabled={isSubmitting}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Save
            </button>
          </td>
        </tr>
      )}
    </Formik>
  );
};

export default SampleFinalReport;
