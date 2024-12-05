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
      <p className="text-primary-800 text-xl ml-2">{userData?.forename} {userData?.surname}</p>
      <p className="text-primary-800 text-xl ml-2">{userData?.email}</p>
      <p className="text-primary-800 text-xl ml-2 mb-2">{userData?.username}</p>
      <input type="checkbox" checked={dataSaver} onChange={() => dataSaverClicked()} className="ml-2" />
      <label className="ml-2">
        Data Saver
      </label>
      <div className="">
        <LoginLogout />
      </div>
    </>
  );
}
