import { nanoid } from "nanoid";
import jsConvert from "js-convert-case";

export function getNanoID(length = 10) {
  return nanoid(length);
}

export function getFileName(path: string) {
  return path.split("\\").pop()!.split("/").pop();
}

export function convertDateFormat(dateString: string) {
  if (!dateString || dateString.trim() == "") return "";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(dateString);
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  if (date && month && year) return `${date} ${month} ${year}`;
  else return "";
}

export const addDaysToDate = (date: string, days: number) => {
  const startDate = new Date(date);

  // Define the number of days to add
  const numberOfDaysToAdd = days;

  // Calculate the new date by adding the number of days
  const endDate = new Date(
    startDate.getTime() + numberOfDaysToAdd * 24 * 60 * 60 * 1000
  );

  // Format the new date as a string
  const endDateString = endDate.toISOString().split("T")[0];

  // Output the new date
  console.log("New date:", endDateString);

  return endDateString;
};
export const getJwtToken = () => {
  return window.localStorage.getItem("jwt_token") ?? "";
};
export const SetJwtToken = (key: string) => {
  window.localStorage.setItem("jwt_token", key);
};

export function toTitleCase(caseString: string) {
  return jsConvert.toHeaderCase(caseString);
}

export function getInitials(name: string) {
  const names = name.split(" ");
  let initials = "";

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 0) {
      initials += names[i][0].toUpperCase();
    }
  }

  return initials.slice(0, 2);
}

// export const arrayToSum = (array: any = []) => {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {

//       if (array[i])
//           sum += parseFloat(array[i]);
//   }
//   console.log(sum)
//   return sum;
// }
