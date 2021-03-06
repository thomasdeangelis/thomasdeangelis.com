$(document).ready(function() {
	$('#term').terminal(function(command,term) {
		if(command == 'test') {
			term.echo("you typed test");
		} else if(command == 'about') {
			term.echo("\
				<br\>\
				<table>\
				<tr>\
				<td><img src='img/headshot.jpeg' width=100px></td>\
				<td>I'm a student at Duke University majoring in <span style='color: #d6c3b6'>Economics</span> and <span style='color: #d6c3b6'>Computer Science</span>.\n\
				I  \n\
				enjoy <span style='color: #d6c3b6'>programming</span>, <span style='color: #d6c3b6'>ambient</span> music and <span style='color: #d6c3b6'>economic</span> forecasting and research. \n\
				I <span style='color: #d6c3b6'>row</span> for Duke and I like to play <span style='color: #d6c3b6'>go</span> and produce music in my free time.</td>\
				</tr></table>\
				For more information, type <span style='color: #d6c3b6'>links</span>\
				<br><br>\
				", {raw: true});
		} else if(command == 'contact') {
			term.echo("\
				<br\>\
				You can email me at<br \>\
				<span style='color: #d6c3b6'>thomas.marc.da</span> AT \
				<span style='color: #d6c3b6'>gmail.com</span><br \><br \>\
				<br><br>\
				", {raw: true});
		} else if(command == 'links') {
			term.echo("\
				<br\>\
				&#160&#160&#160&#160&#160&#160\
<span style='color: #9f7155'>┌──</span> <span style='color: #d6c3b6'>social</span> <span style='color: #9f7155'>──┐</span><br\>\
				<table border='0'>\
				<tr>\
					<td><a href='http://www.linkedin.com/in/thomasda/'>linkedin</a></td>\
					<td><span style='color: #9f7155'>««</span> professional</td>\
				</tr>\
				<tr>\
					<td><a href='http://www.github.com/thomasdeangelis'>github</a></td>\
					<td><span style='color: #9f7155'>««</span> code portfolio</td>\
				</tr>\
				<tr>\
					<td><a href='https://www.facebook.com/tommy.deangelis'>facebook</a></td>\
					<td><span style='color: #9f7155'>««</span> (meta) real life</td>\
				</tr>\
				<tr>\
					<td><a href='http://stackoverflow.com/users/2789511/thomas-de-angelis'>stackoverflow</a></td>\
					<td><span style='color: #9f7155'>««</span> karma</td>\
				</tr>\
				</table><br\>\
				&#160&#160&#160&#160&#160&#160\
<span style='color: #9f7155'>┌──</span> <span style='color: #d6c3b6'>creative</span> <span style='color: #9f7155'>──┐</span><br\>\
				<table border='0'>\
				<tr>\
					<td><a href='http://www.flickr.com/photos/thomasdeangelis/'>flickr</a></td>\
					<td><span style='color: #9f7155'>««</span> photos</td>\
				</tr>\
				<tr>\
					<td><a href='https://soundcloud.com/thomasdeangelis'>soundcloud</a>\
					<td><span style='color: #9f7155'>««</span> my music (and my brother's)</td>\
				</tr>\
				<tr>\
					<td><a href='http://sites.duke.edu/dukemenscrew/'>rowing</a>\
					<td><span style='color: #9f7155'>««</span> swag</td>\
				</tr>\
				</table>\
				<br\>\
				", {raw: true});
		} else if(command == 'help') {
			term.echo("\nabout   contact    links   clear  ls\n");
		} else if(command == 'ls') {
			term.echo("<br\>CNAME  <span style='color: #897796'>css</span>  <span style='color: #897796'>fonts</span>  <span style='color: #897796'>img</span>  index.html  <span style='color: #897796'>js</span><br><br>", {raw: true});
		} else if(command == 'ls -lsa') {
			term.echo("\
				<br\>\
				total 48<br \>\
				 4 drwxr-xr-x  7 thomasdeangelis users  4096 Jul 12 19:30 .<br \>\
				 4 drwx------  6 thomasdeangelis users  4096 Jul 10 08:28 ..<br \>\
				 4 -rw-r--r--  1 thomasdeangelis users  &#160 16 Jul  10 08:58 CNAME<br \>\
				 4 drwxr-xr-x  2 thomasdeangelis users  4096 Jul 12 09:35 css<br \>\
				 4 drwxr-xr-x  2 thomasdeangelis users  4096 Jul 10 10:18 fonts<br \>\
				 4 drwxr-xr-x  8 thomasdeangelis users  4096 Jul 11 20:40 .git<br \>\
				 4 drwxr-xr-x  2 thomasdeangelis users  4096 Jul 11 20:02 img<br \>\
				 4 -rw-r--r--  1 thomasdeangelis users  2367 Jul 12 19:30 index.html<br \>\
				 4 drwxr-xr-x  2 thomasdeangelis users  4096 Jul 12 19:43 js<br \>\
				<br\>\
			", {raw: true});
		} else {
			term.echo( "<br\>" + command + " not found. Type <span style='color:#D6C3B6'>help</span> for command list <br\>"
			,{raw: true});
		}
			
	}, {
		prompt: '» ', 
		name:'urxvt', 
		height:'300px',
		width:'400px',
		greetings:greeter
		});

	function greeter() {
		return "Type help for list of commands ... "
	}

	function updateClock(){
		var currentTime = new Date();
		var currentHours = currentTime.getHours ( );
		var currentMinutes = currentTime.getMinutes ( );
		var currentSeconds = currentTime.getSeconds ( );
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
		var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
		document.getElementById("clock").firstChild.nodeValue = currentTimeString;
	} setInterval(updateClock, 100);

	$('.floating').draggable().resizable();
	$('#gameoflife').click(function () {
		init(POPULATION);
	});

});
