
export function authHeader() {
    // return authorization header with jwt token
   
    let accessToken = localStorage.getItem("accessToken")
    let tenantID = 203
  
    if (accessToken) {
      return {
        Authorization: `Bearer ${accessToken}`,
        "X-TENANT-ID": tenantID,
      };
    } else {
      return {};
    }
  }
  
  
  //authHeader file