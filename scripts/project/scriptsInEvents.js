

const scriptsInEvents = {

	async EventSheet1_Event414_Act4(runtime, localVars)
	{
		fetch('https://adventure-87327.bubbleapps.io/api/1.1/wf/collect_the_reward', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': 'Bearer c2eb62add45c4b19590d342a4be30f99'
		  },
		  body: JSON.stringify({
		    id: runtime.globalVars.ID, //ПОДСАВИТЬ ТУТ
		    reward: runtime.globalVars.Score // И ТУТ
		  })
		})
		.then(response => response.json())
		.then(data => {
		  console.log('Success:', data);
		})
		.catch(error => {
		  console.error('Error:', error);
		});
		
		window.parent.postMessage({ action: "closePopup" }, "*");
	},

	async EventSheet1_Event420_Act8(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
