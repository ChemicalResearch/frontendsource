const ChemistActionTableHead = () => {
    return (
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Test Details</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Commodity Group</div>
                </th>
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
                    <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Result</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Unit</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Actions</div>
                </th>
            </tr>
        </thead>
    )
}

export default ChemistActionTableHead;