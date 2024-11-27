import Docker from 'dockerode';
import path from 'path';

const docker = new Docker();

export async function startSandbox({ image, network, cpu}: any){
    try {
        //pull the docker image
        console.log(`Pulling Docker image ${image}`);
        await docker.pull(image);

        //create the container
        const container = await docker.createContainer({
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
        await container.start();

        // Attach to container shell
        const stream = await container.attach({ stream: true, stdin: true, stdout: true, stderr: true });
        stream.pipe(process.stdout);
        process.stdin.pipe(stream);

        console.log('Attached to container shell.');

        } catch (err) {
        console.error('Error:', err);
    }
}