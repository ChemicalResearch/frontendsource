import { useQuery, useMutation } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { getCreateJob, submitJob } from "../services";

type CreateJobFormInputes = {
  jobNumber: string;
  commodity: string;
  commodityGroup: string;
  customer: string;
  jobType: string;
  mine: string;
  createdBy: string;
  despatchDate: DateValueType;
  fortheMonth:DateValueType,
  tcrcReferenceNumber:string

};

function JobCreation() {
  const { data } = useQuery({
    queryKey: ["createjob"],
    queryFn: async () => {
      const { data } = await getCreateJob();
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: submitJob,
  });

  const initialValues: CreateJobFormInputes = {
    jobNumber: `${data?.id}`,
    commodity: "",
    commodityGroup: "",
    customer: "",
    jobType: "",
    mine: "",
    tcrcReferenceNumber:"",
    createdBy: `${data?.createdBy}`,
    fortheMonth:{
      startDate: null,
      endDate: null,
    },
    despatchDate: {
      startDate: null,
      endDate: null,
    },
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
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <div className="max-w-screen-xl">
          <section className="antialiased bg-gray-100 text-gray-600">
            <div className="flex flex-col">
              <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10 px-8 py-10">
                {/* <header className="px-5 py-4 border-b border-gray-100"> */}
                {/* <div className="flex items-center justify-start mt-4">
                    <button onClick={() => refetch()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate Job Number</button>
                  </div> */}
                {/* <h2 className="font-semibold text-gray-800">Job No: {data?.id}</h2>
                  <h2 className="font-semibold text-gray-800">Created On: 12-December-2023 12:00:00</h2> */}
                {/* </header> */}
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
                      value={values.fortheMonth}
                      onChange={(data: DateValueType) =>
                        setFieldValue("fortheMonth", data)
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
                      name="commodityGroup"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodityGroup}
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
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Customer
                    </label>
                    <select
                      name="customer"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.customer}
                    >
                      <option value="">Select</option>
                      {data?.customers?.map((c) => (
                        <option key={c.identifier} value={c.identifier}>
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
                      Mines
                    </label>
                    <select
                      name="mine"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mine}
                    >
                      <option value="">Select</option>
                      {data?.mines?.map((c) => (
                        <option key={c.identifier} value={c.identifier}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <div className="mb-2">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Job Included</label>
                    <div className="flex gap-4 my-2">
                      <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lab Operation</label>
                      </div>
                      <div className="flex items-center">
                        <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                        <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sampling</label>
                      </div>
                    </div>
                  </div> */}
                  <div className="md:col-span-4">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Job Type
                    </label>
                    <div className="flex gap-4 my-2">
                      {data?.jobtypes?.map((jobtype) => (
                        <div
                          className="flex items-center"
                          key={jobtype.identifier}
                        >
                          <input
                            type="checkbox"
                            value={jobtype.identifier}
                            checked={values.jobType === jobtype.identifier}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 focus:ring-2"
                            onChange={() =>
                              setFieldValue("jobType", jobtype.identifier)
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
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Commodity Group
                    </label>
                    <select
                      name="commodityGroup"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodityGroup}
                    >
                      <option>Select</option>
                      {data?.commodityGroups?.map((c) => (
                        <option key={c.identifier} value={c.identifier}>
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
                      Port
                    </label>
                    <select
                      name="commodityGroup"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodityGroup}
                    >
                      <option>Select</option>
                      {data?.commodityGroups?.map((c) => (
                        <option key={c.identifier} value={c.identifier}>
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
                      TCRC Reference No
                    </label>
                   <input type="text" 
                    name="tcrcReferenceNumber"
                    value={values.tcrcReferenceNumber}
                    onChange={handleChange}
                   className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Commodity
                    </label>
                    <select
                      name="commodity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commodity}
                    >
                      <option value="">Select</option>
                      {data?.commodities?.map((c) => (
                        <option key={c.identifier} value={c.identifier}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-start mt-5">
                    <button
                      onClick={handleSubmit as any}
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
