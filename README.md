# 32-01-rabbitmq

RabbitMQ commands

 $ sudo systemctl enable rabbitmq-server

 $ sudo systemctl start rabbitmq-server

 $ sudo systemctl status rabbitmq-server

 $ sudo systemctl stop rabbitmq-server

 $ sudo rabbitmq-plugins list

 $ sudo rabbitmq-plugins enable rabbitmq_management

rabbit MQ pass and user

guest
guest

Ip address
http://127.0.0.1:15672

### How to run the app 
## 1. Hello world App
1. Open terminal and run
    $ node receive.js 
2. Open new terminal tab
    $ node send.js 

## Work Queue
1. Run
   $ node worker.js
2. Open new terminal tab
   $ node worker.js
3. open new terminal
   $ node new_task.js 

## Publish/Subscribe
1. Run
   $ node receive_logs.js 
2. Open new terminal tab
   $ node receive_logs.js
3. open new terminal
   $ node emit_log.js
   List all bindings
    $ sudo rabbitmqctl list_bindings

## Routing
1. Run to create receiver for warning error in log file
 $ node receive_logs_direct.js warning error > logs_from_rabbit.log
2. Run to create receiver for info warning and error
 $ node receive_logs_direct.js info warning error
3. Run command to get log for info
 $ node emit_log_direct.js info 
 "Run. Run. Or it will explode."
