import { FC, useState } from "react";
import { Formik, FormikHelpers } from "formik";
import { Model } from "../services";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";


type SamplePreparationFormInput = {
    jobNumber: string;
    qrcode: string;
    despatchDate: DateValueType;
    collectionNumber: string;
    commodity: string;
    labNumber: string;
}

const SamplePreparationRow: FC<Model & { jobNumber: string; collectionNumber: string }> = ({ jobNumber, collectionNumber, qrcode, image, type, despatchDate }) => {
    const initialValues: SamplePreparationFormInput = {
        jobNumber,
        qrcode,
        despatchDate: {
            startDate: null,
            endDate: null
        },
        collectionNumber,
        commodity: "",
        labNumber: ""
    }

    const onSubmit = (values: SamplePreparationFormInput, formikHelpers: FormikHelpers<SamplePreparationFormInput>) => {
        const { despatchDate, ...rest } = values;
        const body = { despatchDate: despatchDate?.startDate, ...rest };
        console.log(body);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ values, handleSubmit, setFieldValue }) => (
                <tr>
                    <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="font-medium text-gray-800">{qrcode}</div>
                        </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{image}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{type}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                            <Datepicker
                                primaryColor="blue"
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
                        <select id="countries" className="max-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Parameter</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
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