const fileprefix = (page === "service") ? "../" : ""
const indexlink = (page === "index") ? `<img src="${fileprefix}images/rrc-logo.jpg">`
	: `<a href="${fileprefix}index.html"><img src="${fileprefix}images/rrc-logo.jpg"></a>`


document.querySelector("#header").innerHTML = `
	<div id="logo-container">${indexlink} </div>
	<nav>
		<a href="${fileprefix}about.html">About</a>
		<a href="${fileprefix}contact.html">Contact</a>
		<!-- <a href="${fileprefix}projects.html">Projects</a> -->
	</nav>
`


document.querySelector("#footer").innerHTML = `
<div id="footertext">
	<h1>Contact us</h1>
	<p>
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.72.5H2.5a2 2 0 00-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 002-2v-1.382a1 1 0 00-.553-.894l-2.416-1.208a1 1 0 00-1.396.578l-.297.893a1.21 1.21 0 01-1.385.804A6.047 6.047 0 013.71 6.547a1.21 1.21 0 01.804-1.385l1.108-.37a1 1 0 00.654-1.19L5.69 1.257A1 1 0 004.72.5z" stroke="currentColor"></path></svg>
		<a href="tel:+15099309191">(509) 930 9191</a>
	</p>
	<p>
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z" stroke="currentColor"></path></svg>
		<a href="mailto:scott.jacky@hotmail.com">scott.jacky@hotmail.com</a>
	</p>
	<p>
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M.5 5.5l-.29-.407-.21.15V5.5h.5zm7-5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5v-.257l-.21-.15-.29.407zm-12 3V8H2v.5h.5zm4 0H7V8h-.5v.5zM1 15V5.5H0V15h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zM14 5.5V15h1V5.5h-1zM3 15V8.5H2V15h1zm-.5-6h4V8h-4v1zM6 8.5V15h1V8.5H6zM5 12h1.5v-1H5v1zm6-4v4h1V8h-1zm2-6v2.5h1V2h-1z" fill="currentColor"></path></svg>
		8401 Vertner Road <br> Yakima, WA 98908
	</p>
	<div style="max-width: 310px; pointer-events: none; user-select: none;">
		<img src="${fileprefix}images/rrc-logo-LIGHT.png">
	</div>
</div>
`