import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import VerificationHeadRow from "./VerificationHeadRow";
import {
  getVerificationJRFs,
  getVerificationList,
  GetVerificationListResponse,
  submitVerification,
} from "../../services/verification-of-test-result";
import { Formik, FormikHelpers } from "formik";
import Swal from "sweetalert2";

interface VerificationSubmitFormInitialValues {
  testReport: File | null;
  gcvReport: File | null;
  jrfNumber: string;
}

const VerificationOfTestResult = () => {
  const { data } = useQuery({
    queryKey: ["verification-jrfs"],
    queryFn: async () => {
      const { data } = await getVerificationJRFs();
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: submitVerification,
  });

  const [jrfNumber, setJrfNumber] = useState<string>("");
  const [verificationList, setVerificationList] =
    useState<GetVerificationListResponse>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJrfNumber((prev) => (prev === value ? "" : value));
  };

  const getTestProgress = useCallback(async () => {
    if (!jrfNumber) {
      setVerificationList([]);
      return;
    }
    try {
      const { data } = await getVerificationList({ jrfNumber });
      setVerificationList(data);
    } catch (e) {
    } finally {
    }
  }, [jrfNumber]);

  useEffect(() => {
    getTestProgress();
  }, [getTestProgress]);

  const onSubmit = async (
    values: VerificationSubmitFormInitialValues,
    formikHelpers: FormikHelpers<VerificationSubmitFormInitialValues>
  ) => {
    try {
      const { gcvReport, jrfNumber, testReport } = values;
      let formData = new FormData();
      if (testReport) {
        formData.append("testReport", testReport);
      }
      if (gcvReport) {
        formData.append("gcvReport", gcvReport);
      }
      formData.append("jrfNumber", jrfNumber);
      await mutation.mutateAsync(formData);
      Swal.fire({
        title: "Submit successfully",
        icon: "success",
      });
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: VerificationSubmitFormInitialValues = {
    gcvReport: null,
    jrfNumber,
    testReport: null,
  };

  return (
    <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-4">
        <div className="col-span-1">
          <div className="font-semibold text-left mb-2">JRF No. Alive</div>
          <ul>
            {data?.map((x, key) => (
              <li key={key}>
                <label className="flex items-center font-medium text-gray-800 cursor-pointer">
                  {x.jrfNumber}
                  <input
                    type="checkbox"
                    value={x.jrfNumber}
                    checked={jrfNumber === x.jrfNumber}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ml-2 cursor-pointer"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          {!!verificationList?.length ? (
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <VerificationHeadRow />
                  </thead>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                  >
                    {({ setFieldValue, submitForm }) => (
                      <tbody className="text-sm divide-y divide-gray-100">
                        {verificationList?.map((verification, key) => (
                          <tr key={key}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.testEndDate}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.jrfNumber}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.tcrcQrCode}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.tcrcSampleId}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.arbTM}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.adbIM}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.adbVM}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.adbAsh}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.adbGCV}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.ebEM}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {verification.verificationFlag}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
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
                                  setFieldValue(
                                    "testReport",
                                    event?.currentTarget?.files?.[0]
                                  );
                                }}
                              />
                            </td>
                            <td className="p-2 whitespace-nowrap">
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
                                  setFieldValue(
                                    "gcvReport",
                                    event?.currentTarget?.files?.[0]
                                  );
                                }}
                              />
                            </td>
                            <td
                              className="p-2 whitespace-nowrap"
                            >
                              <div className="flex items-center justify-center">
                                <button
                                  type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                  onClick={submitForm}
                                >
                                  Save
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </Formik>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VerificationOfTestResult;
