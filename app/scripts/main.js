

// ==== Header User SECTION ====

var usrSm, usrSmString, usrSmFunct, usrSmHTML;

	usrSm = $('.userImgSm');
	usrSmString = $('#userSmTemp').html();
	usrSmFunct = _.template(usrSmString);
	usrSmHTML = usrSmFunct;
	usrSm.append(usrSmHTML(user))



// ==== User SECTION ====


var usr, templateString, templateFunct, templateHTML;

	usr = $('.user')
	templateString = $('#userTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;
	usr.append(templateHTML(user))


// ==== Organization SECTION ====

var orgTIY, orgString, orgFunct, orgHTML;

	orgTIY = $('.orgs')
	orgString = $('#orgTemp').html();
	orgFunct = _.template(orgString);
	orgHTML = orgFunct;
	_.each(org, function(orgs){
		orgTIY.append(orgHTML(orgs))
	});


// ==== Repository SECTION ====


var repo, sortRepos, filtRepo, repoString, repoFunct, repoHTML, time, dateTime;


	// Sort Array to list repos in order of last updated
	sortRepos = repos.sort(function (a, b){
		if (a.updated_at < b.updated_at){
			return 1;
		}
		if (a.updated_at > b.updated_at){
			return -1;
		}
	});


	repo = $('.repos');
	repoString = $('#repoTemp').html();
	repoFunct = _.template(repoString);
	repoHTML = repoFunct;
	_.each(repos, function(sortRepos){
		repo.append(repoHTML(sortRepos))
	});



// ==== Date Stuff ====

var date, dt, dtt, dttt, year, month, day, hours, minutes, seconds;
	
	joined = $('.join');

	date = user.created_at;
	dt = date.split("-");
	year = dt[0];
	month = dt[1];
	dtt = dt[2].split("T");
	day = dtt[0];
	dttt = dtt[1].split(":");
	hours = dttt[0];
	minutes = dttt[1];

	joined.append("Joined on " + month + " " + day +", " + year);


