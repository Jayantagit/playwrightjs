const { test, expect, request } = require("@playwright/test");

let apiContext="";
let authToken="";
test.beforeAll(async () => {
    apiContext = await request.newContext({
        baseURL: "https://reqres.in",
    });

})
test('Get User List', async ({ }) => {


    const response = await apiContext.get("/api/users?page=2");
    const responseBody = await response.json();
    console.log("Get response:", await responseBody.data[0].id);

    console.log("Get response:", await response.json());
    console.log("Get response status:", response.status());
    expect(response.ok()).toBeTruthy();
});


test('Create User ', async ({ }) => {


    const paylooad = {
        "name": "morpheus",
        "job": "leader"
    }
    const response = await apiContext.post("/api/users", {
        data: paylooad
    });
    const responseBody = await response.json();
    console.log("Post response status:", responseBody);
    console.log("ID Created:", responseBody.id);
    expect(response.ok()).toBeTruthy();
});

test.only('Generate Token ', async ({ }) => {

    const paylooad = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    const response = await apiContext.post("/api/register", {
        data: paylooad
    });
    const responseBody = await response.json();
    console.log("Post response status:", responseBody);
    authToken=responseBody.token;
    console.log("Token Created:", responseBody.token);
    expect(response.ok()).toBeTruthy();
});