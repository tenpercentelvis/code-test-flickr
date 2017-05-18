
// api end point
import api from '../../api/api-jsonp';

// if api end point success, update app state with data
export const getDataSuccess = (data) => {
  return {
    type: 'getData',
    data,
  };
};

// get data from api endpoint
export const getData = (value) => {
  return (dispatch) => {
    return api.getData(value)
      .then(data => dispatch(getDataSuccess(data)))
      .catch((error) => {
        throw (error);
      });
  };
};
