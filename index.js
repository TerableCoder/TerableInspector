module.exports = function TerableLockons(mod){
	const command = mod.command || mod.require.command;
	
	command.add(['terai', 'tinspector', 'terainspector', 'terableinspector'], (p1)=> {
		if(isNaN(p1)){
			command.message(p1 + "is not a number");
			return;
		} else mod.toServer('C_REQUEST_USER_PAPERDOLL_INFO_WITH_GAMEID', 1, {id: Number(p1)});
	});
	
	
}