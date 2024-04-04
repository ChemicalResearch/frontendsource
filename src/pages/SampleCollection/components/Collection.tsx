import { FC } from "react";
import type { Collection } from "../../../services";
import { VehicleTypeDropdown } from "../../../components/dropdown";

interface CollectionProps extends Collection {

}

const CollectionCard: FC<CollectionProps> = ({ jobNumber, commodityName, customerName, totalSampleCount }) => {
    return (


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
                            <VehicleTypeDropdown />
                        </div>

                        <div className="md:col-span-4">
                            <label htmlFor="address">Vehicle Number</label>
                            <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                        </div>

                        <div className="md:col-span-4">
                            <label htmlFor="city">Quantity</label>
                            <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                        </div>
                        <div className="md:col-span-1">
                            <label htmlFor="email">Unit</label>
                            <VehicleTypeDropdown />
                        </div>

                        <div className="md:col-span-5 text-left">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-gray-600">
                    <div className="flex flex-col gap-2 mt-4 items-start">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Generate QR</button>
                    </div>
                    <h2 className="font-semibold text-gray-800">Vehicle No: ABC-abc-1234</h2>
                    <h2 className="font-semibold text-gray-800">QR Code: 97761231111089236</h2>
                </div>
            </div>







            {/* <h2 className="font-semibold text-gray-800">Job Number: {jobNumber}</h2>
                        <h2 className="font-semibold text-gray-800">Commodity Name: {commodityName}</h2>
                        <h2 className="font-semibold text-gray-800">Customer Name: {customerName}</h2>
                        <h2 className="font-semibold text-gray-800">Total Sample Count: {totalSampleCount}</h2>
                        <div className="flex items-center gap-4 mb-2">
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Vehicle Type</label>
                            </div>
                            <div>
                                <VehicleTypeDropdown />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Vehicle Number</label>
                            </div>
                            <div>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
                            </div>
                            <div>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Unit</label>
                            </div>
                            <div>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    {renderVehicleTypes}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4 items-start">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Submit</button>
                        </div> */}


        </div>


    )
}

export default CollectionCard;