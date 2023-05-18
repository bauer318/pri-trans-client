import React from 'react';

export const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const remove = key => {
    localStorage.removeItem(key);
}

export const get = key => {
    return JSON.parse(localStorage.getItem(key));
}