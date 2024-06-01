import { FC } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SamplePreparation, submitSamplePreparation } from "../../../services";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useAuth } from "../../../context/auth";
import Swal from "sweetalert2";

interface SamplePreparationFormProps {
  row: SamplePreparation;
  removeSumittedRow: (collectionSystemId: string) => void;
}

interface InitialValues {
  jobNumber: string;
  despatchDate: Date | null;
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
  preparationDate: Date | null;
  createdBy: string;
}

const SamplePreparationForm: FC<SamplePreparationFormProps> = ({
  row,
  removeSumittedRow,
}) => {
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: submitSamplePreparation,
  });

  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    console.log(values, formikHelpers);
    try {
      const { despatchDate, preparationDate, ...rest } = values;
      await mutation.mutateAsync({
        despatchDate: dayjs(despatchDate).format("YYYY-MM-DD"),
        preparationDate: dayjs(preparationDate).format("YYYY-MM-DD"),
        ...rest,
      });
      removeSumittedRow(row.collectionSystemId);
      Swal.fire("Successfully Inserted!");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: InitialValues = {
    collectionSystemId: row.collectionSystemId,
    commodity: "",
    createdBy: user?.employee_id as string,
    despatchDate: row.despatchDate ? new Date(row.despatchDate) : null,
    jobNumber: row.jobNumber,
    jrfNumber: row.jrfNumber,
    labNumber: row.labNumber,
    plantQrCode: row.plantQrCode,
    plantSealNo: row.plantSealNo,
    preparationDate: row.preparationDate ? new Date(row.preparationDate) : null,
    refereeQrCode: row.refereeQrCode,
    refereeSealNo: row.refereeSealNo,
    tcrcQrCode: row.tcrcQrCode,
    tcrcSampleId: row.tcrcSampleId,
    tcrcSealNo: row.tcrcSealNo,
    tmSealNo: row.tmSealNo,
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
          <td className="p-2 whitespace-nowrap sticky left-0 z-50">
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
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="tcrcSealNo"
                name="tcrcSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="plantSealNo"
                name="plantSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="refereeSealNo"
                name="refereeSealNo"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="tcrcQrCode"
                name="tcrcQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="plantQrCode"
                name="plantQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <Field
                id="refereeQrCode"
                name="refereeQrCode"
                className="h-10 border rounded px-4 w-full bg-gray-50 min-w-60"
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

export default SamplePreparationForm;
