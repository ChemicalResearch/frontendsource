import { FC, Fragment } from "react";
import { Field, FieldArray, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import {
  submitSampleCollection,
  type CollectionSummry,
} from "../../../services";
import { useAuth } from "../../../context/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QRImage from "../../../components/QRImage";
import { sampleCollectionOptions } from "../index";
import dayjs from "dayjs";

interface CollectionProps extends CollectionSummry {
  unitModel: {
    identifier: string;
    name: string;
    selected: boolean;
  }[];
  vehicleType: {
    number: string;
    name: string;
  }[];
}

interface InitialValues {
  jobNumber: string;
  collectionNumber: string;
  vehicleTypeNumber: string;
  rakeType: string;
  noOfWagon: string;
  vehicleNumber: string;
  quantity: string;
  unitNumber: string;
  createdBy: string;
  tcrcSampleId: string;
  plannedPrepDate: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  mineText: string;
  wagonModels?: [
    {
      wagonNumber: string;
      quantity: string;
    }
  ];
}

const CollectionCard: FC<CollectionProps> = ({
  jobNumber,
  commodityName,
  collectionNumber,
  customerName,
  totalSampleCount,
  forMonth,
  unitModel,
  vehicleType,
  tcrcReferenceNumber,
}) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: submitSampleCollection,
    onSuccess() {
      const previousData = queryClient.getQueryData(
        sampleCollectionOptions.queryKey
      );
      const collectionSummaries =
        previousData?.collectionSummaries?.map((x) => {
          if (x.jobNumber === jobNumber) {
            return {
              ...x,
              totalSampleCount: (Number(x.totalSampleCount) + 1).toString(),
            };
          }
          return x;
        }) || [];

      if (previousData) {
        queryClient.setQueryData(sampleCollectionOptions.queryKey, {
          ...previousData,
          collectionSummaries,
        });
      }
    },
  });

  const onSubmit = (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    const { startTime, endTime, plannedPrepDate, ...rest } = values;
    mutation
      .mutateAsync({
        ...rest,
        startTime: dayjs(startTime).format("YYYY-MM-DD HH:mm:ss"),
        endTime: dayjs(endTime).format("YYYY-MM-DD HH:mm:ss"),
        plannedPrepDate: dayjs(plannedPrepDate).format("YYYY-MM-DD"),
      })
      .then(() => {
        formikHelpers.resetForm();
        formikHelpers.setSubmitting(false);
        Swal.fire("Sample Collection Submitted Successfully");
      });
  };

  const initialValues: InitialValues = {
    jobNumber,
    collectionNumber,
    createdBy: user?.employee_id as string,
    endTime: null,
    mineText: "",
    noOfWagon: "",
    quantity: "",
    rakeType: "",
    startTime: null,
    tcrcSampleId: "",
    unitNumber: "",
    vehicleNumber: "",
    vehicleTypeNumber: "",
    plannedPrepDate: null,

    wagonModels: [
      {
        wagonNumber: "",
        quantity: "",
      },
    ],
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, submitForm, isSubmitting, setFieldValue }) => (
        <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
          <div className="grid gap-8 gap-y-8 text-sm grid-cols-1 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="grid gap-8 text-sm grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="full_name">System Id : {jobNumber}</label>
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    TCRC Reference Number : {tcrcReferenceNumber}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Total Sample Count : {totalSampleCount}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Commodity Name : {commodityName}
                  </label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">
                    Customer Name : {customerName}
                  </label>
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="full_name">Port : {totalSampleCount}</label>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="full_name">For The Date : {forMonth}</label>
                </div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4 mt-10">
                <div className="md:col-span-1">
                  <label htmlFor="email">Start Date Time</label>
                  <DatePicker
                    selected={values.startTime}
                    onChange={(date) => setFieldValue("startTime", date)}
                    timeInputLabel="Time:"
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    showTimeInput
                    withPortal
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">End Date Time</label>
                  <DatePicker
                    selected={values.endTime}
                    onChange={(date) => setFieldValue("endTime", date)}
                    timeInputLabel="Time:"
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    showTimeInput
                    withPortal
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label>Source</label>
                  <Field
                    name="mineText"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-1">
                  <label>Transportation Mode</label>
                  <Field
                    as="select"
                    name="vehicleTypeNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select</option>
                    {vehicleType.map((vehicle) => (
                      <option key={vehicle.number} value={vehicle.number}>
                        {vehicle.name}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="vehicleNumber">RR No/Truck No</label>
                  <Field
                    id="vehicleNumber"
                    type="text"
                    name="vehicleNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="tcrcSampleId">TCRC Sample Id</label>
                  <Field
                    id="tcrcSampleId"
                    type="text"
                    name="tcrcSampleId"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="quantity">Quantity</label>
                  <Field
                    id="quantity"
                    type="number"
                    name="quantity"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="unitNumber">Unit</label>
                  <Field
                    as="select"
                    name="unitNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select</option>
                    {unitModel.map((unit) => (
                      <option key={unit.identifier} value={unit.identifier}>
                        {unit.name}
                      </option>
                    ))}
                  </Field>
                </div>

                {values.vehicleTypeNumber === "10002" ? (
                  <Fragment>
                    <div className="md:col-span-1">
                      <label htmlFor="address">No of Wagon</label>
                      <Field
                        type="text"
                        name="noOfWagon"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="rakeType">Rake Type</label>
                      <Field
                        as="select"
                        name="rakeType"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="">Select</option>
                        {["OCP", "IR"].map((rake) => (
                          <option key={rake} value={rake}>
                            {rake}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </Fragment>
                ) : null}
              </div>

              {values.vehicleTypeNumber === "10002" ? (
                <Fragment>
                  <FieldArray
                    name="wagonModels"
                    render={(arrayHelpers) => (
                      <Fragment>
                        {values?.wagonModels?.map((_, index) => (
                          <div
                            key={index}
                            className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 mt-4"
                          >
                            <div className="md:col-span-2">
                              <label htmlFor="wagonNumber">Wagon Number</label>
                              <Field
                                name={`wagonModels.${index}.wagonNumber`}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label htmlFor="city">Quantity</label>
                              <Field
                                name={`wagonModels.${index}.quantity`}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              />
                            </div>
                            <div className="md:col-span-1 mt-4 flex items-center gap-2 pt-2">
                              {values.wagonModels?.length === index + 1 ? (
                                <button
                                  onClick={() =>
                                    arrayHelpers.push({
                                      wagonNumber: "",
                                      quantity: "",
                                    })
                                  }
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                                >
                                  Add
                                </button>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </Fragment>
                    )}
                  />
                </Fragment>
              ) : null}
              <div className="md:col-span-1">
                <label htmlFor="full_name">Planned Prep Date :</label>
                <DatePicker
                  selected={values.plannedPrepDate}
                  onChange={(date) => setFieldValue("plannedPrepDate", date)}
                  dateFormat="yyyy-MM-dd"
                  showTimeInput
                  withPortal
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div className="md:col-span-4 text-left mt-10">
                <div className="inline-flex items-end">
                  <button
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {mutation.isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <div className="inline-flex items-end">
                  <Link
                    to={tcrcReferenceNumber}
                    style={{ marginLeft: "15px" }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-gray-600">
              {mutation.data?.data?.imageUrl ? (
                <QRImage image={mutation.data?.data?.imageUrl} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CollectionCard;
