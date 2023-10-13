import {get} from "./LocalStorageService";


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

export const printError = (error) => {
    if (error.response) {
        // Request made but the server responded with an error
        console.log('error response data ', error.response.data);
        console.log('error response status ', error.response.status);
        console.log('error response headers ', error.response.headers);
    } else if (error.request) {
        // Request made but no response is received from the server.
        console.log('error request ', error.request);
        alert("Something went wrong please try again later");
    } else {
        // Error occurred while setting up the request
        console.log('others error', error.message);
    }
}

const countriesAPI = () => {
    return [
        {
            name: 'Russia',
            code: 'RU',
            iso: 'RUS',
            phoneCode: '+7'
        },
        {
            name: 'USA',
            code: 'US',
            iso: 'USA',
            phoneCode: '+1'
        },
        {
            name: 'DR Congo',
            code: 'CD',
            iso: 'COD',
            phoneCode: '+243'
        },
        {
            name: 'Angola',
            code: 'AO',
            iso: 'AGO',
            phoneCode: '+244'
        }
    ]
}

const currenciesAPI = () => {
    return [
        {
            name: 'Angolan kwanza',
            code: 'AOA',
            symbol: 'Kz'
        },
        {
            name: 'Congolese franc',
            code: 'CDF',
            symbol: 'FC'
        },
        {
            name: 'Euro',
            code: 'EUR',
            symbol: '£'
        },
        {
            name: 'Russian ruble',
            code: 'RUB',
            symbol: '₽'
        },
        {
            name: 'United States dollar',
            code: 'USN',
            symbol: '$'
        },
    ]
}

export const getCountryByName = name => {
    return countriesAPI().filter(country => country.name === name)[0];
}

export const getCurrencyByName = name => {
    return currenciesAPI().filter(currency => currency.name === name)[0];
}

export const getToken = () => {
    return {Authorization: get('jwtToken')};
}

export const extractRegisteredUserId = locationArray => {
    const length = locationArray?.length;
    return locationArray[length - 1];
}


export const getUserHomePath = userRole => {
    switch (userRole) {
        case 'ROLE_ADMIN':
            return '/admin/users';
        case 'ROLE_MODERATOR':
            return 'moderator/users';
        case 'ROLE_AGENT':
            return 'agent/account';
        case 'ROLE_CLIENT':
            return 'client/home';
    }
}
const reverseArray = arrayIn => {
    let arrayOut = [];
    for (let i = arrayIn.length; i--; i >= 0) {
        arrayOut.push(arrayIn[i]);
    }
    return arrayOut;
}
export const formatDate = date => {
    const dateArr = date.split('-');
    const dateArrayReverse = reverseArray(dateArr);
    let dateOut = "";
    dateArrayReverse.map((dateElem, it) => {
        dateOut += dateElem;
        if (it < dateArrayReverse.length - 1) {
            dateOut += '/';
        }
    });
    return dateOut;
}

