import { Parse } from "parse";

class InitApi {
  constructor() {
    try {
      Parse.initialize(
        "CVVTVt9Kt5vbiVtqguupCIgOc97VAM1Y3iaIlFGT",
        "qCCOAKoyq3nPaU3EmM4twUD2tQIfTwIDjTmpoUyC"
      );
      Parse.serverURL = "https://quizzes.back4app.io/";
      this.parse = Parse;

      this.client = new Parse.LiveQueryClient({
        applicationId: "CVVTVt9Kt5vbiVtqguupCIgOc97VAM1Y3iaIlFGT",
        serverURL: "wss://quizzes.back4app.io/",
        javascriptKey: "qCCOAKoyq3nPaU3EmM4twUD2tQIfTwIDjTmpoUyC",
        masterKey: "Qj3AD76jTrNV6F8g7eJm7cMP5YHRl6GQ4YaaOujW"
      });
      this.client.open();
    } catch (error) {}
  }
}
export default new InitApi();
