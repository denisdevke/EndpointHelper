## Endpoit Helper

This is an endpoint helper class for the front end, which works on frontend frameworks like react js, etc.

It is specifically developed for Laravel users but you can as well use it on your other backed languages.

## How to install

install via npm

> npm i techlup-endpoint

## How to use

### Posting form data

At the server, create an API route. By default, laravel api routes are prefixed by "API".
If you are using any other backend language, ensure that your routes start with `/api/` eg `/api/employee/`. and your controller supports both POST, GET, DELETE and PUT methods.

Example for Laravel

`Route::resource('employee', 'EmployeeController');`

Now create your HTML form, and give the fields the same name as it is in your server models then create your submit listener and assign it to the form onSubmit.

```js
const handleSubmit = (e) => {
  e.preventDefault();
  let form = new FormData(e.target);

  // .....
};
```

Now make the endpoint call

If you are using a token, it should be stored in `localStorage` as `"access_token"`.

```js
new Endpoint()
  .setEndpoint("employee") // Your resource url
  .formData(form)
  .done((response) => log(response))
  .error((error) => log(error))
  .useToken() // include this if you are using a token
  .post();
```
