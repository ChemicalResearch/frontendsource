import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment, useCallback, useEffect, useState } from "react";
import VerificationHeadRow from "./VerificationHeadRow";
import {
  getVerificationJRFs,
  getVerificationList,
  GetVerificationListResponse,
  submitVerification,
} from "../../services/view-jrf";
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
import { withRole } from "../../hooks";
import { menuRolesMap } from "../../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";
interface VerificationSubmitFormInitialValues {
  testReport: File | null;
  gcvReport: File | null;
  jrfNumber: string;
}

const viewJrf = () => {
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
          <Table className="max-w-[320px] min-w-0 w-full">
            <Thead>
              <Tr>
                <Th colSpan={4}>JRF No.</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((x, key) => (
                <Fragment key={key}>
                  <Tr>
                    <Td>
                      <input
                        type="checkbox"
                        value={x.jrfNumber}
                        checked={jrfNumber === x.jrfNumber}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                      />
                    </Td>
                    <Td colSpan={3}>{x.jrfNumber}</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan={4} className="py-0">
                      <div className="flex flex-col">
                        {x.jrfDocumentUrl ? (
                          <div className="flex items-center justify-between">
                            <p>JRF Document</p>
                            <DownloadLinkButton
                              href={x.jrfDocumentUrl}
                              className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
                            />
                          </div>
                        ) : null}
                        {x.finalReportUrl ? (
                          <div className="flex items-center justify-between">
                            <p>Final Report</p>
                            <DownloadLinkButton
                              href={x.finalReportUrl}
                              className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
                            />
                          </div>
                        ) : null}
                        {x.gcvReportUrl ? (
                          <div className="flex items-center justify-between">
                            <p>GCV Report</p>
                            <DownloadLinkButton
                              href={x.gcvReportUrl}
                              className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
                            />
                          </div>
                        ) : null}
                        {x.testReportUrl ? (
                          <div className="flex items-center justify-between">
                            <p>Test Report</p>
                            <DownloadLinkButton
                              href={x.testReportUrl}
                              className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
                            />
                          </div>
                        ) : null}
                      </div>
                    </Td>
                  </Tr>
                </Fragment>
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
                {() => (
                  <Tbody className="text-sm divide-y divide-gray-100">
                    {verificationList?.map((verification, key) => (
                      <Tr key={key}>
                        <Td>{verification.testEndDate}</Td>
                        <Td>{verification.tcrcQrCode}</Td>
                        <Td>{verification.jrfNumber}</Td>
                        <Td>{verification.tcrcSampleId}</Td>
                        <Td>{verification.arbTM}</Td>
                        <Td>{verification.adbIM}</Td>
                        <Td>{verification.arbVM}</Td>
                        <Td>{verification.adbAsh}</Td>
                        <Td>{verification.arbFC}</Td>
                        <Td>{verification.adbGCV}</Td>
                        <Td>{verification.arbGCV}</Td>
                        <Td>{verification.emEM}</Td>
                        <Td>{verification.emVM}</Td>
                        <Td>{verification.emAsh}</Td>
                        <Td>{verification.emFC}</Td>
                        <Td>{verification.emGCV}</Td>
                        <Td>{verification.emBand}</Td>
                        <Td>{verification.adbFc}</Td>
                        <Td>{verification.adbBand}</Td>
                        <Td>{verification.arbBand}</Td>
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

export default withRole(viewJrf, {
  roles: menuRolesMap["View jrf"],
  OnNoAccess: () => <Navigate to="/" replace />,
});

