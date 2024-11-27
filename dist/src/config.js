"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_MESSAGES = exports.DOCKER_SOCKET_PATH = exports.DEFAULT_MEMORY_LIMIT = exports.DEFAULT_CPU_LIMIT = exports.DEFAULT_IMAGE = void 0;
exports.DEFAULT_IMAGE = 'ubuntu:latest';
exports.DEFAULT_CPU_LIMIT = '1';
exports.DEFAULT_MEMORY_LIMIT = 512 * 1024 * 1024; // 512 MB
exports.DOCKER_SOCKET_PATH = '/var/run/docker.sock';
exports.LOG_MESSAGES = {
    PULL_IMAGE: (image) => `Pulling Docker image: ${image}...`,
    START_CONTAINER: 'Starting container...',
    ATTACH_SHELL: 'Attached to container shell.',
    CLEANUP: 'Cleaning up container...',
};
//# sourceMappingURL=config.js.map