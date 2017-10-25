var currentwindow;

function closewindow() {
	$('#sub2').show();
	$('.sub2folder').show();
	$( "#window" ).hide();
}

function openwindow(ftype) {
	$( "#window" ).show();
	resetfolder();
	if(ftype=="Projects") {
		currentwindow="Projects";
		$('#bar').css('background-image', 'url(' + 'images/projects.png' + ')');
		$('#projectfolder').css('border','solid');
		$('#projectfolder').css('border-width','0.5px');
		$('#projectfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#gerpfolder" ).show();
		$( "#nocgootfolder" ).show();
		$( "#afactsfolder" ).show();
	}
	else if (ftype=="Education") {
		currentwindow="Education";
		$('#bar').css('background-image', 'url(' + 'images/education.png' + ')');
		$('#educationfolder').css('border','solid');
		$('#educationfolder').css('border-width','0.5px');
		$('#educationfolder').css('background-color','rgba(200, 200, 200, .9)');
		$( "#lhsfolder" ).show();
		$( "#tuftsfolder" ).show();
	}
	else if (ftype=="Hobbies") {
		currentwindow="Hobbies";
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

	if ($(window).width() < 500) {
		$('#sub2').hide();
		$('.sub2folder').hide();
		$('#sub3').show();
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

function back() {

}

function openterminal() {
	$("#terminalwindow").show();
}

$( function() {
		$( "#window" ).draggable({handle:"#bar"});
} );

$( function() {
		$( "#terminalwindow" ).draggable({handle:"#terminalbar"});
} );



var path='Desktop';

jQuery(function ($, undefined) {
    $('#terminalinput').terminal(function(command) {
    	if (command=="help") {
    		this.echo("[[b;black;white]ls: list files]");
    		this.echo("[[b;black;white]cd <DIRECTORY>: change directory]");
    		this.echo("[[b;black;white]open <FILE>: open file]");
    		this.echo("[[b;black;white]clear: clear terminal]");
    		this.echo("[[b;black;white]exit: exit terminal]");
    	}
        else if (command=="ls") {
            if (path=="Desktop") {
                this.echo('[[b;#6495ED;]Projects        Education       Hobbies]');
                this.echo('[[b;green;]Terminal        Resume          Github]');
                this.echo('[[b;green;]Instagram       LinkedIn]');
            }
            else if (path=="~") {
                this.echo('[[b;#6495ED;]Desktop]');
            }
            else if (path=="Projects") {
                this.echo('[[b;green;]gerp            afacts          nocgoot]');
            }
            else if (path=="Education") {
                this.echo('[[b;green;]lhs             tufts]');
            }
            else if (path=="Hobbies") {
                this.echo('[[b;green;]guitar          games           watches]');
            }
        }

        else if (command.indexOf("cd ")==0) {
            if(command.indexOf("Desktop")==3&&path=='~') {
                this.set_prompt("jong@world:~/Desktop$> ");
                path="Desktop";
            }
            else if(command.indexOf("Projects")==3&&path=='Desktop') {
                this.set_prompt("jong@world:~/Desktop/Projects$> ");
                path="Projects";
            }
            else if(command.indexOf("Education")==3&&path=='Desktop') {
                this.set_prompt("jong@world:~/Desktop/Education$> ");
                path="Education";
            }
            else if(command.indexOf("Hobbies")==3&&path=='Desktop') {
                this.set_prompt("jong@world:~/Desktop/Hobbies$> ");
                path="Hobbies";
            }
            else if(command.indexOf("..")==3&&(path=="Desktop"||path=="~")) {
                this.set_prompt("jong@world:~$> ");
                path="~";
            }
            else if(command.indexOf("..")==3&&(path=="Projects"||path=="Education"||path=="Hobbies")) {
                this.set_prompt("jong@world:~Desktop$> ");
                path="Desktop";
            }
            else if(command.indexOf("~")==3) {
                this.set_prompt("jong@world:~$> ");
                path="~";
            }
            else {
                this.echo("bash: cd: "+command.substring(3,command.length)+": No such directory")
            }
        }

        else if (command.indexOf("open ")==0) {
            if(command.indexOf("Resume")==5&&path=='Desktop') {
                window.open('resumejong.pdf', '_blank');
            }
            else if(command.indexOf("Github")==5&&path=='Desktop') {
                window.open('https://github.com/jonghoonlee98', '_blank');
            }
            else if(command.indexOf("Instagram")==5&&path=='Desktop') {
                window.open('https://www.instagram.com/jonghoonl/');
            }
            else if(command.indexOf("LinkedIn")==5&&path=='Desktop') {
                window.open('https://www.linkedin.com/in/jong-hoon-lee-a5934812a/', '_blank');
            }
            else if(command.indexOf("gerp")==5&&path=='Projects') {
                openfile("gerp");
            }
            else if(command.indexOf("afacts")==5&&path=='Projects') {
                openfile("afacts");
            }
            else if(command.indexOf("nocgoot")==5&&path=='Projects') {
                openfile("nocgoot");
            }
            else if(command.indexOf("lhs")==5&&path=='Education') {
                openfile("lhs");
            }
            else if(command.indexOf("tufts")==5&&path=='Education') {
                openfile("tufts");
            }
            else if(command.indexOf("guitar")==5&&path=='Hobbies') {
                openfile("guitar");
            }
            else if(command.indexOf("games")==5&&path=='Hobbies') {
                openfile("games");
            }
            else if(command.indexOf("watches")==5&&path=='Hobbies') {
                openfile("watches");
            }
            else {
                this.echo("bash: open: "+command.substring(5,command.length)+": No such file")
            }
        }

        else if (command=="exit") {
            this.clear();
            $("#terminalwindow").hide();
        }

        else {
            this.echo(command+": command not found");
        }

    }, 
    {
        exit: false,
        wordAutocomplete: true,
        greetings: "For a list of available commands, type help",
        name: 'jong_terminal',
        prompt: "jong@world:~/Desktop$> "
    });
});

function openfile(ftype) {
	if (ftype=="gerp") {
		openwindow("Projects");
		selectfile("gerp");
	}
	else if (ftype=="nocgoot") {
		openwindow("Projects");
		selectfile("nocgoot");
	}
	else if (ftype=="afacts") {
		openwindow("Projects");
		selectfile("afacts");
	}
	else if (ftype=="lhs") {
		openwindow("Education");
		selectfile("lhs");
	}
	else if (ftype=="tufts") {
		openwindow("Education");
		selectfile("tufts");
	}
	else if (ftype=="guitar") {
		openwindow("Hobbies");
		selectfile("guitar");	
	}
	else if (ftype=="games") {
		openwindow("Hobbies");
		selectfile("games");
	}
	else if (ftype=="watches") {
		openwindow("Hobbies");
		selectfile("watches");
	}
	$("#window").css("zIndex",2);
	$("#terminalwindow").css("zIndex",1);
}

$( document ).ready(function() {
	$("#window").click(function() {
		$("#window").css("zIndex",2);
		$("#terminalwindow").css("zIndex",1);
	})
});

$( document ).ready(function() {
	$("#terminalwindow").click(function() {
		$("#window").css("zIndex",1);
		$("#terminalwindow").css("zIndex",2);
	})
});

$( document ).ready(function() {
	$("#terminal").click(function() {
		$("#terminalwindow").css("zIndex",2);
	})
});

$( document ).ready(function() {
	$("#closeterminal").click(function() {
    	$("#terminalwindow").hide();
	})
});