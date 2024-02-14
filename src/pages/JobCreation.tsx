const commodities = [
  {
    "name": "Coal",
    "identifier": "10000",
    "groupIdentifier": "10000"
  },
  {
    "name": "Coke",
    "identifier": "10001",
    "groupIdentifier": "10000"
  }
];

const customers = [
  {
    "name": "NTPC",
    "identifier": "10000"
  },
  {
    "name": "Coal India",
    "identifier": "10001"
  }
];

const mines = [
  {
    "name": "Ranigunj",
    "identifier": "10000"
  },
  {
    "name": "Bellari",
    "identifier": "10001"
  }
];

// const jobtypes = [
//   {
//     "name": "Rake",
//     "identifier": "10000"
//   },
//   {
//     "name": "Truk",
//     "identifier": "10001"
//   }
// ];

function JobCreation() {
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600">
        <div className="flex flex-col">
          <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-start mt-4">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate Job Number</button>
              </div>
              <h2 className="font-semibold text-gray-800">Jon No: 1000000013373419</h2>
              <h2 className="font-semibold text-gray-800">Created On: 12-December-2023 12:00:00</h2>
            </header>
            <form className="max-w-md m-4">
              <div className="mb-2">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Customer</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="">Select</option>
                  {customers.map(c => (
                    <option value={c.identifier}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Mines</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="">Select</option>
                  {mines.map(c => (
                    <option value={c.identifier}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
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
              </div>
              <div className="mb-2">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Job Type</label>
                <div className="flex gap-4 my-2">
                  <div className="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stack</label>
                  </div>
                  <div className="flex items-center">
                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Submited Sample</label>
                  </div>
                  <div className="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rake Job</label>
                  </div>
                  <div className="flex items-center">
                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Container</label>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commodity Group</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commodity</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="">Select</option>
                  {commodities.map(c => (
                    <option value={c.identifier}>{c.name}</option>
                  ))}
                </select>
              </div>
            </form>
            <div className="p-3">
              <div className="flex items-center justify-start mt-5">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobCreation;
