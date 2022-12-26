
var _1 = 'piedra' 
var _2 = 'papel'
var _3 = 'tijeras' 

function resultado(pc, user){
    switch(true){
        case pc==user: 
            console.log('EMPATE');
            break;
        case( (pc==_1 && user==_2) || (pc==_2 && user==_3) || (pc==_3 && user == _1)):
            console.log(`${user} le  gana a ${pc}: gana user`);
            break;
        default: 
            console.log(`${pc} le  gana a ${user}: gana PC`)
        }
    }