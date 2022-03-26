const {headers} = require('./baseHeader');

function errorHandle(status,res,message){
    res.writeHead(status,headers);
    res.write(JSON.stringify({
        'status':'false',
        'message': message,
    }));
    res.end();
}

module.exports =errorHandle;