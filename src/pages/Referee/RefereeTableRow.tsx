import { FC } from "react";
import { RefereeSetData } from "../../services/referee";
import { Td, Tr } from "../../styles/table";
import { Field, Formik, FormikHelpers } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { useMutation } from "@tanstack/react-query";
import { submitRefereeData } from "../../services";
import dayjs from "dayjs";
import Swal from "sweetalert2";

type RefereeTableRowProps = {
  preparation: RefereeSetData;
  refetch?: any;
};

type RefereeTableDataRowInitialValues = {
  advice: File | null;
  paymentDate: Date | undefined;
  labDetail: string;
  resultDate: Date | undefined;
  result: File | null;
  qrcode: string;
};

const RefereeTableRow: FC<RefereeTableRowProps> = ({ preparation, refetch }) => {
  const mutation = useMutation({
    mutationFn: submitRefereeData,
  });
  const onSubmit = async (
    values: RefereeTableDataRowInitialValues,
    formikHelpers: FormikHelpers<RefereeTableDataRowInitialValues>
  ) => {
    try {
      const { resultDate, paymentDate, result, advice, labDetail, qrcode } =
        values;
      const formData = new FormData();
      formData.append("qrcode", qrcode);
      formData.append("labDetail", labDetail);
      if (result) {
        formData.append("result", result);
      }
      if (advice) {
        formData.append("advice", advice);
      }
      if (resultDate) {
        formData.append("resultDate", dayjs(resultDate).format("YYYY-MM-DD"));
      }
      if (paymentDate) {
        formData.append("paymentDate", dayjs(paymentDate).format("YYYY-MM-DD"));
      }

      await mutation.mutateAsync(formData);
      refetch?.();
      Swal.fire("Successfully Saved!");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues = {
    advice: null,
    paymentDate: undefined,
    labDetail: "",
    resultDate: undefined,
    result: null,
    qrcode: preparation.tcrcQrCode,
  };
  return (
    <Formik<RefereeTableDataRowInitialValues>
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, submitForm, setFieldValue }) => (
        <Tr>
          <Td>{preparation.tcrcSampleId}</Td>
          <Td>{preparation.tcrcQrCode}</Td>
          <Td>{preparation.adbIM}</Td>
          <Td>{preparation.adbVM}</Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.adbAsh}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.adbFc}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.adbBand}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.adbGCV}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.arbTM}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.arbVM}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.arbAsh}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.arbFC}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.arbGCV}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.arbBand}
            </div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.emEM}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.emVM}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.emAsh}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.emFC}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">{preparation.emGCV}</div>
          </Td>
          <Td>
            <div className="font-semibold text-center">
              {preparation.emBand}
            </div>
          </Td>
          <Td>
            <ReactDatePicker
              selected={values.paymentDate}
              onChange={(date) => setFieldValue("paymentDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              withPortal
              className="h-10 border rounded px-4 bg-gray-50 w-32"
            />
          </Td>
          <Td>
            <input
              type="file"
              className="block w-48 text-sm text-gray-500
                              file:me-4 file:py-2 file:px-4
                              file:rounded-lg file:border-0
                              file:text-sm file:font-semibold
                              file:bg-blue-600 file:text-white
                              hover:file:bg-blue-700
                              file:disabled:opacity-50 file:disabled:pointer-events-none
                            "
              onChange={(event) => {
                setFieldValue("advice", event?.currentTarget?.files?.[0]);
              }}
            />
          </Td>
          <Td>
            <Field
              id="labDetail"
              name="labDetail"
              className="h-10 border rounded px-4 w-full bg-gray-50 min-w-40"
            />
          </Td>
          <Td>
            <ReactDatePicker
              selected={values.resultDate}
              onChange={(date) => setFieldValue("resultDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              withPortal
              className="h-10 border rounded px-4 bg-gray-50 w-32"
            />
          </Td>
          <Td>
            <input
              type="file"
              className="block w-48 text-sm text-gray-500
                              file:me-4 file:py-2 file:px-4
                              file:rounded-lg file:border-0
                              file:text-sm file:font-semibold
                              file:bg-blue-600 file:text-white
                              hover:file:bg-blue-700
                              file:disabled:opacity-50 file:disabled:pointer-events-none
                            "
              onChange={(event) => {
                setFieldValue("result", event?.currentTarget?.files?.[0]);
              }}
            />
          </Td>
          <Td>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
              onClick={submitForm}
              disabled={isSubmitting}
            >
              Save
            </button>
          </Td>
        </Tr>
      )}
    </Formik>
  );
};

export default RefereeTableRow;
