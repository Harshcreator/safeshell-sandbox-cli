import fs from 'fs';

// Check if Docker is running
export function isDockerRunning(): boolean {
  return fs.existsSync('/var/run/docker.sock');
}

// Human-readable size formatter
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

// Error handler
export function handleError(error: any): void {
  console.error('Error:', error.message || error);
  process.exit(1);
}
