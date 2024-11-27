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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSandbox = startSandbox;
const dockerode_1 = __importDefault(require("dockerode"));
const docker = new dockerode_1.default();
function startSandbox(_a) {
    return __awaiter(this, arguments, void 0, function* ({ image, network, cpu }) {
        try {
            //pull the docker image
            console.log(`Pulling Docker image ${image}`);
            yield docker.pull(image);
            //create the container
            const container = yield docker.createContainer({
                Image: image,
                Cmd: ['/bin/bash'],
                Tty: true,
                HostConfig: {
                    User: 'nobody',
                    Binds: [`${process.cwd()}:/sandbox`],
                    NetworkMode: network ? 'bridge' : 'none',
                    NanoCpus: parseInt(cpu) * 1e9,
                    Memory: 512 * 1024 * 1024, // 512 MB
                    PidsLimit: 100, // Prevent fork bombs (resource exhaustion attacks)
                },
            });
            console.log('Starting container...');
            yield container.start();
            // Attach to container shell
            const stream = yield container.attach({ stream: true, stdin: true, stdout: true, stderr: true });
            stream.pipe(process.stdout);
            process.stdin.pipe(stream);
            console.log('Attached to container shell.');
        }
        catch (err) {
            console.error('Error:', err);
        }
    });
}
//# sourceMappingURL=docker.js.map