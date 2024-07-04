const { test, expect, request } = require("@playwright/test");
import {Api_Workflows} from "./Workflows/API_Workflow";

test('Get Reqres Token', async () => {


    const payload =
    {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const apiContext = await request.newContext();
    const modObj = new Api_Workflows(apiContext)
    const authToken = await modObj.getToken(payload);
    console.log(authToken);


});