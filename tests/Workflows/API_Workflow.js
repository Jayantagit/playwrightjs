const module = require("module")

export class Api_Workflows {

    constructor(apiContext) {

        this.apiContext = apiContext;

    }
    async getToken(loginpayload) {
        const apiResponse = await this.apiContext.post("https://reqres.in/api/login",
            {
                data: loginpayload
            }
        )
        const response = await apiResponse.json();
        const Token =await response.token;
        return Token;
    }
}
