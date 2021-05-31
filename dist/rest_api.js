"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest_api_fill = void 0;
exports.rest_api_fill = (app) => {
    app.get("/", (req, res) => {
        res.send("The sedulous hyena ate the antelope!");
    });
    app.get("/list-of-senders/", (req, res) => {
        const listOfSenders = [
            {
                target: "telegram",
                count_of_days: "42",
                last_send_date: "last_send_date",
            },
        ];
        res.send(listOfSenders);
    });
};
//# sourceMappingURL=rest_api.js.map