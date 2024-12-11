import { useState } from "react";
import { useUserQuery } from "../Data/userMutation";
import LoginLogout from "../LoginLogoutbutton";

export function AccountSettings() {
  const { data: userData } = useUserQuery();

  const [dataSaver, setDataSaver] = useState<boolean>(() => {
    const savedDataSaver = localStorage.getItem("dataSaver");
    return savedDataSaver === "true";
  });

  const dataSaverClicked = () => {
    const newDataSaver = !dataSaver;
    setDataSaver(newDataSaver);
    localStorage.setItem("dataSaver", newDataSaver.toString());
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-primary-800 mb-6">
            Account Settings
          </h1>

          <div className="mb-6">
            <p className="text-lg text-primary-800 font-medium">
              User Information
            </p>
            <p className="text-gray-700 text-xl mt-2">
             {userData?.forename} {userData?.surname}
            </p>
            
            <p className="text-gray-700 text-xl">
              {userData?.email}
            </p>
            <p className="text-gray-700 text-xl mb-4">
             {userData?.username}
            </p>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={!dataSaver}
              onChange={() => dataSaverClicked()}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-gray-700 text-lg">
              Data Saver - Causes images to not be loaded
            </label>
          </div>

          <div className="mt-8">
            <LoginLogout />
          </div>
        </div>
      </div>
    </>
  );
}
