const MOCK_NEW_TRIP{
	"tripInformation":[
	{
		'id': '1111',
		'place': 'jamaica',
		'daysStayed': 14,
		'activities': ['sky diving','skuba diving', 'hellicopter ride'],
		'budget': {
			'housing': 400,
			'planeTicket': 500,
			'food': 100,
			'activitiesCost': 200
			'total': 1200
		}
	},
	{
		'id': '2222',
		'place': 'california',
		'daysStayed': 5,
		'activities': ['painting','paint ball', 'hicking'],
		'budget': {
			'housing': 500,
			'planeTicket': 300,
			'food': 200,
			'activitiesCost': 425,
			'total': 1425,
	},
	{
		'id': '1111',
		'place': 'New York',
		'daysStayed': 5,
		'activities': ['Bronx Museum', 'Subway Riding', 'Broadway Play'],
		'budget': {
			'housing': 250,
			'planeTicket': 400,
			'food': 100,
			'activitiesCost': 115
			'total': 865,
	}
}]

function getTripInformation(callbackFn){
	setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 100);
}

function displayTripInformation(data){
    for (index in data.statusUpdates) {
       $('body').append(
        '<p>' + data.tripInformation[index].text + '</p>');
    }
}

function getAndDisplayTripInformation() {
    getTripInformation(displayTripInformation);
}


$(function() {
    getAndDisplayTripInformation();
})









