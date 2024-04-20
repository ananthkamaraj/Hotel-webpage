var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;

	if (currentScrollPos==0) {
        document.getElementById("header").style.boxShadow = "0px 0px 0px 0px transparent";
	}

	else{
		document.getElementById("header").style.boxShadow = "0 5px 20px 0px #e9ecef";
	}

        prevScrollpos = currentScrollPos;
}