import axios, { type AxiosRequestConfig, type Method } from "axios";

const apiCall = async (
  url: string,
  method: Method = "GET",
  data?: any,
  headers: Record<string, string> = {}
): Promise<any> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers,
    data,
  };

  // Remove data for GET requests
  if (method.toUpperCase() === "GET") {
    delete config.data;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    // Axios error handling
    if (error.response) {
      throw new Error(error.response.data?.message || error.response.statusText || "API call failed");
    }
    throw new Error(error.message || "API call failed");
  }
};

export default apiCall;