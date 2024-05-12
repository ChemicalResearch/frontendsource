import { FC } from "react";
import { Field, Formik, FormikHelpers } from "formik";


interface CollectionProps {
  plantModelsBydate: any;
}

interface InitialValues {
  plantId: string;
  plannedPrepDate: string;
}

const CollectionCard: FC<CollectionProps> = ({ plantModelsBydate }) => {
  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {

  };

  const initialValues: InitialValues = {
    plantId: "",
    plannedPrepDate: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      displayPlantModels
      onSubmit={onSubmit}
    >
      {({ submitForm, values }) => (
        <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Select Planned Prep Date
              </label>
              <Field
                as="select"
                id="plannedPrepDate"
                name="plannedPrepDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Select</option>

                {plantModelsBydate
                  ? Object.keys(plantModelsBydate)?.map((d: any) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))
                  : null}
              </Field>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Select Plant
              </label>
              <Field
                as="select"
                id="plantId"
                name="plantId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Select</option>
                {plantModelsBydate
                  ? plantModelsBydate?.[values.plannedPrepDate]?.map(
                      (d: any) => (
                        <option key={d.plantId} value={d.plantId}>
                          {d.plantName}
                        </option>
                      )
                    )
                  : null}
              </Field>
            </div>

            {/* <div className="lg:col-span-3">
              <div className="grid gap-8 text-sm grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Sample Id : {model?.collectionSystemId}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Vehicle Type : {model?.vehicleType}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Vehicle No. : {model?.vehicleNumber}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Sample Collection Date Time : 12-jun-2024 10:00AM
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="full_name">Plant : {model?.plant}</label>
                </div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-10">
              <div className="md:col-span-2">
                  <label htmlFor="email">Sample Preparation Date</label>
                  <DatePicker
                    selected={values.preparationDate}
                    onChange={(date) => setFieldValue("preparationDate", date)}
                    dateFormat="yyyy-MM-dd"
                    withPortal
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">TCRC QR Code</label>
                  <Field
                    name="tcrcQrCode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">TCRC Seal No</label>
                  <Field
                    name="tcrcSealNo"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Plant QR Code</label>
                  <Field
                    name="plantQrCode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Plant Seal No</label>
                  <Field
                    name="plantSealNo"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Retention QR Code</label>
                  <Field
                    name="refereeQrCode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Retention Seal No</label>
                  <Field
                    name="refereeSealNo"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Sample Preparation Date</label>
                  <DatePicker
                    selected={values.preparationDate}
                    onChange={(date) => setFieldValue("preparationDate", date)}
                    dateFormat="yyyy-MM-dd"
                    withPortal
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="labNumber">Lab</label>
                  <Field
                    as="select"
                    name="labNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select</option>
                    {labMasters?.map((lab) => (
                      <option key={lab.number} value={lab.number}>
                        {lab.labName}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Despatch Date</label>
                  <DatePicker
                    selected={values.despatchDate}
                    onChange={(date) => setFieldValue("despatchDate", date)}
                    dateFormat="yyyy-MM-dd"
                    withPortal
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
              </div>
              <div className="md:col-span-4 text-left mt-10">
                <div className="inline-flex items-end">
                  <button
                    disabled={isSubmitting}
                    onClick={() => handleSubmit()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {mutation.isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div> */}
            <div>
              <div className="flex items-center justify-start mt-5">
                <button
                  onClick={submitForm}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-[120px]"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="text-gray-600"></div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CollectionCard;
