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
          <Table className="max-w-[320px] min-w-0">
            <Thead>
              <Tr>
                <Th colSpan={3}>JRF No.</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((x, key) => (
                <Tr key={key}>
                  <Td>
                    <input
                      type="checkbox"
                      value={x.jrfNumber}
                      checked={jrfNumber === x.jrfNumber}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                    />
                  </Td>
                  <Td>{x.jrfNumber}</Td>
                  <Td>
                    <DownloadLinkButton
                      href={x.jrfDocumentUrl}
                      className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
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

export default viewJrf;
