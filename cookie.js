/* basic functions*/
function navCreateCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function navReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function navEraseCookie(name) {
	createCookie(name, "", -1);
}

/* game settings */
function initData() {
	
	navCreateCookie("cc_nbCookies", "0", 999);
	navCreateCookie("cc_nbMaxCookie", "0", 999);
	navCreateCookie("cc_CookiesParSec", "0", 999);
	navCreateCookie("cc_lastNbCookie", "0", 999);
	
	navCreateCookie("cc_autoMouseClickerLv", "0", 999);
	navCreateCookie("cc_cookieFarmingLv", "0", 999);
	navCreateCookie("cc_cookieFactoryLv", "0", 999);

	navCreateCookie("cc_coutUpgradeAMC", "5", 999);
	navCreateCookie("cc_coutUpgradeCFar", "100", 999);
	navCreateCookie("cc_coutUpgradeCFac", "500", 999);
}

function resetGame() {
	document.getElementById("nbCookies").innerHTML = 0;
	document.getElementById("AMC").style.backgroundColor = "";
	document.getElementById("CFar").style.backgroundColor = "";
	document.getElementById("CFac").style.backgroundColor = "";
	document.getElementById("autoMouseClickerLv").innerHTML = 0;
	document.getElementById("cookieFarmingLv").innerHTML = 0;
	document.getElementById("cookieFactoryLv").innerHTML = 0;
	document.getElementById("CookiesParSec").innerHTML = 0;

	var nbCookieMax = navReadCookie("cc_nbMaxCookie");
	initData();
	navCreateCookie("cc_nbMaxCookie", nbCookieMax.toString(), 999);
}

/* SetCookies */
function addCookie(quantityAdded) {
	var nbCookie = parseFloat(navReadCookie("cc_nbCookies"));
	var nbMaxCookie = parseFloat(navReadCookie("cc_nbMaxCookie"));
	var newNbCookie = nbCookie + quantityAdded;

	navCreateCookie("cc_nbCookies", newNbCookie.toString(), 999);

	if (newNbCookie > nbMaxCookie) {
		navCreateCookie("cc_nbMaxCookie", newNbCookie.toString(), 999);
    }
}

function loseCookies(quantityDeleted) {
	var nbCookie = parseFloat(navReadCookie("cc_nbCookies"));
	var newNbCookie = parseFloat(nbCookie - quantityDeleted);
	navCreateCookie("cc_nbCookies", newNbCookie.toString(), 999);
}

/* Upgrades */

function verifyUpgrade(upgradeName) {
	var coutUpgradeAMC = parseFloat(navReadCookie("cc_coutUpgradeAMC"));
	var coutUpgradeCFar = parseFloat(navReadCookie("cc_coutUpgradeCFar"));
	var coutUpgradeFac = parseFloat(navReadCookie("cc_coutUpgradeCFac"));
	var nbCookie = parseFloat(navReadCookie("cc_nbCookies"));

	switch(upgradeName) {
		case "autoMouseClicker":
			if (nbCookie >= coutUpgradeAMC) {
				var AMCLv = parseInt(navReadCookie("cc_autoMouseClickerLv"));
				var newLv = AMCLv + 1;
				navCreateCookie("cc_autoMouseClickerLv", newLv.toString(), 999);
				navCreateCookie("cc_coutUpgradeAMC", coutUpgradeAMC * 1.1, 999);
				loseCookies(coutUpgradeAMC);
			}
			break;
		case "cookieFarming":
			if (nbCookie >= coutUpgradeCFar) {
				var AMCLv = parseInt(navReadCookie("cc_cookieFarmingLv"));
				var newLv = AMCLv + 1;
				navCreateCookie("cc_cookieFarmingLv", newLv.toString(), 999);
				navCreateCookie("cc_coutUpgradeCFar", coutUpgradeCFar * 1.2, 999);
				loseCookies(coutUpgradeCFar);
			}
			break;
		case "cookieFactory":
			if (nbCookie >= coutUpgradeFac) {;
				var AMCLv = parseInt(navReadCookie("cc_cookieFactoryLv"));
				var newLv = AMCLv + 1;
				navCreateCookie("cc_cookieFactoryLv", newLv.toString(), 999);
				navCreateCookie("cc_coutUpgradeCFac", coutUpgradeCFac * 1.4, 999);
				loseCookies(coutUpgradeFac);
			}
			break;
		default:
			
	}
}

