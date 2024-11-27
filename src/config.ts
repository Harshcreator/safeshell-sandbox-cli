
export const DEFAULT_IMAGE = 'ubuntu:latest';
export const DEFAULT_CPU_LIMIT = '1';
export const DEFAULT_MEMORY_LIMIT = 512 * 1024 * 1024; // 512 MB
export const DOCKER_SOCKET_PATH = '/var/run/docker.sock';

export const LOG_MESSAGES = {
  PULL_IMAGE: (image: string) => `Pulling Docker image: ${image}...`,
  START_CONTAINER: 'Starting container...',
  ATTACH_SHELL: 'Attached to container shell.',
  CLEANUP: 'Cleaning up container...',
};
