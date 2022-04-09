import { ApiData } from "../interface/api-data";
import { FetchOptions } from "../interface/fetch-options";
import { User } from "../interface/user";

const BASE_URL = "http:localhost:3000";

const saveUser = async (data: User): Promise<ApiData> => {
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  };

  return await fetch("/api/save-user", fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export default saveUser;
