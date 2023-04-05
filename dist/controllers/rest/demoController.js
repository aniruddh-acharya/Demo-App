"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const tslib_1 = require("tslib");
const di_1 = require("@tsed/di");
const platform_params_1 = require("@tsed/platform-params");
const schema_1 = require("@tsed/schema");
let HelloWorldController = class HelloWorldController {
    get() {
        return "You Have Reached the Demo!";
    }
    hello(name) {
        return `Hello ${name}!`;
    }
};
tslib_1.__decorate([
    (0, schema_1.Get)("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HelloWorldController.prototype, "get", null);
tslib_1.__decorate([
    (0, schema_1.Get)("/hello:name"),
    tslib_1.__param(0, (0, platform_params_1.PathParams)("name")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], HelloWorldController.prototype, "hello", null);
HelloWorldController = tslib_1.__decorate([
    (0, di_1.Controller)("/demo")
], HelloWorldController);
exports.HelloWorldController = HelloWorldController;
//# sourceMappingURL=demoController.js.map