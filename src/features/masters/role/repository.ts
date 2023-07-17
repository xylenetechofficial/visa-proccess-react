import axios from "axios";
// import { endpoint } from "../../constant";
// import { ResponseInterface } from "../../types";
import { CountryInterface } from "./type";
import { endpoint } from "../../../constant";
import { ResponseInterface } from "../../../utils/api_helper";

export async function readCountryList() {
  let response: ResponseInterface;
  let data: CountryInterface[] = [];
  await axios
    .get(endpoint + "/country-list")
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
      data = response.data as CountryInterface[];
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return data;
}

export async function createCountry(
  country: CountryInterface
) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };

  const payload = {
    name: country.name,
  };
  await axios
    .post(endpoint + "/country", payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function updateCountry(
  id: number,
  country: CountryInterface
) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };

  const payload = {
    name: country.name,
  };

  await axios
    .patch(endpoint + "/country/" + id, payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function deleteCountry(id: number) {
  
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  await axios
    .delete(endpoint + "/country/" + id)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface; 
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}
