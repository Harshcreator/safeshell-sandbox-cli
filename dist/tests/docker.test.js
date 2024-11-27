"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("../src/docker");
describe('Docker Sandbox', () => {
    it('should pull the specified Docker image', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = { image: 'alpine', network: false, cpu: '1' };
        yield expect((0, docker_1.startSandbox)(options)).resolves.not.toThrow();
    }));
});
//# sourceMappingURL=docker.test.js.map