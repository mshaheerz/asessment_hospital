import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";

function Dropdown() {
  const [display, setDisplay] = useState(false);

  const [fromDate, setfromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patientName, setPatientName] = useState("");
  const [hostpital, setHospital] = useState("");
  const [status, setStatus] = useState("");
  const [bill, setBill] = useState("");
  const [testName, SetTestName] = useState("");
  const [page, setPage] = useState(1);

  const [patients, setPatients] = useState([]);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let obj = {
  //     fromDate: fromDate,
  //     toDate: toDate,
  //     doctor: doctor,
  //     patientName: patientName,
  //     hostpitalID: hostpital,
  //     status:status,
  //     bill: bill,
  //     testName: testName,
  //   };

  //   await axios.post("/add", obj);

  // }

  async function filterData(e) {
    console.log("nekki");
    e.preventDefault();
    const formData = {
      startDate: fromDate,
      endDate: toDate,
      doctor: doctor,
      patientName: patientName,
      hospitalId: hostpital,
      status: status,
      orderNo: bill,
      testName: testName,
    };

    const { data } = await axios.get("/filter", {
      params: formData,
    });
    setPatients(data);
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/patients?page=${page}&limit=4`);
      setPatients(data);
    })();
  }, [page]);

  return (
    <div className="bg-[rgb(214,250,255)] w-full h-screen  px-4 ">
      <div className="max-w-[1450px] py-4 mx-auto  ">
        <div className="flex justify-between ">
          <h2 className="text-2xl text-sky-700 font-bold">Patient Reports</h2>

          <div className="pt-2 flex text-gray-600 gap-4   ">
            <div className="mt-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDisplay(!display);
                }}
                className="text-right text-white bg-sky-700 px-4 mb-3 py-1 font-semibold rounded-lg  "
              >
                Apply Filter
              </button>
            </div>

            <div className="relative">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none relative"
                type="search"
                name="search"
                placeholder="search by doctor Name"
              />
              <button type="submit" className=" right-2 bo mt-3 absolute">
                <svg
                  className="text-gray-600 h-4 -ml-8 w-4 fill-current"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {display && (
          <>
            <div className=" mx-auto bg-white  grid md:grid-cols-6  sm:grid-cols-2 gap-4 px-8 border border-gray-400 p-4 mt-2  ">
              <label className="text-lg text-center ">start Date </label>
              <input
                onChange={(e) => setfromDate(e.target.value)}
                value={fromDate}
                type="date"
                className="outline-none cursor-pointer px-2 py-2 text-gray-600 rounded border"
              />
              <label className="text-lg text-center ">End Date</label>
              <input
                onChange={(e) => setToDate(e.target.value)}
                value={toDate}
                type="date"
                className="outline-none cursor-pointer  px-2 py-2 rounded border"
              />
              <label className="text-lg text-center">Refer by </label>
              <input
                onChange={(e) => setDoctor(e.target.value)}
                value={doctor}
                type="text"
                placeholder="Arun kumar"
                className="outline-none px-2 py-2 rounded border"
              />

              <label className="text-lg text-center">Patient Name </label>
              <input
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
                type="text"
                placeholder="snakayam kurmar"
                className="outline-none px-2 py-2 rounded border"
              />
              <label className="text-lg text-center">Hospital ID</label>
              <input
                onChange={(e) => setHospital(e.target.value)}
                value={hostpital}
                type="text"
                placeholder="D342344"
                className="outline-none px-2 py-2 rounded border"
              />
              <label className="text-lg text-center">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-1 n  text-black rounded-lg"
                name="pets"
                id="pet-select"
              >
                <option disabled value={""}>
                  All
                </option>

                <option value={"Ready"}>Ready</option>
                <option value={"Partial Report"}>Partial Report</option>
                <option value={"Lab dropped"}>Lab dropped</option>
              </select>

              <label className="text-lg text-center">Bill No </label>
              <input
                onChange={(e) => setBill(e.target.value)}
                value={bill}
                type="text"
                placeholder="D35325252"
                className="outline-none px-2 py-2 rounded border"
              />
              <label className="text-lg text-center"> Test Name </label>
              <input
                onChange={(e) => SetTestName(e.target.value)}
                value={testName}
                type="text"
                placeholder="Anti leukemia"
                className="outline-none px-2 py-2 rounded border"
              />
              {/* 
              <button onClick={handleSubmit} className="bg-gray-600  ">
                submit
              </button> */}
            </div>
            <div className="bg-[rgb(214,250,255)] border border-gray-400  w-full py-3">
              <div className="px-2 justify-between flex">
                <p className="text-gray-400">
                  Please provide search criteria and hit search button.
                </p>
                <div>
                  <div className="flex gap-6">
                    <button
                      onClick={filterData}
                      className="rounded-md bg-sky-700 text-white text-semibold px-3 py-1"
                    >
                      Search
                    </button>
                    <button className="rounded-md bg-orange-600 text-white text-semibold px-3 py-1">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col overflow-x-auto bg-white">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Order No
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hospital ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Test Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Doctor Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ETA
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {patients.length !== 0 ? (
                  <tbody>
                    {patients.map((data) => (
                      <TableRow key={data._id} patients={data} />
                    ))}
                  </tbody>
                ) : (
                  <tr className="text-red-600 text-2xl text-center font-bold ">
                    No data available
                  </tr>
                )}
              </table>
            </div>

            <div className="flex border border-gray-300 py-2 px-6 justify-end  ">
              <div className="border text-sky-700 hover:bg-gray-300 cursor-pointer">
                <svg
                  onClick={() => {
                    if (page > 1) setPage((prev) => prev - 1);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-4 mt-3 tex-red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="px-4 py-2 bg-sky-700 text-white">
                <p>{page}</p>
              </div>
              <div className="border text-sky-700 hover:bg-gray-300 cursor-pointer">
                <svg
                  onClick={() => setPage((prev) => prev + 1)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-4 mt-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
