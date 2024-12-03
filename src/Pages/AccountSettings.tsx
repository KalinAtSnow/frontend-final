import { useUserQuery } from "../Data/userMutation";
import LoginLogout from "../LoginLogoutbutton";

export function AccountSettings() {

    const { data: userData } = useUserQuery();

  return (
    <>
      <p>{userData?.forename} {userData?.surname}</p>
      <p>{userData?.email}</p>
      <p>{userData?.username}</p>
      <LoginLogout />
    </>
  );
}
