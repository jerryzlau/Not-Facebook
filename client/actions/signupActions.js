export function userSignupRequest(userData){
  return dispatch => {
    return $.ajax({
      type: 'POST',
      url: `/api/users`,
      data: userData  
    });
  };
}