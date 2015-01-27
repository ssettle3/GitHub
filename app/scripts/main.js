// ================== Header User SECTION ========================

var usrSm, usrSmString, usrSmFunct, usrSmHTML;

usrSm = $('.userImgSm');

usrSmString = $('#userSmTemp').html();

usrSmFunct = _.template(usrSmString);

usrSmHTML = usrSmFunct;

usrSm.append(usrSmHTML(user))



// ================== User SECTION =============================


var usr, templateString, templateFunct, templateHTML;

	usr = $('.user')

	templateString = $('#userTemp').html();

	templateFunct = _.template(templateString);

	templateHTML = templateFunct;

	usr.append(templateHTML(user))


// ================== Organization SECTION ===========================

var orgTIY, orgString, orgFunct, orgHTML;

	orgTIY = $('.orgs')

	orgString = $('#orgTemp').html();

	orgFunct = _.template(orgString);

	orgHTML = orgFunct;

	_.each(org, function(orgs){
		orgTIY.append(orgHTML(orgs))
	});


// ================== Repository SECTION =============================


var repo, repoString, repoFunct, repoHTML, time, dateTime;

	repo = $('.repos')

	repoString = $('#repoTemp').html();

	repoFunct = _.template(repoString);

	repoHTML = repoFunct;

	_.each(repos, function(repos){
		repo.append(repoHTML(repos))
	});

/*
	time = $('.time')
	dateTime = 

	time.append()

*/
