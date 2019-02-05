function log(level, message) {
    if(level === 'info'){
        message = `INFO: ${message}`;
    }
    else if (level === 'error'){
        message = `ERROR: ${message}`;
    } else if (level === 'debug'){
        message = `DEBUG: ${message}`;
    }
    console.log(message);
}

module.exports.log = log;