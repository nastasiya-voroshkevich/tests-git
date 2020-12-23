$(document).ready(function(){
    
    const toggleMenu = document.querySelector('.toggle-menu'); //иконка гамбургер
    const mobMenu = document.querySelector('.mobile-menu'); //mob menu
    const overlay = document.querySelector('.overlay'); //overlay
    const bodyEl = document.body;
    
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



    
    //фильтрация проектов
    let containerEl = document.querySelector('#portfolio-projects');
    
    let mixer = mixitup(containerEl,{
    classNames: {
        block:""
    }
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
        
        //FORM VALIDATE
        $('.contact-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Введите email',
                    email: 'отсутсвует символ @'
                },
                subject: {
                    required: 'Введите тему сообщения'
                },
                message: {
                    required: 'Введите текстсообщения'
                }
            },
            submitHandler: function (form) {
                ajaxFormSubmit();
            }
        })
    
    // Функция AJAX запрса на сервер
    
    function ajaxFormSubmit() {
    
        let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.
    
        //Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string
    
            // Функция если все прошло успешно
            success: function (html) {
                $(".contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });
        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }
        
     })
    