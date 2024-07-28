import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment, useCallback, useEffect, useState } from "react";
import VerificationHeadRow from "./VerificationHeadRow";
import {
  getVerificationJRFs,
  getVerificationList,
  GetVerificationListResponse,
  submitVerification,
} from "../../services/verification-of-test-result";
import { Formik, FormikHelpers } from "formik";
import Swal from "sweetalert2";
import { DownloadLinkButton } from "../../components/buttons";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../styles/table";
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
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-4 m-2">
      <div className="col-span-1">
        <TableContainer className="h-[calc(100vh-100px)]">
          <Table className="max-w-[320px] min-w-0">
            <Thead>
              <Tr>
                <Th colSpan={2}>JRF No.</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((x, key) => (
                <Tr key={key}>
                  <Td> {x.jrfNumber}</Td>
                  <Td>
                    <input
                      type="checkbox"
                      value={x.jrfNumber}
                      checked={jrfNumber === x.jrfNumber}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ml-2 cursor-pointer"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="col-span-3">
        {!!verificationList?.length ? (
          <TableContainer className="h-[calc(100vh-100px)]">
            <Table className="min-w-[1800px]">
              <VerificationHeadRow />
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                enableReinitialize
              >
                {({ setFieldValue, submitForm }) => (
                  <Tbody>
                    {verificationList?.map((verification, key, arr) => (
                      <Tr key={key}>
                        <Td>
                          <div className="text-left">
                            {verification.testEndDate}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.tcrcQrCode}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.jrfNumber}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.tcrcSampleId}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.adbIM}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.adbAsh}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.adbGCV}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.adbFc}</div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.adbBand}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.arbVM}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.arbTM}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.arbFC}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.arbGCV}</div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.arbBand}
                          </div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emEM}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emVM}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emAsh}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emFC}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emGCV}</div>
                        </Td>
                        <Td>
                          <div className="text-left">{verification.emBand}</div>
                        </Td>
                        <Td>
                          <div className="text-left">
                            {verification.testReport}
                          </div>
                        </Td>
                        {key == 0 ? (
                          <Fragment>
                            <Td
                              className="p-2 whitespace-nowrap"
                              rowSpan={arr.length}
                            >
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
                            </Td>
                            <Td
                              className="p-2 whitespace-nowrap"
                              rowSpan={arr.length}
                            >
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
                            </Td>
                          </Fragment>
                        ) : null}
                        {key == 0 ? (
                          <Fragment>
                            <Td rowSpan={arr.length}>
                              <div className="flex items-center justify-center gap-2">
                                <DownloadLinkButton
                                  href={verification.jrfLink}
                                  className="mx-auto"
                                />
                                <button
                                  type="button"
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                  onClick={submitForm}
                                >
                                  Save
                                </button>
                              </div>
                            </Td>
                          </Fragment>
                        ) : null}
                      </Tr>
                    ))}
                  </Tbody>
                )}
              </Formik>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
};

export default VerificationOfTestResult;
