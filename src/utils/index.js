export const fetchCars = async (filters) => {
    const { manufacturer, year, fuel, model, limit } = filters;

    const headers = {
        "X-RapidAPI-Key": "570d46b2cfmsh9b267ec052f978ep1947b6jsn07a3f33018c4",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    //ek line main rakhne ka dhyan bhi rakhna hai
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer
        .split(" ")
        .join("+")}&year=${year}&fuel_type=${fuel}&limit=${limit}`;
    console.log(url, "it is called");
    const response = await fetch(url, { headers: headers });
    const result = await response.json();
    return result;
};

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImage = (car, angle) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("make", make);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
};
export default fetchCars;

export const updatedSearchParams = (type, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `?${searchParams.toString()}`;
    return newPathName;
};
