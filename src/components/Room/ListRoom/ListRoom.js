import React, { useState, useEffect } from "react";
import RoomService from "../../../services/RoomService";
import EditRoomForm from "../EditRoom/EditRoomForm";
import RoomTable from "./RoomTable";
import { Comment } from "react-loader-spinner";
import ResourceService from "../../../services/ResourceService";
import ListResourceByRoom from "../ListResourceByRoom/ListResourceByRoom";
import MapParentComponent from "../../maps/mapParent.component";
export default function ListRoom(props) {
  const [rooms, setRooms] = useState([]);
  const [resources, setResources] = useState([]);
  const [displayResources, setDisplyResources] = useState(false);
  const [Direction, setDirection] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const [loaded, setLoaded] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState();
  const [count, setCount] = useState(0);
  const [selectedRoomDirection, setSelectedRoomDirection] = useState({});

  const [message, setMessage] = useState();
  const [status, setStatus] = useState(false);

  async function getAllRoom() {
    const { data } = await RoomService.getAllRoom();
    setRooms(data);
    setLoaded(true);
  }

  async function getResourceByRoom(room) {
    const { data } = await ResourceService.getResourceByRoom(room.id);
    setResources(data);
  }

  useEffect(() => {
    getAllRoom();
  }, []);

  useEffect(() => {
    getAllRoom();
  }, [count]);

  function onEditClick(room) {
    setDisplyResources(false);
    setEdit(true);
    setStatus(false);
    setSelectedRoom(room);
  }
  function showDirection(room) {
    console.log(room);
    setSelectedRoomDirection(room);
    setDirection(true);
    setShowTable(false);
  }
  function makeEditFalse() {
    setEdit(false);
    setStatus(true);
    setMessage("Room  updated successfully");
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }

  function viewResources(room) {
    setEdit(false);
    setDisplyResources(true);
    getResourceByRoom(room);
    setSelectedRoom(room);
  }

  function hideResources() {
    setDisplyResources(false);
    setEdit(false);
  }

  if (loaded && props.currentUser.roles[0] === "ROLE_ADMIN") {
    return (
      <div>
        {Direction ? <MapParentComponent room={selectedRoomDirection} /> : null}
        {showTable ? (
          <RoomTable
            rooms={rooms}
            onEditClick={(e) => {
              onEditClick(e);
            }}
            showDirection={(e) => {
              showDirection(e);
            }}
            viewResources={viewResources}
          />
        ) : null}
        {edit && (
          <EditRoomForm
            selectedRoom={selectedRoom}
            makeEditFalse={makeEditFalse}
          />
        )}
        {displayResources && (
          <ListResourceByRoom
            resources={resources}
            selectedRoom={selectedRoom}
            hideResources={hideResources}
            displayResources={displayResources}
          />
        )}
        {status && message}
      </div>
    );
  } else {
    return (
      <div>
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#FFB81C"
          backgroundColor="#154734"
        />
      </div>
    );
  }
}
