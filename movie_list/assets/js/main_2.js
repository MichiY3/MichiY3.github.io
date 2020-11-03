let data;

if(localStorage.getItem('MovieList')){
	data = JSON.parse(localStorage.getItem('MovieList'));
}
else{
	data = [];
}


for (let displayText of data){
	add_li_tag(displayText);
}


let addBtn = document.querySelector('#btn');
addBtn.addEventListener('click',function(){
	let titleInput = document.querySelector('#input');
	if(titleInput.value != ''){
		add_li_tag(titleInput.value);
		data.push(titleInput.value);

localStorage.setItem('MovieList',JSON.stringify(data));

taskInput.value='';
	}
});



function add_li_tag(movie_title){

let movie_list=document.querySelector('.movie-list');
let add_li= document.createElement('li');
add_li.textContent = movie_title;
// console.log(add_li);
add_li.classList.add('list');


let rate_star= document.createElement('p');
rate_star.textContent = '☆☆☆☆☆ ';
rate_star.classList.add('star');

let FA_trash = document.createElement('i');
FA_trash.classList.add('fas');
FA_trash.classList.add('fa-trash-alt');


FA_trash.addEventListener('click',function(){
		let ForSure = confirm('本当に見なくていいの？');
		if(ForSure == true){
			let FA_trash = this.parentElement.textContent;
			FA_trash = FA_trash.replace('fas fa-trash-alt','');
			data.splice(data.indexOf(FA_trash),1)
			this.parentElement.remove();
	localStorage.setItem('MovieList',JSON.stringify(data));
		}



	});


add_li.appendChild(rate_star);
add_li.appendChild(FA_trash);

movie_list.appendChild(add_li);



}


