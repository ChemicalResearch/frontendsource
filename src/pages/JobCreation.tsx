import { useQuery, useMutation } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import {
  getCreateJob,
  submitJob,
  SubmitJobBody,
  SubmitJobResposnse,
} from "../services";
import Swal from 'sweetalert2'

type CreateJobFormInputes = {
  commodity: string;
  commodityGroup: string;
  customer: string;
  jobType: string;
  mine: string;
  createdBy: string;
  plantId: string;
  fortheMonth: string;
  portId: string;
  tcrcReferenceNumber: string;
};

function JobCreation() {
  const { data, isPending } = useQuery({
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
    mine: "",
    tcrcReferenceNumber: "",
    createdBy: `${data?.createdBy}`,
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
      {({ values, handleChange, handleBlur, submitForm, setFieldValue }) => (
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
                    <Datepicker
                      primaryColor={"fuchsia"}
                      useRange={false}
                      asSingle={true}
                      displayFormat={"DD-MM-YYYY"}
                      value={{
                        startDate: values.fortheMonth,
                        endDate: "",
                      }}
                      onChange={(data: DateValueType) =>
                        setFieldValue("fortheMonth", data?.startDate)
                      }
                      containerClassName="relative w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Plant
                    </label>
                    <select
                      id="plantId"
                      name="plantId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.plantId}
                      disabled={isPending}
                    >
                      <option>Select</option>
                      {data?.plantModels?.map((p) => (
                        <option key={p.plantId} value={p.plantId}>
                          {p.plantName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="customer"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Customer
                    </label>
                    <select
                      id="customer"
                      name="customer"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.customer}
                      disabled={isPending}
                    >
                      <option value="">Select</option>
                      {data?.customers?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </select>
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
                    <select
                      id="commodityGroup"
                      name="commodityGroup"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodityGroup}
                      disabled={isPending}
                    >
                      <option>Select</option>
                      {data?.commodityGroups?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="portId"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Port
                    </label>
                    <select
                      id="portId"
                      name="portId"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.portId}
                      disabled={isPending}
                    >
                      <option>Select</option>
                      {data?.portModels?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="tcrcReferenceNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      TCRC Reference No
                    </label>
                    <input
                      id="tcrcReferenceNumber"
                      type="text"
                      name="tcrcReferenceNumber"
                      value={values.tcrcReferenceNumber}
                      onChange={handleChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    ></input>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="commodity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Commodity
                    </label>
                    <select
                      id="commodity"
                      name="commodity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodity}
                      disabled={isPending}
                    >
                      <option value="">Select</option>
                      {data?.commodities?.map((c) => (
                        <option key={c.number} value={c.number}>
                          {c.name}
                        </option>
                      ))}
                    </select>
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
