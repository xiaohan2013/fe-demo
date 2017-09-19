#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');



program
    .version(package.version)
    .usage('[command] [options]')
    .command('start [options]', 'to start server')
    .parse(process.argv);

process.on('SIGINT', function() {
    program.runningCommand && program.runningCommand.kill('SIGKILL');
    process.exit(0);
})