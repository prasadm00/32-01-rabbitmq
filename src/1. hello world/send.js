var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {

    if (error0) {
        console.log("🚀 ~ file: send.js:7 ~ error0:", error0)
        throw error0;
    }

    connection.createChannel(function (error1, channel) {
        if (error1) {
            console.log("🚀 ~ file: send.js:12 ~ error1:", error1)
            throw error1;
        }
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);


});