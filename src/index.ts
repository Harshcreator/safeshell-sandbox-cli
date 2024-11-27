import { Command } from 'commander';


const program = new Command();
program
    .name('safeshell-sandbox-cli')
    .description('Run untrusteed code safely in a sandboxed Docker container')
    .version('1.0.0');

program
    .command('start')
    .option('-i, --image <name>', 'Specify the Docker image to use', 'ubuntu:latest')
    .option('--no-network', 'Disable network access')
    .option('--cpu <limit>', 'Set CPU limit', '1')


program.parse(process.argv);
