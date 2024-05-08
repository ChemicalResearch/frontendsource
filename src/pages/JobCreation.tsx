import { useQuery, useMutation } from "@tanstack/react-query";
import { Formik, Field, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import {
  getCreateJob,
  submitJob,
  SubmitJobBody,
  SubmitJobResposnse,
} from "../services";
import Swal from "sweetalert2";
import { useAuth } from "../context/auth";

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
    fortheMonth: "",
    plantId: "",
    portId: "",
  };

  const onSubmit = (
    values: CreateJobFormInputes,
    formikHelpers: FormikHelpers<CreateJobFormInputes>
  ) => {
    mutation.mutate(values, {
      onSuccess(data) {
        if (data) {
          formikHelpers.resetForm();
          formikHelpers.setSubmitting(false);
          Swal.fire("Job Created Successfully");
        }
      },
    });
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
                  <div className="md:col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      For The Month
                    </label>
                    <DatePicker
                      selected={values.fortheMonth}
                      onChange={(date) => setFieldValue("fortheMonth", date)}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="MM/DD/YYYY"
                      withPortal
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Plant
                    </label>
                    <Field
                      as="select"
                      id="plantId"
                      name="plantId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option>Select</option>
                      {data?.plantModels?.map((p) => (
                        <option key={p.plantId} value={p.plantId}>
                          {p.plantName}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="customer"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Customer
                    </label>
                    <Field
                      as="select"
                      id="customer"
                      name="customer"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select</option>
                      {data?.customers?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Job Type
                    </label>
                    <div className="flex gap-4 my-2">
                      {data?.jobtypes?.map((jobtype) => (
                        <div className="flex items-center" key={jobtype.number}>
                          <input
                            type="checkbox"
                            value={jobtype.number}
                            checked={values.jobType === jobtype.number}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 focus:ring-2"
                            onChange={() =>
                              setFieldValue("jobType", jobtype.number)
                            }
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900"
                          >
                            {jobtype.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="commodityGroup"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Commodity Group
                    </label>
                    <Field
                      as="select"
                      id="commodityGroup"
                      name="commodityGroup"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option>Select</option>
                      {data?.commodityGroups?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="portId"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Port
                    </label>
                    <Field
                      as="select"
                      id="portId"
                      name="portId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option>Select</option>
                      {data?.portModels?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="tcrcReferenceNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      TCRC Reference No
                    </label>
                    <Field
                      id="tcrcReferenceNumber"
                      name="tcrcReferenceNumber"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="commodity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Commodity
                    </label>
                    <Field
                      as="select"
                      id="commodity"
                      name="commodity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select</option>
                      {data?.commodities?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </Field>
                  </div>
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

export default JobCreation;
