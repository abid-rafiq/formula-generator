import { UPDATE_TEAMS } from "../../constants/constants";

export const teamMemberAction = payload => {
  return {
    type: UPDATE_TEAMS,
    payload: payload
  };
};

export const addMap = payload => {
  return {
    type: "ADD_MAP",
    payload: payload
  };
};

export const uploadMaps = payload => {
  return {
    type: "UPLOAD_MAPS",
    payload: payload
  };
};

export const updateMapData = payload => {
  return {
    type: "UPDATE_MAP_DATA",
    payload: payload
  };
};

export const removeMap = payload => {
  return {
    type: "REMOVE_MAP",
    payload: payload
  };
};

export const generalAction = (type, payload) => {
  return {
    type,
    payload
  };
};
