import axios from "axios";

export default function Endpoint() {
  this.base_url = window.location.origin + "/api/";
  this.endpoint = "";
  this.headers = {
    "Content-Type": "application/json",
    authorization: "",
  };
  this.payload = {};
  this.callback = null;
  this.erroCallback = null;

  this.setEndpoint = (value) => {
    this.endpoint = value;
    return this;
  };

  this.setPayload = (value) => {
    this.payload = value;
    return this;
  };

  this.formData = (data) => {
    this.headers["Content-Type"] = "multipart/form-data";
    this.payload = data;
    return this;
  };
  this.done = (func) => {
    this.callback = func;
    return this;
  };

  this.error = (func) => {
    this.erroCallback = func;
    return this;
  };

  this.useToken = () => {
    this.headers.authorization =
      "Bearer " + localStorage.getItem("access_token");
    return this;
  };

  this.post = () => {
    axios({
      url: this.base_url + this.endpoint,
      method: "POST",
      headers: this.headers,
      data: this.payload,
    })
      .then((res) => (this.callback != null ? this.callback(res) : null))
      .catch((error) =>
        this.erroCallback != null ? this.erroCallback(error) : null
      );
  };

  this.get = () => {
    axios({
      url: this.base_url + this.endpoint,
      method: "GET",
      headers: this.headers,
      data: this.payload,
    })
      .then((res) => (this.callback != null ? this.callback(res) : null))
      .catch((error) =>
        this.erroCallback != null ? this.erroCallback(error) : null
      );
  };

  this.put = () => {
    axios({
      url: this.base_url + this.endpoint,
      method: "PUT",
      headers: this.headers,
      data: this.payload,
    })
      .then((res) => (this.callback != null ? this.callback(res) : null))
      .catch((error) =>
        this.erroCallback != null ? this.erroCallback(error) : null
      );
  };
  this.delete = () => {
    axios({
      url: this.base_url + this.endpoint,
      method: "DELETE",
      headers: this.headers,
      data: this.payload,
    })
      .then((res) => (this.callback != null ? this.callback(res) : null))
      .catch((error) =>
        this.erroCallback != null ? this.erroCallback(error) : null
      );
  };
}
