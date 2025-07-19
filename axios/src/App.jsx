import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    // console.log(response.data);

    setData(response.data);
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <button
        onClick={getData}
        classNameName="bg-blue-400 text-white p-3 rounded-md flex justify-center items-center "
      >
        Get Data
      </button> */}
      <h1 className="text-2xl font-bold text-blue-500 text-center m-2">
        Lorem Picsum api Data
      </h1>
      <div></div>
      <div className="">
        {data.map(function (elem, id) {
          return (
            <div
              key={id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-101 ml-[6%] mt-[2%] inline-block"
            >
              <img
                className="w-full h-48 object-cover"
                src={elem.download_url}
                alt="Beautiful landscape"
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {elem.author}
                </div>

                <p className="text-gray-600 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
