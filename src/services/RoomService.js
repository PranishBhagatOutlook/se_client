import { AssignmentReturned } from "@mui/icons-material";
import axios from "axios";
import authHeader from "./auth-header";

const ROOM_URL = "http://localhost:8080/api/room";

class RoomService {
  addRoom(room) {
    return axios.post(ROOM_URL + "/addRoom2", room, {
      headers: authHeader(),
    });
  }

  findAll() {
    return axios.get(ROOM_URL + "/findAllRoom", { headers: authHeader() });
  }

  updateRoom(room) {
    return axios.put(ROOM_URL + "/updateRoom", room, { headers: authHeader() });
  }

  findAllByBuildingId(buildingId) {
    return axios.get(ROOM_URL + "/findAllByBuildingId/" + buildingId, {
      headers: authHeader(),
    });
  }

  getAllBookableRoom() {
    return axios.get(ROOM_URL + "/allBookableRoom", { headers: authHeader() });
  }

  getRoomCount() {
    return axios.get(ROOM_URL + "/getRoomCount", { headers: authHeader() });
  }

  getRoomByBuilding(building) {
    console.log(building.id);
    return axios.get(ROOM_URL + "/getRoomByBuildingId/" + building.id, {
      headers: authHeader(),
    });
  }

  getBookableRoomByBuilding(buildingId) {
    return axios.get(ROOM_URL + "/getBookableRoomByBuilding/" + buildingId, {
      headers: authHeader(),
    });
  }
}

export default new RoomService();
