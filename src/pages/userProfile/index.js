import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { userProfile } from "../../store/slices/userProfileSlice";
import UserProfile from "./userProfile";

const UsersProfile = () => {
  const dispatch = useAppDispatch();
  const kitchenProfile = useAppSelector((store) => store.userProfile);
  const { data } = kitchenProfile;

  const userData = data.data;
  
  const Email = userData && userData ? userData.user.email : "";
  const Role = userData && userData ? userData.user.role : "";
  const mobile_number = userData && userData ? userData.user.mobile_number : "";
  const first_name = userData && userData ? userData.user.first_name : "";
  const last_name = userData && userData ? userData.user.last_name : "";
  const address = userData && userData ? userData.address : "";
  const gender = userData && userData ? userData.gender : "";
  const image = userData && userData ? userData.avatar : "";

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <>
      <UserProfile
        email={Email}
        role={Role}
        phoneNumber={mobile_number}
        firstName={first_name}
        lastName={last_name}
        address={address}
        gender={gender}
        image={image}
      />
    </>
  );
};

export default UsersProfile;
