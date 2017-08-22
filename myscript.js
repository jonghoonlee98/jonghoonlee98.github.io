function closewindow() {
	$( "#window" ).hide();
}

function openwindow(ftype) {
	$( "#window" ).show();
	resetfolder();
	if(ftype=="Projects") {
		$('#bar').css('background-image', 'url(' + 'images/projects.png' + ')');
		$('#projectfolder').css('border','solid');
		$('#projectfolder').css('border-width','0.5px');
		$('#projectfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#gerpfolder" ).show();
		$( "#nocgootfolder" ).show();
		$( "#afactsfolder" ).show();
	}
	else if (ftype=="Education") {
		$('#bar').css('background-image', 'url(' + 'images/education.png' + ')');
		$('#educationfolder').css('border','solid');
		$('#educationfolder').css('border-width','0.5px');
		$('#educationfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#lhsfolder" ).show();
		$( "#tuftsfolder" ).show();
	}
	else if (ftype=="Hobbies") {
		$('#bar').css('background-image', 'url(' + 'images/hobbies.png' + ')');
		$('#hobbiesfolder').css('border','solid');
		$('#hobbiesfolder').css('border-width','0.5px');
		$('#hobbiesfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#guitarfolder" ).show();
		$( "#gamesfolder" ).show();
		$( "#watchesfolder" ).show();
	}
}

function selectfile(ftype) {
	resetsub2();
	resetsub3();
	if (ftype=="gerp") {
		$('#gerpfolder').css('border','solid');
		$('#gerpfolder').css('border-width','0.5px');
		$('#gerpfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#gerp" ).show();
	}
	else if (ftype=="nocgoot") {
		$('#nocgootfolder').css('border','solid');
		$('#nocgootfolder').css('border-width','0.5px');
		$('#nocgootfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#nocgoot" ).show();
	}
	else if (ftype=="afacts") {
		$('#afactsfolder').css('border','solid');
		$('#afactsfolder').css('border-width','0.5px');
		$('#afactsfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#afacts" ).show();
	}
	else if (ftype=="lhs") {
		$('#lhsfolder').css('border','solid');
		$('#lhsfolder').css('border-width','0.5px');
		$('#lhsfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#lhs" ).show();
	}
	else if (ftype=="tufts") {
		$('#tuftsfolder').css('border','solid');
		$('#tuftsfolder').css('border-width','0.5px');	
		$('#tuftsfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#tufts" ).show();
	}
	else if (ftype=="guitar") {
		$('#guitarfolder').css('border','solid');
		$('#guitarfolder').css('border-width','0.5px');	
		$('#guitarfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#guitar" ).show();			
	}
	else if (ftype=="games") {
		$('#gamesfolder').css('border','solid');
		$('#gamesfolder').css('border-width','0.5px');	
		$('#gamesfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#games" ).show();			
	}
	else if (ftype=="watches") {
		$('#watchesfolder').css('border','solid');
		$('#watchesfolder').css('border-width','0.5px');	
		$('#watchesfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#watches" ).show();			
	}
}

function resetfolder() {
	resetsub2();
	resetsub3();
	$('#projectfolder').css('background-color','transparent');
	$('#educationfolder').css('background-color','transparent');
	$('#hobbiesfolder').css('background-color','transparent');
	$('#projectfolder').css('border','none');
	$('#educationfolder').css('border','none');
	$('#hobbiesfolder').css('border','none');
	$( "#gerpfolder" ).hide();
	$( "#nocgootfolder" ).hide();
	$( "#afactsfolder" ).hide();
	$( "#lhsfolder" ).hide();
	$( "#tuftsfolder" ).hide();
	$( "#guitarfolder" ).hide();
	$( "#gamesfolder" ).hide();
	$( "#watchesfolder" ).hide();
}

function resetsub2() {
	$('#gerpfolder').css('background-color','transparent');
	$('#nocgootfolder').css('background-color','transparent');
	$('#afactsfolder').css('background-color','transparent');
	$('#lhsfolder').css('background-color','transparent');
	$('#tuftsfolder').css('background-color','transparent');
	$('#guitarfolder').css('background-color','transparent');
	$('#gamesfolder').css('background-color','transparent');
	$('#watchesfolder').css('background-color','transparent');
	$( "#gerpfolder" ).css('border','none');
	$( "#nocgootfolder" ).css('border','none');
	$( "#afactsfolder" ).css('border','none');
	$( "#lhsfolder" ).css('border','none');
	$( "#tuftsfolder" ).css('border','none');
	$( "#guitarfolder" ).css('border','none');
	$( "#gamesfolder" ).css('border','none');
	$( "#watchesfolder" ).css('border','none');
}

function resetsub3() {
	$( "#gerp" ).hide();
	$( "#nocgoot" ).hide();
	$( "#afacts" ).hide();
	$( "#lhs" ).hide();
	$( "#tufts" ).hide();
	$( "#guitar" ).hide();
	$( "#games" ).hide();
	$( "#watches" ).hide();
}

$( function() {
		$( "#window" ).draggable({handle:"#bar"});
} );