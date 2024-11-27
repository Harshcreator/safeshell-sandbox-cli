"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDockerRunning = isDockerRunning;
exports.formatBytes = formatBytes;
exports.handleError = handleError;
const fs_1 = __importDefault(require("fs"));
// Check if Docker is running
function isDockerRunning() {
    return fs_1.default.existsSync('/var/run/docker.sock');
}
// Human-readable size formatter
function formatBytes(bytes) {
    if (bytes === 0)
        return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}
// Error handler
function handleError(error) {
    console.error('Error:', error.message || error);
    process.exit(1);
}
//# sourceMappingURL=utils.js.map