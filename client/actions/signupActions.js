export function userSignupRequest(userData){
  return dispatch => {
    $.ajax({
      method: 'POST',
      url: `/api/users`,
      data: userData  
    });
  };
}