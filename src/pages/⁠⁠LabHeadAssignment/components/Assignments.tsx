import { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import type { LabHeadAssignment } from "../../../services";
import Assignment from "./Assignment";
import { InsertLabDetails, submitLabHeadAssignment } from "../../../services/submit-lab-head-assignment";

type Chemist = {
    employeeid: number;
    name: string;
}

type QualityAnalyst = {
    employeeid: number;
    name: string;
}

type InitialValues = {
    labDetails: Array<{
        commodityGroupText: string;
        commodityGroupId: number;
        commodityText: string;
        commodityId: number;
        parameterText: string;
        parameterId: number;
        testmethodText: string;
        testmethodId: number;
        chemistAssignedOn: string;
        chemistActivityStatus: string;
        verificationStatus: string;
        verifiedon: string;
        chemist: Array<Chemist>;
        qa: Array<QualityAnalyst>;
        result: string;
        resultsubmitDate: string;
        unit: string;
        // For Formik
        checked: boolean;
        chemistNumber: string;
        chemistName: string;
        qaNumber: string;
        qaName: string;
    }>
}

const Assignments: FC<LabHeadAssignment> = ({ qrcode, labHeadName, labHeadId, jobNumber, labDetails }) => {
    

    const initialValues: InitialValues = {
        labDetails: labDetails.map(x => ({
            ...x,
            checked: false,
            chemistNumber: "",
            chemistName: "",
            qaNumber: "",
            qaName: ""
        }))
    }

    const onSubmit = async (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => {
        const insertLabDetails: Array<InsertLabDetails> = values.labDetails.filter(x => x.checked).map(x => {
            const [qaNumber, qaName] = x.qaNumber.split(",");
            const [chemistNumber, chemistName] = x.chemistNumber.split(",");
            const data: InsertLabDetails = {
                labHeadName,
                labHeadId,
                jobNumber,
                chemistAssignedOn: chemistNumber,
                commodityId: x.commodityId.toString(),
                commodityText: x.commodityText,
                parameterId: x.parameterId?.toString(),
                parameterText: x.parameterText,
                qrcode,
                result: x.result,
                testmethodId: x.testmethodId?.toString(),
                testmethodText: x.testmethodText,
                unit: x.unit,
                resultsubmitDate: new Date().toISOString(),
                qaNumber,
                qaName,
                // chemistNumber,
                chemistName
            };
            return data
        });
        try {
            await submitLabHeadAssignment({ insertLabDetails });
            formikHelpers.resetForm();
            formikHelpers.setSubmitting(false);
        } catch (e) {

        } finally {

        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({ values, handleSubmit }) => (
                <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Assigned QR: {qrcode}</h2>
                        <h2 className="font-semibold text-gray-800">Despatched On: {new Date().toLocaleString()}{/*12-December-2023 12:00:00*/}</h2>
                        <h2 className="font-semibold text-gray-800">Status: Deapatched</h2>
                        <div className="flex items-center justify-start mt-4">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scan to Receive</button>
                        </div>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>

                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Commodity</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Parameters</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Test Mehod</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Chemist</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">QA</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {values.labDetails.map((de, key) => (
                                        <Assignment key={key} index={key} {...de} />
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-start mt-5">
                                <button onClick={() => handleSubmit()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm Selection</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Assignments;