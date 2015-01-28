define(['playbook'], function(playbook) {
	playbook.site_set({key:'init',value:['AWS Lecture Hall', 'moderating civil discourse', 'at the Podium', 'in the War Room']})
	playbook.site_set({key:'onclose',value:['Not picking you up', 'sit-com`s down', 'reconnect in a spell']})
	playbook.site_set({key:'onopen',value:['Tweets From Federally elected', 'members of Twitter']})
	playbook.site_set({key:'hashes',value:['gov']})
	
	playbook.site_set({key:'color',value:{ 'onmessage' : '#0052A5', 'onopen' : '#f7a70c', 'onclose' : '#960018'}})
	
	playbook.site_set({key:'connection',value:['ws://localhost:8080']})
	return {		
		loaded:true
	}	
})
