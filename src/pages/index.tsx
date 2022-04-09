import { useState } from "react";
import Select from "react-select";
import formatData from "../lib/remove-empty";
import Option from "../components/select/select";
import saveUser from "../apiCalls/request";
import { User } from "../interface/user";

export default function Home({ options }) {
  const [name, setName] = useState("");
  const [sector, setSector] = useState({});
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("")
  const [savedName, setSavedName] = useState("")
  const [userSector, setUserSector] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '') {
      alert("Your must enter your name!")
      return
    }
    if(!sector) {
      alert("Please select a sector")
      return
    }
    if(!checked) {
      alert("You must agree to the terms and conditions")
      return
    }
    const data = {
      name,
      sector,
      checked,
    } as User;
    await saveUser(data).then((res) => {
      setMessage(res.success.message)
      setSavedName(res.success.user.name)
      setUserSector(res.success.user.sector.value)
      setAcceptedTerms(res.success.user.checked)
    });
  };

  return (
    <div className="container flex p-4 mx-auto min-h-screen justify-center">
      <main className="flex flex-col items-center mx-auto space-y-4">
        <h1 className="text-3xl mt-5 max-w-xl text-center">
          Please enter your name and pick the sectors your currently involved in
        </h1>

        <div className="bg-slate-300 w-full p-6 max-w-md h-1/2 flex items-center rounded-xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col justify-center w-full"
          >
            <div className="flex justify-center space-x-4 items-center">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                className="flex-1 p-2 rounded ring-1 focus:outline-none focus:ring-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="sectors">Sectors:</label>
              <Select
                components={{
                  Option,
                }}
                isClearable
                isSearchable
                formatGroupLabel={(value) => {
                  return value.label;
                }}
                formatOptionLabel={(value) => {
                  //@ts-ignore
                  return value.label;
                }}
                getOptionValue={(value) => {
                  //@ts-ignore
                  return value.label;
                }}
                onChange={(value) => {
                  console.log(value);
                  setSector(value);
                }}
                options={options}
                placeholder="Select"
                className="flex-1"
              />
            </div>
            <div className="flex mt-6 ml-16">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">terms and conditions</span>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16 w-min"
            >
              Save
            </button>
          </form>
        </div>

        {message && (
          <div className="w-80 bg-slate-300 h-60 p-4 flex flex-col rounded-xl justify-center">
            <p className="text-center">{message}</p>
            <div className="mt-6 mx-6">
              <p>Name: {savedName}</p>
              <p>Sector: {userSector}</p>
              <p>Accepted terms: {acceptedTerms && "Yes"}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps({ query, res }) {
  const response = await fetch("http://localhost:3000/api/sectors", {
    credentials: "include",
  });
  const sectors = await response.json();
  const formatedSectors = formatData(sectors, "options");
  return {
    props: {
      options: formatedSectors,
    },
  };
}
