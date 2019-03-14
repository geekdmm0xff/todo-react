export const template1 = (value, tag) => `${tag}: ${value}`;

export const template2 = (value, tag) => `${tag}: ${value[0]}-${value[1]}万`;

export const template3 = (value, tag) => tag + ": " + value.join(" ");
