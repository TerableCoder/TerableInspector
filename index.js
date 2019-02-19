module.exports = function TerableLockons(mod){
	const command = mod.command || mod.require.command;
	
	command.add(['terai', 'tinspector', 'terainspector', 'terableinspector'], (p1)=> {
		if(!isNaN(p1)){
			mod.toServer('C_REQUEST_USER_PAPERDOLL_INFO_WITH_GAMEID', 1, {id: Number(p1)});
		} else if(typeof p1 === 'string' || p1 instanceof String){
			mod.toServer('C_REQUEST_USER_PAPERDOLL_INFO', 1, {name: p1});
	  	} else{
			command.message(p1 + "is not a number");
		}
	});
	
	
}
