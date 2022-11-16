function deleteDiv() {
    const div0 = document.getElementById('del-div0');
    const div1 = document.getElementById('del-div1');
    const div2 = document.getElementById('del-div2');
    const div3 = document.getElementById('del-div3');
    const div4= document.getElementById('div4');
    
    div4.style.backgroundColor='#F7A42D';
    div4.style.color='white';
    


    setTimeout(() => {
        div0.remove();
        div1.remove();
        div2.remove();
        div3.remove();
    
        div4.style.marginTop='128px';
	}, 1000);

    // div0.remove();
    // div1.remove();
    // div2.remove();
    // div3.remove();

    // div4.style.marginTop='128px';
    setTimeout("location.href='fourth.html'",2000);
  } 
