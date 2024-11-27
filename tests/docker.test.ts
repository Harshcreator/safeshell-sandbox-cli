import { startSandbox } from '../src/docker';

describe('Docker Sandbox', () => {
  it('should pull the specified Docker image', async () => {
    const options = { image: 'alpine', network: false, cpu: '1' };
    await expect(startSandbox(options)).resolves.not.toThrow();
  });
});
