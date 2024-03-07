function SampleCollection() {
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600">
        <div className="flex flex-col">
          <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Job Number: 123456789</h2>
              <h2 className="font-semibold text-gray-800">Assigned On: 12-December-2023 12:00:00</h2>
              <div className="flex items-center gap-4 mb-2">
                <div>
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Vehicle Type</label>
                </div>
                <div>
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
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
              <div className="flex flex-col gap-2 mt-4 items-start">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Generate QR</button>
              </div>
              <h2 className="font-semibold text-gray-800">Vehicle No: ABC-abc-1234</h2>
              <h2 className="font-semibold text-gray-800">QR Code: 97761231111089236</h2>
            </header>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SampleCollection;
