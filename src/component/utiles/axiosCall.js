import axios from "axios";

const ApiCall = async ({
  url,
  method = "post",
  data = null,
  signal,
  headers = {
    "Content-Type": "application/json; charset=utf-8",
  },
}) => {
  // console.log("URL -->", url);
  // console.log("headers -->", headers);
  try {
    const Base_Url = process.env.REACT_APP_BASE_URL + url;
    const response = await axios({
      method,
      url: Base_Url,
      data,
      headers,
      signal: signal,
    });
    // console.log(response,"check21");
    return response.data;
  } catch (error) {
    // console.log("Axios Error ==>", error);
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      // handle error
      throw error;
    }
  }
};

export default ApiCall;
