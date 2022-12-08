export function getCity(alleCity, paramID) {
    const city = alleCity.filter((city) => city.fields.stadtName === paramID);
    return city;
}
