import { Field, Formik, FormikHelpers } from "formik";
import { GetJRFListResponse, createJRF } from "../../services";
import { FC } from "react";
import Swal from "sweetalert2";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../styles/table";

interface CreateJrfFormProps {
  data: GetJRFListResponse;
  plantId: string;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<GetJRFListResponse, Error>>;
}

interface CreateJRFInitialValues {
  plantId: string;
  data: Array<{
    checked: boolean;
    jrfNumber: string;
  }>;
}

const CreateJrfForm: FC<CreateJrfFormProps> = ({ data, plantId, refetch }) => {
  const mutation = useMutation({
    mutationFn: createJRF,
  });

  const createJRFInitialValues = {
    data:
      data?.map((row) => ({ checked: false, jrfNumber: row.jrfNumber })) || [],
  };

  const handleSubmitJRF = async (
    values: CreateJRFInitialValues,
    formikHelpers: FormikHelpers<CreateJRFInitialValues>
  ) => {
    try {
      const { plantId, data } = values;
      const sampleIds = data.filter((x) => x.checked).map((x) => x.jrfNumber);
      const response = await mutation.mutateAsync({ plantId, sampleIds });
      refetch();
      formikHelpers.resetForm();
      Swal.fire(
        "JRF created successfully",
        "JRF Number is" + response.data.returnJrfNumber
      );
    } catch (e: any) {
      console.log(e.response);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        ...createJRFInitialValues,
        plantId,
      }}
      onSubmit={handleSubmitJRF}
      enableReinitialize
    >
      {(subform) => (
        <TableContainer className="mx-3">
          <Table className="max-w-[300px] min-w-0">
            <Thead>
              <Tr>
                <Th>Sample ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {subform?.values?.data?.map((row, key) => (
                <Tr key={key}>
                  <Td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        id={`data.${key}.checked`}
                        name={`data.${key}.checked`}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                      />
                      <label
                        htmlFor={`data.${key}.checked`}
                        className="font-medium text-gray-800 cursor-pointer"
                      >
                        {row.jrfNumber}
                      </label>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <tfoot className="pt-2">
              <tr>
                <td>
                  <button
                    onClick={subform?.submitForm}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </TableContainer>
      )}
    </Formik>
  );
};

export default CreateJrfForm;
