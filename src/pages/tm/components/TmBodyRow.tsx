import { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Field, FormikHelpers } from "formik";
import { TmData, submitTmEntry } from "../../../services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Swal from "sweetalert2";

type TmFormikInitialValues = {
  tcrcQRCode: string;
  tmEntryDate: Date | null;
  tmValue: string;
};

type TmBodyRowProps = {
  tm: TmData;
};

const TmBodyRow: FC<TmBodyRowProps> = ({ tm }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: submitTmEntry,
  });

  const initialValues: TmFormikInitialValues = {
    tcrcQRCode: tm.tcrcQRCode,
    tmEntryDate: null,
    tmValue: tm.tmValue,
  };

  const onSubmit = async (
    values: TmFormikInitialValues,
    formikHelpers: FormikHelpers<TmFormikInitialValues>
  ) => {
    try {
      const { tmEntryDate, ...rest } = values;
      await mutation.mutateAsync(
        {
          ...rest,
          tmEntryDate: dayjs(tmEntryDate).format("YYYY-MM-DD"),
        },
        {
          onSuccess(data) {
            if (data) {
              queryClient.setQueryData(
                ["tms"],
                (tms: Array<TmData> | undefined) => {
                  return tms?.filter(
                    (tm) => tm.tcrcQRCode !== values.tcrcQRCode
                  );
                }
              );
            }
          },
        }
      );
      Swal.fire("Successfully Submited");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue, submitForm }) => (
        <tr>
          <td className="p-2 whitespace-nowrap w-[200px]">
            <div className="text-left">{values.tcrcQRCode}</div>
          </td>
          <td className="p-2 whitespace-nowrap w-[100px]">
            <DatePicker
              selected={values.tmEntryDate}
              onChange={(date) => setFieldValue("tmEntryDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              className="h-10 border rounded px-4 bg-gray-50 w-[100px]"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <Field
              name="tmValue"
              className="h-10 border mt-1 rounded px-4 w-full min-w-24"
              type="text"
            />
          </td>
          <td className="p-2 whitespace-nowrap w-[80px]">
            <button
              disabled={isSubmitting}
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none mx-auto"
              onClick={submitForm}
            >
              Save
            </button>
          </td>
        </tr>
      )}
    </Formik>
  );
};

export default TmBodyRow;
