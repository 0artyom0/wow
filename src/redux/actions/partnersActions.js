// reviewsActions.js
import apiService from "../../services/apiService";
import * as actionTypes from "../types/partnersType";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_PARTNERS_LOADING,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_PARTNERS_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_PARTNERS_ERROR,
  payload: error,
});

export const fetchPartners = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    apiService
      .get("partners")
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
};
