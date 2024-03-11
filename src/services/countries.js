import api from "./apiConfig.js";

export const getCountries = async () => {
  try {
    const response = await api.get("/countries");
    return response.data;
  } catch (error) {
    console.error("Error getting all countries", error);
  }
};

export const getCountry = async (id) => {
  try {
    const response = await api.get(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting country", error);
  }
};

export const createCountry = async (countryData) => {
  try {
    const response = await api.put(`/countries/${id}, countryData`);
    return response.data;
  } catch (error) {
    console.error("Error creating country", error);
  }
};

export const editCountry = async (id, countryData) => {
  try {
    const response = await api.put(`/countries/${id}, countryData`);
    return response.data;
  } catch (error) {
    console.error("Error edit country", error);
  }
};

export const deleteCountry = async (id) => {
  try {
    const response = await api.delete(`/countries/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error removing country", error);
  }
};
