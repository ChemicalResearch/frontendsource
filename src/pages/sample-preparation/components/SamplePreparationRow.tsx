import { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import { Model, submitSamplePreparation } from "../../../services";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { LabMastersDropdown } from "../../../components/dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QRImage from "../../../components/QRImage";
import { samplePreparationOptions } from "../index";


type SamplePreparationFormInput = {
    jobNumber: string;
    qrcode: string;
    despatchDate: DateValueType;
    collectionNumber: string;
    commodity: string;
    labNumber: string;
}

const SamplePreparationRow: FC<Model & { jobNumber: string; collectionNumber: string; commodity: string; }> = ({ jobNumber, collectionNumber, commodity, qrcode, image, type, despatchDate }) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: submitSamplePreparation,
        onSuccess() {
            const previousData = queryClient.getQueryData(samplePreparationOptions.queryKey);
            const newData = previousData?.map(x => {
                if(x.jobNumber === jobNumber) {
                    return({
                        ...x,
                        preparationModels: x.preparationModels.filter(y => y.qrcode != qrcode)
                    })
                }
                return x;
            })

            console.log({ newData })
            // Optimistically update to the new value
            if (newData) {
                queryClient.setQueryData(samplePreparationOptions.queryKey, newData)
            }
        },
    })

    const initialValues: SamplePreparationFormInput = {
        jobNumber,
        qrcode,
        despatchDate: {
            startDate: despatchDate,
            endDate: null
        },
        collectionNumber,
        commodity,
        labNumber: ""
    }

    const onSubmit = (values: SamplePreparationFormInput, formikHelpers: FormikHelpers<SamplePreparationFormInput>) => {
        const { despatchDate, ...rest } = values;
        const body = { despatchDate: despatchDate?.startDate as string, ...rest };
        console.log(body);
        mutation.mutateAsync(body)
        formikHelpers.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ values, handleSubmit, setFieldValue, handleChange }) => (
                <tr>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="font-medium text-gray-800">{qrcode}</div>
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <QRImage image={image} />
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{type}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                            <Datepicker
                                // primaryColor="blue"
                                useRange={false}
                                asSingle={true}
                                displayFormat={"DD-MM-YYYY"}
                                value={values.despatchDate}
                                onChange={(data: DateValueType) => setFieldValue("despatchDate", data)}
                                containerClassName="relative w-44"
                            />
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <LabMastersDropdown
                            name="labNumber"
                            value={values.labNumber}
                            onChange={handleChange}
                        />
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                            <button onClick={handleSubmit as any} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Save</button>
                        </div>
                    </td>
                </tr>
            )}
        </Formik>
    )
}

export default SamplePreparationRow;