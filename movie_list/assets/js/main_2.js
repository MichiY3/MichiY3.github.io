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
		data.push(movie_title.value);

localStorage.setItem('MovieList',JSON.stringify(data));

taskInput.value='';
	}
});



function add_li_tag(movie_title){

let movie_list=document.querySelector('movie-list');
let add_li= document.createElement('li');
add_li.textContent = movie_title;
// console.log(add_li);
add_li.classList.add('list');

let FA_trash = document.createElement('i');
	FA_trash.textContent = 'fas fa-trash-alt';
FA_trash.classList.add('fas')
FA_trash.classList.add(fa-trash-alt);

FA_trash.addEventListener('click',function(){
		let ForSure = confirm('本当に見たくない？');
		if(ForSure == true){
			let FA_trash = this.parentElement.textContent;
			FA_trash = FA_trash.replace('fas fa-trash-alt','');
			data.splice(data.indexOf(FA_trash),1)
			this.parentElement.remove();
	localStorage.setItem('MovieList',JSON.stringify(data));
		}
	});


add.li.appendChild(FA_trash);

movie_list.appendChild(add_li);



}


