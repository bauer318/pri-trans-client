import React from 'react';

export const getUserSortRq = (roleKey, authStatus) => {
    switch (roleKey) {
        case 2: {
            return {
                userRoleRq: {
                    id: 1,
                    userRole: "ROLE_ADMIN"
                }, authStatus: authStatus
            }
        }
        case 3: {
            return {
                userRoleRq: {
                    id: 2,
                    userRole: "ROLE_MODERATOR"
                }, authStatus: authStatus
            }
        }
        case 4: {
            return {
                userRoleRq: {
                    id: 3,
                    userRole: "ROLE_AGENT"
                }, authStatus: authStatus
            }
        }
        case 5: {
            return {
                userRoleRq: {
                    id: 4,
                    userRole: "ROLE_CLIENT"
                }, authStatus: authStatus
            }
        }

    }
}
export const printError = (error) =>{
    if(error.response){
        // Request made but the server responded with an error
        console.log('error 1 ',error.response.data);
        console.log('error 1 ',error.response.status);
        console.log('error 1 ',error.response.headers);
    }
    else if(error.request){
        // Request made but no response is received from the server.
        console.log('error 2 ',error.request);
    }else{
        // Error occured while setting up the request
        console.log('Error', error.message);
    }
}

