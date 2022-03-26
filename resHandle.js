const {headers} = require('./baseHeader');

function resHandle(res,todos,iswrite=true){
    res.writeHead(200,headers);
    if(iswrite){
        res.write(JSON.stringify({
            'status':'success',
            'data': todos,
        }));
    }
    res.end();
}

module.exports=resHandle;