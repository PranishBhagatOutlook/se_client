import axios from "axios";
import authHeader from "./auth-header";

const RESERVATION_URL = "http://localhost:8080/api/reservation";

class RoomReservationService {
  getAllRoomReservation() {
    return axios.get(RESERVATION_URL + "/getAllRoomReservation", {
      headers: authHeader(),
    });
  }

  acceptRoomReservation(id) {
    return axios.put(RESERVATION_URL + "/acceptRoomReservation/" + id, {
      headers: authHeader(),
    });
  }
}

export default new RoomReservationService();
