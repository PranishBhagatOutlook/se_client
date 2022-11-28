import { useEffect, useState } from "react";

import RoomReservationsService from "../../services/RoomReservationsService";
import ListRoomReservation from "./ListRoomReservation/ListRoomReservation";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Summary from "./Summary";
import BuildingService from "../../services/BuildingService";
import RoomService from "../../services/RoomService";
import ResourceService from "../../services/ResourceService";

export default function AdminBoard() {
  const [summary, setSummary] = useState(false);
  const [buildingCount, setBuildingCount] = useState();
  const [roomCount, setRoomCount] = useState();
  const [resourceCount, setResourceCount] = useState();

  async function getBuildingCount() {
    const { data } = await BuildingService.getBuildingCount();
    setBuildingCount(data);
  }

  async function getRoomCount() {
    const { data } = await RoomService.getRoomCount();
    setRoomCount(data);
  }

  async function getResourceCount() {
    const { data } = await ResourceService.getResourceCount();
    setResourceCount(data);
  }

  const [clickRoomReservation, setClickRoomReservation] = useState(false);
  const [roomReservationList, setRoomReservationList] = useState([]);
  const [count, setCount] = useState(0);

  async function getAllRoomReservation() {
    const { data } = await RoomReservationsService.getAllRoomReservation();
    setRoomReservationList(data);
  }

  async function showReservations() {
    getAllRoomReservation();
    setClickRoomReservation(true);
  }

  function hideRoomReservationTable() {
    setClickRoomReservation(false);
  }

  useEffect(() => {
    getAllRoomReservation();
    getBuildingCount();
    getRoomCount();
    getResourceCount();
  }, []);

  useEffect(() => {
    getAllRoomReservation();
  }, [count]);

  function reloadComponent() {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }

  function showSummary() {
    setSummary(true);
  }
  function hideSummary() {
    setSummary(false);
  }

  return (
    <div>
      <h3>Admin Board</h3>
      <div>
        {summary && (
          <Button type="submit" onClick={() => hideSummary()}>
            Hide Overall Summary
          </Button>
        )}
        {!summary && (
          <Button type="submit" onClick={() => showSummary()}>
            Overall Summary
          </Button>
        )}
        {summary && (
          <div>
            <Summary
              buildingCount={buildingCount}
              roomCount={roomCount}
              resourceCount={resourceCount}
            />
          </div>
        )}
      </div>

      <div>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={(event) => (window.location.href = "/addBuilding")}>
            Add Building
          </Button>
          <Button onClick={(event) => (window.location.href = "/listBuilding")}>
            List Building
          </Button>
        </ButtonGroup>

        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={(event) => (window.location.href = "/addRoom")}>
            Add Room
          </Button>
          <Button onClick={(event) => (window.location.href = "/listRoom")}>
            List Room
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={(event) => (window.location.href = "/addResource")}>
            Add Resource
          </Button>
          <Button onClick={(event) => (window.location.href = "/listResource")}>
            List Resource
          </Button>
        </ButtonGroup>

        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={(event) => (window.location.href = "/allotment")}>
            Allotment
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          {clickRoomReservation && (
            <Button type="submit" onClick={() => hideRoomReservationTable()}>
              Hide Room Reservations
            </Button>
          )}
          {!clickRoomReservation && (
            <Button type="submit" onClick={() => showReservations()}>
              List Room Reservations
            </Button>
          )}
        </ButtonGroup>

        {clickRoomReservation && (
          <ListRoomReservation
            roomReservationList={roomReservationList}
            reloadComponent={reloadComponent}
          />
        )}
      </div>
    </div>
  );
}
