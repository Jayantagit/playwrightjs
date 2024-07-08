const { test, expect, request } = require("@playwright/test");

async function api_factory() {
    return async function getToken(loginPayload) {
        const apiContext = await request.newContext();
        const response = await apiContext.post("https://reqres.in/api/register",
            {
                data: loginPayload

            }

        )
        const responseBody = await response.json();      
        const authToken = responseBody.token;        
        return authToken;
    }

}

test("test factory", async ({ }) => {

    const tokenCall = await api_factory();
    const payload = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    };

    const authtoken = await tokenCall(payload);
    console.log("Token " + authtoken);

})