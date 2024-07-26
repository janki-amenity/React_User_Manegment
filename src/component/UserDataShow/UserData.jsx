import React, { useEffect, useState } from "react";
import ApiCall from "../utiles/axiosCall";
import { Get_User_Data_Url } from "../utiles/ApiCallEndPoints";
import Table from "rc-table";

const UserData = () => {
  const user_token = localStorage.getItem("authorization");
  const [data, setData] = useState();
  // console.log("data", data);
  useEffect(() => {
    getUserData();
  }, []);

  const columns = [
    {
      title: "User Name",
      dataIndex: "fullName",
      key: "fullName",
      width: 100,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
    },
  ];

  const getUserData = async () => {
    const getUserData = {
      url: Get_User_Data_Url,
      method: "get",
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    };
    const getUserDetails = await ApiCall(getUserData);
    // console.log("getUserDetails", getUserDetails);
    if (getUserDetails.return_code == "get_user_data_successfully") {
      setData(getUserDetails.data);
    }
  };

  return (
    <div>
      <h1>User Data</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default UserData;
