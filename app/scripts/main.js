
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


var repo, repoString, repoFunct, repoHTML;

	repo = $('.repos')

	repoString = $('#repoTemp').html();

	repoFunct = _.template(repoString);

	repoHTML = repoFunct;

	_.each(repos, function(repos){
		repo.append(repoHTML(repos))
	});

