//const openBtn = document.getElementById("openBtn");
//
//openBtn.addEventListener('click',() => {
//	const p = document.getElementById("paragraph");
//	
//	openBtn.classList.toggle("opened");
//	if(p.style.display === "")
//		p.style.display = "block";
//	else
//		p.style.display = "";
//
//})

const openBtns = document.getElementsByClassName("openBtn");
const paragraph = document.getElementsByClassName("paragraph");

for(let i = 0; i < openBtns.length; i++){
	openBtns[i].addEventListener('click', () => {
		
		openBtns[i].classList.toggle('opened');
		if(paragraph[i].style.display === ""){
			paragraph[i].style.display = "block";
		} else {
			paragraph[i].style.display = "";
		}
		
	});
}