/* Checking */
function changeUpgradeBackgroundColor() {
	var coutUpgrade1 = navReadCookie("cc_coutUpgradeAMC");
	var coutUpgrade2 = navReadCookie("cc_coutUpgradeCFar");
	var coutUpgrade3 = navReadCookie("cc_coutUpgradeCFac");
	var nbCookies = parseInt(document.getElementById("nbCookies").innerHTML);
	var AMCElement = document.getElementById("AMC");
	var CFarElement = document.getElementById("CFar");
	var CFacElement = document.getElementById("CFac");
	
	if (nbCookies >= coutUpgrade1) {
		var backgroundColor = AMCElement.style.backgroundColor;
		if (backgroundColor == "" || backgroundColor == "grey")
			AMCElement.style.backgroundColor = "rgb(27, 109, 216)";
	}
	else {
		var backgroundColor = AMCElement.style.backgroundColor;
		if (backgroundColor == "rgb(27, 109, 216)")
			AMCElement.style.backgroundColor = "grey";
	}

	
	if (nbCookies >= coutUpgrade2) {
		var backgroundColor = CFarElement.style.backgroundColor;
		if (backgroundColor == "" || backgroundColor == "grey")
			CFarElement.style.backgroundColor = "rgb(27, 109, 216)";
	}
	else {
		var backgroundColor = CFarElement.style.backgroundColor;
		if (backgroundColor == "rgb(27, 109, 216)")
			CFarElement.style.backgroundColor = "grey";
	}

	
	if (nbCookies >= coutUpgrade3) {
		var backgroundColor = CFacElement.style.backgroundColor;
		if (backgroundColor == "" || backgroundColor == "grey")
			CFacElement.style.backgroundColor = "rgb(27, 109, 216)";
	}
	else {
		var backgroundColor = CFacElement.style.backgroundColor;
		if (backgroundColor == "rgb(27, 109, 216)")
			CFacElement.style.backgroundColor = "grey";
	}
}

function winCookies() {
	var AMCLv = parseInt(document.getElementById("autoMouseClickerLv").innerHTML);
	var CFarLv = parseInt(document.getElementById("cookieFarmingLv").innerHTML);
	var CFacLv = parseInt(document.getElementById("cookieFactoryLv").innerHTML);

	if (AMCLv > 0) {
		var cookiesgagnes = 0.1 + ((AMCLv-1)*0.2);
		addCookie(cookiesgagnes);
	}
	if (CFarLv > 0) {
		var cookiesgagnes = 2 + ((CFarLv-1) * 1.3);
		addCookie(cookiesgagnes);
	}
	if (CFacLv > 0) {
		var cookiesgagnes = 8 + ((CFarLv-1) * 7);
		addCookie(cookiesgagnes);
	}
}

function checkNbCookieParSec() {
	
	var ancienNbCookie = parseFloat(navReadCookie("cc_lastNbCookie"));
	var nbCookieActuel = parseFloat(navReadCookie("cc_nbCookies"));
	var nouveauCPS = (nbCookieActuel - ancienNbCookie);

	navCreateCookie("cc_CookiesParSec", nouveauCPS.toString(), 999);
	navCreateCookie("cc_lastNbCookie", nbCookieActuel.toString(), 999);
	console.log("OLD : " + ancienNbCookie + " - PRESENT : " + nbCookieActuel+" - CPS : " + nouveauCPS);
}

function controller() {
	setInterval("changeUpgradeBackgroundColor()", 100);
	setInterval("checkNbCookieParSec()", 1000)
	setInterval("winCookies()", 1000);
}

function vue() {
	var nbCookie = parseFloat(navReadCookie("cc_nbCookies"));
	var nbMaxCookie = parseFloat(navReadCookie("cc_nbMaxCookie"));
	var cookieParSec = parseFloat(navReadCookie("cc_CookiesParSec"));
	var AMCLv = parseInt(navReadCookie("cc_autoMouseClickerLv"));
	var CFarLv = parseInt(navReadCookie("cc_cookieFarmingLv"));
	var CFacLv = parseInt(navReadCookie("cc_cookieFactoryLv"));	
	var coutUpgradeAMC = parseFloat(navReadCookie("cc_coutUpgradeAMC"));
	var coutUpgradeCFar = parseFloat(navReadCookie("cc_coutUpgradeCFar"));
	var coutUpgradeCFac = parseFloat(navReadCookie("cc_coutUpgradeCFac"));
	
	document.getElementById("nbCookies").innerHTML = nbCookie.toFixed(1);
	document.getElementById("nbMaxCookie").innerHTML = nbMaxCookie.toFixed(1);
	document.getElementById("CookiesParSec").innerHTML = cookieParSec.toFixed(1);
	document.getElementById("autoMouseClickerLv").innerHTML = AMCLv;
	document.getElementById("cookieFarmingLv").innerHTML = CFarLv;
	document.getElementById("cookieFactoryLv").innerHTML = CFacLv;
	document.getElementById("coutAMC").innerHTML = coutUpgradeAMC.toFixed(1);
	document.getElementById("coutCFar").innerHTML = coutUpgradeCFar.toFixed(1);
	document.getElementById("coutCFac").innerHTML = coutUpgradeCFac.toFixed(1);
}


initData();
controller();
setInterval("vue()", 100);