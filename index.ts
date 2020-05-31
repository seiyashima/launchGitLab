import * as gitlab from "@pulumi/gitlab";

const myPrj = new gitlab.Project("myGitLabPrj", {
  description: "this is my first prj created by Pulumi",
  visibilityLevel: "public",
  initializeWithReadme: true
});

/**
const USER_NUM = 10;
for (var itr = 0; itr < USER_NUM; itr++){
	let usr = new gitlab.User(
		"usr" + itr,
		{
			email: "usr" + itr + "@yahoo.co.jp",
			password: "encryptedWithPlaneWord",
			username: "usr" + itr,
		}
	);

		
}	
/**/
	



