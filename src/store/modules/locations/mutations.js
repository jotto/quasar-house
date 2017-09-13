import location from "../../../models/location";

export const setLocations = (state, locations) => state.list = locations;

export const addLocation = (state, location) => state.list.push(location);
