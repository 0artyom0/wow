import apiService from "../../services/apiService";
import * as actionTypes from "../types/aboutUsTypes";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_ABOUT_US_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_ABOUT_US_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_ABOUT_US_ERROR,
  payload: error,
});

export const fetchAboutUs = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("about")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
