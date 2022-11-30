import axios from "axios";
import authHeader from "./auth-header";
import env from "react-dotenv";

const RESOURCE_URL = env.abc+"resource";

class RoomService {
  addResource2(resource) {
    return axios.post(RESOURCE_URL + "/addResource2", resource, {
      headers: authHeader(),
    });
  }

  getAllResource() {
    return axios.get(RESOURCE_URL + "/getAllResource", {
      headers: authHeader(),
    });
  }

  getResourceCount() {
    return axios.get(RESOURCE_URL + "/getResourceCount", {
      headers: authHeader(),
    });
  }

  getResourceByRoom(roomId) {
    return axios.get(RESOURCE_URL + "/getResourceByRoom/" + roomId, {
      headers: authHeader(),
    });
  }
}

export default new RoomService();
