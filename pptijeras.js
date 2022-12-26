var _1 = 'piedra' 
var _2 = 'papel'
var _3 = 'tijeras' 

function resultado(pc, user){
    if(pc == user) return 'Empate'
    else if((pc==_1 && user==_2) || (pc==_2 && user==_3) || (pc==_3 && user == _1)){
        return `${user} le  gana a ${pc}: gana user`
    }else return `${pc} le  gana a ${user}: gana PC`
}
