import { FC, useMemo } from "react";
import { Field } from "formik";

type Chemist = {
    employeeid: number;
    name: string;
}

type QualityAnalyst = {
    employeeid: number;
    name: string;
}

type LabDetails = {
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
}

const Assignment: FC<LabDetails & { index: number }> = ({ index, commodityText, parameterText, testmethodText, chemist, qa }) => {
    const renderChemists = useMemo(() => {
        return chemist.map((d) => (
            <option value={[d.employeeid.toString(), d.name]}>{d.name}</option>
        ))
    }, [chemist])

    const renderQa = useMemo(() => {
        return qa.map((d) => (
            <option value={[d.employeeid.toString(), d.name]}>{d.name}</option>
        ))
    }, [qa])
    return (
        <tr>
            {/* <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <Field
                        type="checkbox"
                        name={`labDetails.${index}.checked`}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                </div>
            </td> */}
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{commodityText}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <input readOnly type="text" value={parameterText} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder="" />
            </td>
            <td className="p-2 whitespace-nowrap">
                <input readOnly type="text" value={testmethodText} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="" />
            </td>
            <td className="p-2 whitespace-nowrap">
                <Field
                    as="select"
                    name={`labDetails.${index}.chemistNumber`}
                    className="max-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option selected>Select</option>
                    {renderChemists}
                </Field>
            </td>
            <td className="p-2 whitespace-nowrap">
                <Field
                    as="select"
                    name={`labDetails.${index}.qaNumber`}
                    className="max-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option selected>Select</option>
                    {renderQa}
                </Field>
            </td>
        </tr>

    )
}

export default Assignment;