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
function initgame() {
	navCreateCookie("cc_nbCookies", "0", 999);
	navCreateCookie("cc_nbMaxCookie", "0", 999);
	navCreateCookie("cc_CookiesParSec", "0", 999);
	
	navCreateCookie("cc_autoMouseClickerLv", "0", 999);
	navCreateCookie("cc_cookieFarmingLv", "0", 999);
	navCreateCookie("cc_cookieFactoryLv", "0", 999);

	navCreateCookie("cc_coutUpgradeAMC", "5", 999);
	navCreateCookie("cc_coutUpgradeCFar", "100", 999);
	navCreateCookie("cc_coutUpgradeCFac", "500", 999);
}

function resetGame() {
	document.getElementById("nbCookies").innerHTML = 0;
	document.getElementById("AMC").style.backgroundColor = "grey";
	document.getElementById("CFar").style.backgroundColor = "grey";
	document.getElementById("CFac").style.backgroundColor = "grey";
	document.getElementById("autoMouseClickerLv").innerHTML = 0;
	document.getElementById("cookieFarmingLv").innerHTML = 0;
	document.getElementById("cookieFactoryLv").innerHTML = 0;
	document.getElementById("CookiesParSec").innerHTML = 0;
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
				loseCookies(coutUpgrade1);
			}
			break;
		case "cookieFarming":
			if (nbCookies >= coutUpgrade2) {
				var CFarElement = document.getElementById("CFar");
				var CFarLvElement = document.getElementById("cookieFarmingLv");
				var newLv = parseInt(CFarLvElement.innerHTML) + 1;
				CFarLvElement.innerHTML = newLv;
				loseCookies(coutUpgrade2);
			}
			break;
		case "cookieFactory":
			if (nbCookies >= coutUpgrade3) {
				var CFacElement = document.getElementById("CFac");
				var CFacLvElement = document.getElementById("cookieFactoryLv");
				var newLv = parseInt(CFacLvElement.innerHTML) + 1;

				CFacLvElement.innerHTML = newLv;
				loseCookies(coutUpgrade3);
			}
			break;
		default:
			
	}
}

/* Checking */
function changeUpgradeBackgroundColor() {
	var coutUpgrade1 = 5;
	var coutUpgrade2 = 100;
	var coutUpgrade3 = 500;
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
	var cookieParSecElement = document.getElementById("CookiesParSec");
	var nbCookieParSeconde = 0;

	if (AMCLv > 0) {
		var cookiesgagnes = 0.1 + ((AMCLv-1)*0.2);
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	if (CFarLv > 0) {
		var cookiesgagnes = 2 + ((CFarLv-1) * 1.3);
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	if (CFacLv > 0) {
		var cookiesgagnes = 8 + ((CFarLv-1) * 7);
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	cookieParSecElement.innerHTML = nbCookieParSeconde;
}

function showData() {
	var nbCookie = parseFloat(navReadCookie("cc_nbCookies"));
	var nbMaxCookie = parseFloat(navReadCookie("cc_nbMaxCookie"));	
	
	document.getElementById("nbCookies").innerHTML = nbCookie.toFixed(1);
	document.getElementById("nbMaxCookie").innerHTML = nbMaxCookie.toFixed(1);
}

setInterval("changeUpgradeBackgroundColor()", 100);
setInterval("winCookies()", 1000);
setInterval("showData()", 100);

initgame();