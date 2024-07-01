const { test, expect, request } = require("@playwright/test");


test('Get User List', async ({ }) => {

    const apiContext = await request.newContext({
        baseURL: "https://reqres.in",
    });
    const response = await apiContext.get("/api/users?page=2");
    const responseBody = await response.json();
    console.log("Get response:", await responseBody.data[0].id);
  
    console.log("Get response:", await response.json());
    console.log("Get response status:", response.status());
    expect(response.ok()).toBeTruthy();
});