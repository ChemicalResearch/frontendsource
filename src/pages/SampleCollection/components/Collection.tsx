import { FC, useState } from "react";
import { Formik, FormikHelpers } from "formik";
import { submitSampleCollection, type Collection } from "../../../services";
import { VehicleTypeDropdown, UnitDropdown } from "../../../components/dropdown";
import { useAuth } from "../../../context/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QRImage from "../../../components/QRImage";
import { sampleCollectionOptions } from "../index";

interface CollectionProps extends Collection {

}

interface InitialValues {
    jobNumber: string;
    collectionNumber: string;
    vehicleTypeNumber: string;
    vehicleNumber: string;
    quantity: string;
    unitNumber: string;
    createdBy: string;
}

const CollectionCard: FC<CollectionProps> = ({ jobNumber, commodityName, collectionNumber, customerName, totalSampleCount }) => {
    const queryClient = useQueryClient()
    const { user } = useAuth();
    const mutation = useMutation({
        mutationFn: submitSampleCollection,
        // onMutate: async () => {
        //     // Cancel any outgoing refetch
        //     // (so they don't overwrite our optimistic update)
        //     await queryClient.cancelQueries(sampleCollectionOptions);
        //     // Snapshot the previous value
        //     const previousData = queryClient.getQueryData(sampleCollectionOptions.queryKey);
        //     const collectionSummaries = previousData?.collectionSummaries?.map(x => {
        //         if (x.jobNumber === jobNumber) {
        //             return ({
        //                 ...x,
        //                 totalSampleCount: (Number(x.totalSampleCount) + 1).toString()
        //             })
        //         }
        //         return x;
        //     }) || [];
        //     console.log({collectionSummaries})
        //     // Optimistically update to the new value
        //     if (previousData) {
        //         queryClient.setQueryData(sampleCollectionOptions.queryKey, {
        //             ...previousData,
        //             collectionSummaries
        //         })
        //     }
        //     return { previousData }
        // }
        onSuccess(data, variables, context) {
            const previousData = queryClient.getQueryData(sampleCollectionOptions.queryKey);
            const collectionSummaries = previousData?.collectionSummaries?.map(x => {
                if (x.jobNumber === jobNumber) {
                    return ({
                        ...x,
                        totalSampleCount: (Number(x.totalSampleCount) + 1).toString()
                    })
                }
                return x;
            }) || [];
            console.log({ collectionSummaries })
            // Optimistically update to the new value
            if (previousData) {
                queryClient.setQueryData(sampleCollectionOptions.queryKey, {
                    ...previousData,
                    collectionSummaries
                })
            }
        },
    })


    const onSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => {
        mutation.mutateAsync(values).then(() => {
            formikHelpers.resetForm();
            formikHelpers.setSubmitting(false);
        });
    }

    const initialValues: InitialValues = {
        jobNumber,
        collectionNumber,
        vehicleTypeNumber: "",
        vehicleNumber: "",
        quantity: "",
        unitNumber: "",
        createdBy: user?.employee_id!
    }

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
        >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
                    <div className="grid gap-8 gap-y-8 text-sm grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-3">
                                    <label htmlFor="full_name">Job Number</label>
                                    <input type="text" name="full_name" id="full_name" className="h-10 mt-1 rounded px-4 w-full bg-gray-50" value={jobNumber} disabled />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="full_name">Total Sample Count</label>
                                    <input type="text" name="full_name" id="full_name" className="h-10 mt-1 rounded px-4 w-full bg-gray-50 text-right" value={totalSampleCount} disabled />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="full_name">Commodity Name</label>
                                    <input type="text" name="full_name" id="full_name" className="h-10 mt-1 rounded px-4 w-full bg-gray-50" value={commodityName} disabled />
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="full_name">Customer Name</label>
                                    <input type="text" name="full_name" id="full_name" className="h-10 mt-1 rounded px-4 w-full bg-gray-50" value={customerName} disabled />
                                </div>

                                <div className="md:col-span-1">
                                    <label htmlFor="email">Vehicle Type</label>
                                    <VehicleTypeDropdown
                                        name="vehicleTypeNumber"
                                        value={values.vehicleTypeNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="md:col-span-4">
                                    <label htmlFor="address">Vehicle Number</label>
                                    <input
                                        type="text"
                                        name="vehicleNumber"
                                        value={values.vehicleNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-4">
                                    <label htmlFor="city">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={values.quantity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="email">Unit</label>
                                    <UnitDropdown
                                        name="unitNumber"
                                        value={values.unitNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="md:col-span-5 text-left">
                                    <div className="inline-flex items-end">
                                        <button disabled={isSubmitting} onClick={() => handleSubmit()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            {mutation.isPending ? "Submitting...": "Submit"}
                                        </button>
                                    </div>
                                    <div className="inline-flex items-end">
                                    <a href="/sample-collection-details">
                                        <button  style={{marginLeft: "15px"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-600">
                            {mutation.data?.data?.imageUrl ? <QRImage image={mutation.data?.data?.imageUrl} /> : null}
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default CollectionCard;