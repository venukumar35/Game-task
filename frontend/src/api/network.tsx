import apiClient from "./apiclient";

class Api {
  async FindWinner(input: []) {
    try {
      const response = await apiClient.post("/find/winner", input);
      if (response.status == 200 || response.status == 201) {
        return response.data;
      }
    } catch (error) {
      return error;
    }
  }
}

export const objectOfApi = new Api();
