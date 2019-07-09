/* SetCookies */
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

function addCookie(nbCookies) {
    var cookieElement = document.getElementById("nbCookies");
    var cookieMaxElement = document.getElementById("nbMaxCookie");
	var newNbCookie = (parseFloat(cookieElement.innerHTML) + nbCookies).toFixed(1);
	var nbMaxCookies = parseFloat(cookieMaxElement.innerHTML);
	
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
		var cookiesgagnes = (0.1 + ((AMCLv-1)*0.2));
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	if (CFarLv > 0) {
		var cookiesgagnes = 2 + ((CFarLv-1) * 1.3);
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	if (CFacLv > 0) {
		var cookiesgagnes = 13 + ((CFarLv-1) * 1.4);
		addCookie(cookiesgagnes);
		nbCookieParSeconde += cookiesgagnes;
	}
	cookieParSecElement.innerHTML = nbCookieParSeconde;
}

setInterval("changeUpgradeBackgroundColor()", 100);
setInterval("winCookies()", 1000);
