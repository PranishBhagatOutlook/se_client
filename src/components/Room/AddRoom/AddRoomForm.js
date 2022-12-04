import Button from "@mui/material/Button";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

export default function AddRoomForm(props) {
  const options = props.buildings.map((building) => (
    <option key={building.id} value={building.id}>
      {building.name}
    </option>
  ));
  return (
    <div>
      <h3 style={{ color: "#154734" }}> Add Room</h3>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">
          Name
          <input ref={props.nameRef} type="name" id="name" required />
        </label>

        <label htmlFor="roomType">
          Room Type
          <select onChange={props.handleRoomTypeChange}>
            <option value="0"> Select Room Type</option>
            <option value="CLASSROOM">Class Room</option>
            <option value="WASHROOM">Wash Room</option>
            <option value="LAB">Lab</option>
            <option value="STAFFROOM">Staff Room</option>
          </select>
        </label>

        <label htmlFor="isBookable" value={props.isBookable}>
          Bookable?
          <input type="checkbox" onChange={props.handleIsBookableChange} />
        </label>

        <label htmlFor="buildings">
          Associated Building
          <select onChange={props.handleSelectedBuildingIdChange}>
            {options}
          </select>
        </label>

        <label htmlFor="floor">
          Floor?
          <input ref={props.floorRef} type="number" id="floor" required />
        </label>

        <Button
          style={{ backgroundColor: "#154734", color: "#FFB81C" }}
          startIcon={<SaveRoundedIcon />}
          variant="contained"
          type="submit"
        >
          {" "}
          Save Room
        </Button>
      </form>
    </div>
  );
}
