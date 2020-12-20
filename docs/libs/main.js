$(document).ready(function () {
// Подключение точек пагинации справа page-nav
$('#page-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {}
});


	// form placeholder
	const formItems = document.querySelectorAll('.form-field');
	
	for(let item of formItems){
		const thisParent = item.closest('.form-item');
		const thisPlaceholder = thisParent.querySelector('.fake-palceholder');
		// Если инпут в фокусе		
		item.addEventListener('focus', function(){
			thisPlaceholder.classList.add('active');
		});

		// Если инпут теряет фокус
		item.addEventListener('blur', function(){

			if(item.value.length > 0){
				thisPlaceholder.classList.add('active');
			}
			else{
				thisPlaceholder.classList.remove('active');
			}
		})
	}


    //моб меню
    const toggleMenu = document.querySelector('.toggle-menu'); //иконка гамбургер
    const mobMenu = document.querySelector('.mobile-menu'); //mob menu
    const overlay = document.querySelector('#overlay'); //overlay
    const bodyEl = document.body;


    //прослушиваем событие клик по гамбургеру
    toggleMenu.addEventListener('click', function(){

        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

    //прослушиваем событие клик моб меню
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        toggleMenu.classList.remove('active');
        overlay.classList.remove('active');
        bodyEl.classList.remove('noscroll');

    });
    //-фильтрация проектов
    let containerEl = document.querySelector('#portfolio-projects');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });


});

