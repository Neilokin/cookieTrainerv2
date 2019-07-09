/* SetCookies */
function resetNbTotalCookies() {
    document.getElementById("nbTotalCookie").innerHTML = 0;
	document.getElementById("AMC").style.backgroundColor = "grey";
	document.getElementById("CFar").style.backgroundColor = "grey";
	document.getElementById("CFac").style.backgroundColor = "grey";
}

function addCookie(nbCookies) {
    var cookieElement = document.getElementById("nbTotalCookie");
    var cookieMaxElement = document.getElementById("nbMaxCookie");
    var newNbCookie = parseInt(cookieElement.innerHTML) + 1;
    var nbMaxCookies = parseInt(cookieMaxElement.innerHTML);
	
    cookieElement.innerHTML = newNbCookie;

    if (nbMaxCookies < newNbCookie) {
        cookieMaxElement.innerHTML = newNbCookie;
    }
}

function loseCookies(nbCookies) {
	var cookieElement = document.getElementById("nbTotalCookie");
	cookieElement.innerHTML = parseInt(cookieElement.innerHTML) - nbCookies;
}

/* Upgrades */

function upgradeAutomouseClicker() {
	var cookieElement = document.getElementById("nbTotalCookie");
	var AMCElement = document.getElementById("AMC");
	var AMCLvElement = document.getElementById("autoMouseClickerLv");
	var newLv = parseInt(AMCLvElement.innerHTML) + 1;
	AMCLvElement.innerHTML = newLv;
	loseCookies(5);
	
	if(parseInt(cookieElement.innerHTML) < 5)
		AMCElement.style.backgroundColor = "grey";
}

function upgradeCookieFarming() {
	var cookieElement = document.getElementById("nbTotalCookie");
	var CFarElement = document.getElementById("CFar");
	var CFarLvElement = document.getElementById("cookieFarmingLv");
	var newLv = parseInt(CFarLvElement.innerHTML) + 1;
	CFarLvElement.innerHTML = newLv;
	loseCookies(100);
	
	if(parseInt(cookieElement.innerHTML) < 100)
		CFarElement.style.backgroundColor = "grey";
}

function upgradeCookieFactory() {
	var cookieElement = document.getElementById("nbTotalCookie");
	var CFacElement = document.getElementById("CFac");
	var CFacLvElement = document.getElementById("cookieFactoryLv");
	var newLv = parseInt(CFacLvElement.innerHTML) + 1;
	CFacLvElement.innerHTML = newLv;
	loseCookies(500);
	
	if(parseInt(cookieElement.innerHTML) < 500)
		CFacElement.style.backgroundColor = "grey";
}


/* Checking */
function checkUpgradePossible() {
	var cookieElement = document.getElementById("nbTotalCookie");
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
