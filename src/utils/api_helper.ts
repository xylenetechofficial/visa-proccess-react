import axios, { AxiosError } from "axios";
import { endpoint } from "../constant";
import { GenerateLog } from "./logger";
import { json } from "react-router-dom";

export class ApiHelper {
  /**
   *
   * @param path
   * @param options
   * `queryParameters` { name: "foo", age: 18 } become `?name=foo&age=18`
   *
   *  `tokenType` `AuthTokenType` interface
   *
   *  `contentType` `ContentType` interface
   *
   *  `isURL` `boolean` if path `https://example.com/api/get-data`
   *
   *  `cacheTime` `number` cache the response value in minute
   * @returns
   */
  static async get(
    path: string,
    {
      queryParameters = {},
      tokenType = AuthTokenType.noToken,
      contentType = ContentType.text,
      isURL = false,
      cacheTime = 0,
    }
  ) {
    let url = "";

    // get url
    url = UrlHelper.getUrl(path);

    // if path is url
    if (isURL) url = path;

    // get query params
    if (queryParameters) url = UrlHelper.getQueryUrl(url, queryParameters);

    // get all heders
    let headers = {};
    headers = UrlHelper.getToken(headers, tokenType);
    headers = UrlHelper.getContentType(headers, contentType);

    // default response
    let response: ResponseInterface = {
      code: 404,
      message: "Something Went Wrong",
    };

    // get response from cache
    const UCM = new UrlCacheManager(url);
    if (cacheTime && !UCM.isExpired()) {
      response = UCM.getData();
      return response;
    }

    await axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res); // Only Dev
        response = res.data as ResponseInterface;
        this.CheckAuth(response);

        // store response to cache
        if (cacheTime) UCM.setData(response, cacheTime);
      })
      .catch((err) => {
        console.log("//  =====  HTTP FAILD  =====  \\"); // Only Dev
        console.log(err); // Only Dev
        this.ErrorLogger(err);
      });
    return response;
  }
  static async post(
    path: string,
    body: object,
    {
      queryParameters = {},
      tokenType = AuthTokenType.noToken,
      contentType = ContentType.form,
      isURL = false,
    }
  ) {
    let url = "";

    // get url
    url = UrlHelper.getUrl(path);

    // if path is url
    if (isURL) url = path;

    // get query params
    if (queryParameters) url = UrlHelper.getQueryUrl(url, queryParameters);

    // get all heders
    let headers = {};
    headers = UrlHelper.getToken(headers, tokenType);
    headers = UrlHelper.getContentType(headers, contentType);

    let payload: any;

    if (contentType == ContentType.form) {
      payload = new FormData();

      Object.entries(body).map(([key, value]) => {
        if (typeof value === "object") {
          payload.append(key, value);
        } else if (typeof value !== "undefined") {
          payload.set(key, value?.toString());
        }
      });
    } else if (contentType === ContentType.json) {
      payload = body;
    }

    // default response
    let response: ResponseInterface = {
      code: 404,
      message: "Something Went Wrong",
    };

    await axios
      .post(url, payload, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res); // Only Dev
        response = res.data as ResponseInterface;
        this.CheckAuth(response);
      })
      .catch((err) => {
        console.log("//  =====  HTTP FAILD  =====  \\"); // Only Dev
        console.log(err); // Only Dev
        this.ErrorLogger(err);
      });
    return response;
  }
  static async patch(
    path: string,
    body: object,
    {
      queryParameters = {},
      tokenType = AuthTokenType.noToken,
      contentType = ContentType.json,
      isURL = false,
    }
  ) {
    let url = "";

    // get url
    url = UrlHelper.getUrl(path);

    // if path is url
    if (isURL) url = path;

    // get query params
    if (queryParameters) url = UrlHelper.getQueryUrl(url, queryParameters);

    // get all heders
    let headers = {};
    headers = UrlHelper.getToken(headers, tokenType);
    headers = UrlHelper.getContentType(headers, contentType);

    let payload = {};

    if (contentType === ContentType.json) {
      payload = body;
    }

    // default response
    let response: ResponseInterface = {
      code: 404,
      message: "Something Went Wrong",
    };
    await axios
      .patch(url, payload, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res); // Only Dev
        response = res.data as ResponseInterface;
        this.CheckAuth(response);
      })
      .catch((err: AxiosError) => {
        console.log("//  =====  HTTP FAILD  =====  \\"); // Only Dev
        console.log(err); // Only Dev
        this.ErrorLogger(err);
      });
    return response;
  }
  static async delete(
    path: string,
    {
      queryParameters = {},
      tokenType = AuthTokenType.noToken,
      contentType = ContentType.text,
      isURL = false,
    }
  ) {
    let url = "";

    // get url
    url = UrlHelper.getUrl(path);

    // if path is url
    if (isURL) url = path;

    // get query params
    if (queryParameters) url = UrlHelper.getQueryUrl(url, queryParameters);

    // get all heders
    let headers = {};
    headers = UrlHelper.getToken(headers, tokenType);
    headers = UrlHelper.getContentType(headers, contentType);

    // default response
    let response: ResponseInterface = {
      code: 404,
      message: "Something Went Wrong",
    };
    await axios
      .delete(url, {
        headers: headers,
      })
      .then((res) => {
        // console.log(res); // Only Dev
        response = res.data as ResponseInterface;
        this.CheckAuth(response);
      })
      .catch((err) => {
        console.log("//  =====  HTTP FAILD  =====  \\"); // Only Dev
        console.log(err); // Only Dev
        this.ErrorLogger(err);
      });
    return response;
  }

  static async CheckAuth(response: ResponseInterface) {
    if (response.code == 401) {
      const jwt_token = window.localStorage.getItem("jwt_token") ?? "";
      if (jwt_token != "") {
        window.localStorage.setItem("jwt_token", "");
        window.location.reload();
      }
    }
  }
  static async ErrorLogger(err: AxiosError) {
    const url = UrlHelper.getUrl("/error-log");
    const payload = await GenerateLog(
      err.response?.statusText ?? "",
      err.response?.data ?? {}
    );
    return;
    // get all heders
    let headers = {};
    headers = UrlHelper.getToken(headers, AuthTokenType.JWT);
    headers = UrlHelper.getContentType(headers, ContentType.json);

    await axios
      .post(url, payload, {
        headers: headers,
      })
      .then((res) => {
        console.log("//  =====  Logger Successfully  =====  \\"); // Only Dev
        console.log(res); // Only Dev
      })
      .catch((err) => {
        console.log("//  =====  Logger Request FAILD  =====  \\"); // Only Dev
      });
  }
}
export class UrlHelper {
  static getUrl(path: string) {
    return endpoint + path;
  }
  static getQueryUrl(url: string, queryParameters: object) {
    let query = "";
    let counter = 0;
    Object.entries(queryParameters).map(([key, value]) => {
      if (counter === 0) {
        query += "?";
      } else {
        query += "&";
      }
      query += key + "=" + value.toString();
      counter++;
    });
    return url + query;
  }

