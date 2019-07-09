/* SetCookies */
function resetnbCookiess() {
    document.getElementById("nbCookies").innerHTML = 0;
	document.getElementById("AMC").style.backgroundColor = "grey";
	document.getElementById("CFar").style.backgroundColor = "grey";
	document.getElementById("CFac").style.backgroundColor = "grey";
}

function addCookie(nbCookies) {
    var cookieElement = document.getElementById("nbCookies");
    var cookieMaxElement = document.getElementById("nbMaxCookie");
    var newNbCookie = parseInt(cookieElement.innerHTML) + 1;
    var nbMaxCookies = parseInt(cookieMaxElement.innerHTML);
	
    cookieElement.innerHTML = newNbCookie;

    if (nbMaxCookies < newNbCookie) {
        cookieMaxElement.innerHTML = newNbCookie;
    }
}

function loseCookies(nbCookies) {
	var cookieElement = document.getElementById("nbCookies");
	cookieElement.innerHTML = parseInt(cookieElement.innerHTML) - nbCookies;
}

/* Upgrades */

function verifyUpgrade(upgradeName) {
	var coutUpgrade1 = 5;
	var coutUpgrade2 = 100;
	var coutUpgrade3 = 500;
	var nbCookies = parseInt(document.getElementById("nbCookies").innerHTML);

	switch(upgradeName) {
		case "autoMouseClicker":
			if (nbCookies >= coutUpgrade1) {
				var AMCElement = document.getElementById("AMC");
				var AMCLvElement = document.getElementById("autoMouseClickerLv");
				var newLv = parseInt(AMCLvElement.innerHTML) + 1;
				AMCLvElement.innerHTML = newLv;
				if (nbCookies - coutUpgrade1 < coutUpgrade1)
					AMCElement.style.backgroundColor = "grey";
				loseCookies(coutUpgrade1);
			}
			break;
		case "cookieFarming":
			if (nbCookies >= coutUpgrade2) {
				var CFarElement = document.getElementById("CFar");
				var CFarLvElement = document.getElementById("cookieFarmingLv");
				var newLv = parseInt(CFarLvElement.innerHTML) + 1;
				CFarLvElement.innerHTML = newLv;
				if (nbCookies - coutUpgrade2 < coutUpgrade2)
					CFarElement.style.backgroundColor = "grey";
				loseCookies(coutUpgrade2);
			}
			break;
		case "cookieFactory":
			if (nbCookies >= coutUpgrade3) {
				var CFacElement = document.getElementById("CFac");
				var CFacLvElement = document.getElementById("cookieFactoryLv");
				var newLv = parseInt(CFacLvElement.innerHTML) + 1;

				CFacLvElement.innerHTML = newLv;
				if (nbCookies - coutUpgrade3 < coutUpgrade3)
					CFacElement.style.backgroundColor = "grey";
				loseCookies(500);
			}
			break;
		default:
			
	}
}

/* Checking */
function checkUpgradePossible() {
	var cookieElement = document.getElementById("nbCookies");
	var AMCElement = document.getElementById("AMC");
	var CFarElement = document.getElementById("CFar");
	var CFacElement = document.getElementById("CFac");
	
	if(parseInt(cookieElement.innerHTML) >= 5)
		AMCElement.style.backgroundColor = "red";
	
	if(parseInt(cookieElement.innerHTML) >= 100)
		CFarElement.style.backgroundColor = "red";
	
	if(parseInt(cookieElement.innerHTML) >= 500)
		CFacElement.style.backgroundColor= "red";
}



setInterval("checkUpgradePossible()", 100);
setInterval("winCookies()", 1000);
