process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            console.log('Your version of Node is: ' + process.versions.node + ' and the language of the system is: ' + process.env.lang + '. Congratulations!!!');
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!');
        }
    }
});
