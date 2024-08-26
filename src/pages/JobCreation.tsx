import { useQuery, useMutation } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import {
  getCreateJob,
  submitJob,
  SubmitJobBody,
  SubmitJobResposnse,
} from "../services";
import Swal from "sweetalert2";
import { useAuth } from "../context/auth";
import dayjs from "dayjs";
import Dropdown from "../components/Dropdown";
import DatePicker from "../components/DatePicker";
import TextInput from "../components/TextInput";
import { withRole } from "../hooks";
import { menuRolesMap } from "../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";

type CreateJobFormInputes = {
  commodity: string;
  commodityGroup: string;
  customer: string;
  jobType: string;
  createdBy: string;
  plantId: string;
  fortheMonth: Date | null;
  portId: string;
  tcrcReferenceNumber: string;
};

function JobCreation() {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["createjob"],
    queryFn: async () => {
      const { data } = await getCreateJob();
      return data;
    },
  });

  const mutation = useMutation<SubmitJobResposnse, any, SubmitJobBody>({
    mutationFn: submitJob,
  });

  const initialValues: CreateJobFormInputes = {
    commodity: "",
    commodityGroup: "",
    customer: "",
    jobType: "",
    tcrcReferenceNumber: "",
    createdBy: user?.employee_id as string,
    fortheMonth: null,
    plantId: "",
    portId: "",
  };

  const onSubmit = (
    values: CreateJobFormInputes,
    formikHelpers: FormikHelpers<CreateJobFormInputes>
  ) => {
    const { fortheMonth, ...rest } = values;

    mutation.mutate(
      { ...rest, fortheMonth: dayjs(fortheMonth).format("YYYY-MM-DD") },
      {
        onSuccess(data) {
          if (data) {
            formikHelpers.resetForm();
            formikHelpers.setSubmitting(false);
            Swal.fire(
              "Job Created Successfully",
              `Job Number is: ${data.jobNumber}`
            );
          }
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, submitForm, setFieldValue }) => (
        <div className="max-w-screen-xl">
          <section className="antialiased bg-gray-100 text-gray-600">
            <div className="flex flex-col">
              <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10 px-8 py-10">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                  <DatePicker
                    label="For The Month"
                    selected={values.fortheMonth}
                    onChange={(date) => setFieldValue("fortheMonth", date)}
                    className="md:col-span-2"
                  />
                  <Dropdown
                    id="plantId"
                    name="plantId"
                    label="Plant"
                    className="md:col-span-2"
                  >
                    <option>Select</option>
                    {data?.plantModels?.map((p) => (
                      <option key={p.plantId} value={p.plantId}>
                        {p.plantName}
                      </option>
                    ))}
                  </Dropdown>
                  <Dropdown
                    id="customer"
                    name="customer"
                    label="Customer"
                    className="md:col-span-2"
                  >
                    <option value="">Select</option>
                    {data?.customers?.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </Dropdown>
                  <Dropdown
                    id="commodityGroup"
                    name="commodityGroup"
                    label="Commodity Group"
                    className="md:col-span-2"
                  >
                    <option>Select</option>
                    {data?.commodityGroups?.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </Dropdown>
                  <Dropdown
                    id="portId"
                    name="portId"
                    label="Port"
                    className="md:col-span-2"
                  >
                    <option>Select</option>
                    {data?.portModels?.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </Dropdown>
                  <TextInput
                    id="tcrcReferenceNumber"
                    name="tcrcReferenceNumber"
                    label="TCRC Reference No"
                    className="md:col-span-2"
                  />
                  <Dropdown
                    id="commodity"
                    name="commodity"
                    label="Commodity"
                    className="md:col-span-2"
                  >
                    <option value="">Select</option>
                    {data?.commodities?.map((c) => (
                      <option key={c.number} value={c.number}>
                        {c.name}
                      </option>
                    ))}
                  </Dropdown>
                </div>
                <div>
                  <div className="flex items-center justify-start mt-5">
                    <button
                      onClick={submitForm}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-[120px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
}

export default withRole(JobCreation, {
  roles: menuRolesMap["Job creation"],
  OnNoAccess: () => <Navigate to="/" replace />,
});
