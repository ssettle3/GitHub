
// ================== User SECTION =============================


var usr, templateString, templateFunct, templateHTML;

	usr = $('.user')

	templateString = $('#userTemp').html();

	templateFunct = _.template(templateString);

	templateHTML = templateFunct;

	usr.append(templateHTML(user))


// ================== Organization SECTION ===========================
/*
var org, orgString, orgFunct, orgHTML;

	org = $('.orgs')

	orgString = $('orgTemp').html();

	orgFunct = _.template(orgString);

	orgHTML = orgFunct;

	org.append(orgHTML(orgs))

*/

// ================== Repository SECTION =============================


var repo, repoString, repoFunct, repoHTML;

	repo = $('.repos')

	repoString = $('#repoTemp').html();

	repoFunct = _.template(repoString);

	repoHTML = repoFunct;

	_.each(repos, function(repos){
		repo.append(repoHTML(repos))
	});