  static getToken(headers: object, authTokenType: AuthTokenType): object {
    const ls = window.localStorage;
    switch (authTokenType) {
      case AuthTokenType.JWT:
        headers = {
          ...headers,
          Authorization: "Bearer " + ls.getItem("jwt_token"),
        };
        break;
      case AuthTokenType.apiKey:
        headers = { ...headers, "X-API-KEY": ls.getItem("admin_key") };
        break;
    }
    return headers;
  }

  static getContentType(headers: object, contentType: ContentType): object {
    switch (contentType) {
      case ContentType.text:
        headers = { ...headers, "Content-Type": "text/plain" };
        break;
      case ContentType.json:
        headers = { ...headers, "Content-Type": "application/json" };
        break;
      case ContentType.form:
        headers = { ...headers, "Content-Type": "multipart/form-data" };
        break;
    }
    return headers;
  }
}
export enum AuthTokenType {
  noToken,
  JWT,
  apiKey,
}
export enum ContentType {
  text,
  json,
  form,
}

export interface ResponseInterface {
  code: number;
  message: string;
  data?: unknown;
  additional_data?: AdditionalDataInterface;
}

export interface AdditionalDataInterface {
  pagination: {
    page: number;
    page_count: number;
    item_count: number;
    limit?: number;
    sno_base: number;
  };
}

interface CacheData {
  value: any;
  timestamp: number;
}

class UrlCacheManager {
  private url = "";
  private data: CacheData = { value: "", timestamp: 0 };
  private ls = localStorage;

  constructor(url: string) {
    this.url = url;
  }

  public isExpired() {
    if (this.ls.getItem(this.url) == null) return true;

    this.data = JSON.parse(this.ls.getItem(this.url) ?? "");

    const currentTimestamp = new Date().getTime();
    if (this.data.timestamp < currentTimestamp) return true;

    return false;
  }

  public getData() {
    return this.data.value;
  }

  /**
   *
   * @param value any type
   * @param cacheTime in minutes
   */
  public setData(value: any, cacheTime?: number) {
    const currentTimestamp = new Date().getTime();

    let timestamp = currentTimestamp;

    if (cacheTime != undefined) {
      timestamp = timestamp + cacheTime * 60 * 1000;
    } else {
      timestamp = timestamp + 1 * 60 * 1000;
    }

    this.data = {
      value: value,
      timestamp: timestamp,
    };

    this.ls.setItem(this.url, JSON.stringify(this.data));
  }
}

export class PaginationManager {
  private url = "";
  static data: AdditionalDataInterface = {
    pagination: {
      page: 1,
      page_count: 0,
      item_count: 0,
      limit: 0,
      sno_base: 0,
    },
  };
  static ls = localStorage;

  static async getData() {
    const data = this.ls.getItem("additional_data") ?? "";
    console.log("additional_data: ", data);
    if (data == "") return this.data;

    return JSON.parse(data) as AdditionalDataInterface;
  }

  /**
   * @param pagination any type
   */
  static async setData(additional_data: AdditionalDataInterface) {
    console.log("Savig additional_data: ", additional_data);
    this.ls.setItem("additional_data", JSON.stringify(additional_data));
  }
}
