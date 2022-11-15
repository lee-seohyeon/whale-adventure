// function deleteDiv() {
//     const div1 = document.getElementById('del-div1');
//     const div2 = document.getElementById('del-div2');
//     const div3 = document.getElementById('del-div3');
//     const div4 = document.getElementById('div4');

//     div1.remove();
//     div2.remove();
//     div3.remove();
//     div4.style.marginTop='368px';

//     moveRocket();
//   }

function goMovePage() {
	setTimeout("location.href='rocket-move.html'");
}

window.onload = () => {
	console.log("will be moved");
	const css = document.getElementById("div4");
	css.className = "set-move";
};

const a = setInterval(move2,500);


function move2(){
    clearInterval(a);
    console.log("moved2")
    const css = document.getElementById("div4");
	css.className = "set-move2";
    // setTimeout("location.href='fff.html'",2000);
}

const b = setInterval(move3,2000);

function move3(){
    clearInterval(b);
    console.log("moved3")
    const css = document.getElementById("div4");
	css.className = "set-move3";
    
    // setTimeout("location.href='fff.html'",2000);
}