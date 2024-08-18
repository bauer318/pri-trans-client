import {getItem, removeItem, saveItem} from "./LocalStorageService";
import axios from "axios";
import {logout, refreshP} from "../App";

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
        /*console.log('error response data ', error.response.data);
        console.log('error response status ', error.response.status);
        console.log('error response headers ', error.response.headers);*/
        if (error?.response?.status === 403) {
            callBackRemoveData();
            window.location = "/";

        }
    } else if (error.request) {
        //console.log('error request ', error.request);
        alert("Something went wrong please try again later");
    } else {
        //console.log('others error', error.message);
    }
}

export const callBackRemoveData = () => {
    removeItem('connectedUser');
    removeItem('jwtToken');
    localStorage.clear();
    logout();
    refreshP();
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
        },
        {
            name: 'Cameroon',
            code: 'CM',
            iso: 'CMR',
            phoneCode: '+237'
        },
        {
            name: 'Congo',
            code: 'CG',
            iso: 'COG',
            phoneCode: '+242'
        },
        {
            name: 'Ivory Coast',
            code: 'CI',
            iso: 'CIV',
            phoneCode: '+225'
        },
        {
            name: 'Benin',
            code: 'BJ',
            iso: 'BEN',
            phoneCode: '+229'
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
            code: 'USD',
            symbol: '$'
        },
        {
            name: 'Central African CFA franc',
            code: 'XAF',
            symbol: 'F.CFA'
        },
        {
            name: 'West African CFA franc',
            code: 'XOF',
            symbol: 'F.CFA'
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
    return {Authorization: getItem('jwtToken')};
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
    for (let i = arrayIn?.length; i--; i >= 0) {
        arrayOut.push(arrayIn[i]);
    }
    return arrayOut;
}
export const formatDate = date => {
    const dateArr = date?.split('-');
    const dateArrayReverse = reverseArray(dateArr);
    let dateOut = "";
    dateArrayReverse?.map((dateElem, it) => {
        dateOut += dateElem;
        if (it < dateArrayReverse?.length - 1) {
            dateOut += '/';
        }
    });
    return dateOut;
}

export const getAgentAccountRq = (account, connectedUser) => {
    return {
        currency: {
            currencyId: account?.currency?.currencyId
        },
        accountType: {
            accountTypeId: account?.accountType?.accountTypeId
        },
        country: connectedUser?.country?.countryName
    }
}
export const baseURL = process.env.REACT_APP_API_URL;
//export const baseURL = 'http://localhost:8080/api';
const instance = axios.create({
    baseURL: baseURL,
    headers: {Authorization: getItem('jwtToken')}
});

export const roundToOnlyToDisplay = (sourceAmount, callbackSetState) => {
    const roundedAmount = roundValue(sourceAmount);
    callbackSetState(roundedAmount);
}

export const roundValue = value => {
    return Math.round(value * 100) / 100;
}

export const getTelephoneArray = event => {
    const telephoneArray = event.target.value?.split("");
    const length = telephoneArray.length;
    if (length === 4 || length === 8 || length === 11) {
        const k = telephoneArray[length - 1];
        if (k !== "-") {
            telephoneArray[length - 1] = "-";
            telephoneArray[length] = k;
        }
    }
    return telephoneArray;
}

export const getAccountTypeFr = (accountTypeEn) => {
    return accountTypeEn === 'main' ? 'principale' : 'de financement';
}

export const timeAgo = (datetimeStr) => {
    const date = new Date(datetimeStr);
    const now = new Date();

    const timeDifference = now.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const prefix = 'Il y a';
    if (days > 0) {
        return days === 1 ? `${prefix} 1 jour` : `${prefix} ${days} jours`;
    } else if (hours > 0) {
        return hours === 1 ? `${prefix} 1 heure` : `${prefix} ${hours} heures`;
    } else if (minutes > 0) {
        return minutes === 1 ? `${prefix} 1 minute` : `${prefix} ${minutes} minutes`;
    } else {
        return seconds <= 10 ? 'maintenant' : `${prefix} ${seconds} seconds`;
    }
}

export const handleCopyText = (value, setCopied) => {
    navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};

export const transferStatus = [
    {
        name: 'pending',
        value: 'En cours'
    },
    {
        name: 'closed',
        value: 'Transféré'
    },
    {
        name: 'partially',
        value: 'En partie transféré'
    },
    {
        name: 'canceled',
        value: 'Annulé'
    }
]

export const getStatusFr = statusEn => {
    switch (statusEn) {
        case 'pending':
            return 'En cours';
        case 'closed':
            return 'Transféré';
        case 'partially':
            return 'En partie transféré';
        case 'canceled':
            return 'Annulé';
        default:
            return 'Status inconnu';
    }
}
export const getStatusToPrint = () => {
    return transferStatus.filter(transferStatus => transferStatus.name !== 'pending');
}

export const isExpiredCode = (expireAt) =>{
    const currentTime = Date.now();
    const difference = expireAt - currentTime;
    return difference < 0;
}

export const toBotTelegramOnClick = (generatedCode, setCanGoToTelegramBot) => {
    const pendingCode = {
        code: generatedCode
    }
    setCanGoToTelegramBot(false);
    saveItem("pendingCode", pendingCode);
}

export default instance;

