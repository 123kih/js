var tabBtn = $('.tab-button');
var tabContent = $('.tab-content');
// <p>태그 생성</p>
var pTag = document.createElement('p');
pTag.innerHTML = '태그 생성'
document.querySelector('#test').appendChild(pTag)

var pTag2 = '<p>태그 생성2</p>';
document.querySelector('#test').insertAdjacentHTML("beforeend", pTag2);

var pantsSize = [26,28,30,32,34];
var shirtSize = [95,100,105,110];


$('.form-select').eq(0).on('input', function(e) {
    var selected = $('.form-select').eq(0).val();
    console.log(selected);
    if(selected === 'top') {
        $('.form-select').eq(1).html('');
        shirtSize.forEach(function (item,index){
            $('.form-select').eq(1).append('<option>'+ item+'</option>');
        })
        $('.form-select').eq(1).removeClass('hide');

    }else if(selected === 'cap') {
        $('.form-select').eq(1).addClass('hide');
    }else if(selected === 'bottom') {
        $('.form-select').eq(1).html('');
        // for(let i=0; i < pantsSize.length; i++) {
        //     $('.form-select').eq(1).append('<option>'+ pantsSize[i]+'</option>');
        // }

        pantsSize.forEach(function(size, index){
            $('.form-select').eq(1).append('<option>'+ pantsSize[index]+'</option>');
        })

        pantsSize.forEach((size, index) => {
            console.log(size, index);
        })
        $('.form-select').eq(1).removeClass('hide');


    }
    /*
    *
    * */
    //$('.form-select').eq(1).empty();
})



function tabOpen(num) {
    tabBtn.removeClass('orange');
    tabContent.removeClass('show');
    tabBtn.eq(num).addClass('orange');
    tabContent.eq(num).addClass('show');
}

// for(let i=0; i< tabBtn.length; i++){
//     tabBtn.eq(i).on('click', function() {
//         tabOpen(i);
//     })
// }


$('.list').click(function(e){
    console.log(e.target.dataset.id);
    tabOpen(e.target.dataset.id);

    // console.log($(e.target));
    // console.log($('.tab-button').eq(0));
    // if($(e.target)[0] == $('.tab-button').eq(0)[0]){
    //     tabOpen(0);

    // }
    // // if( e.target == document.querySelectorAll('.tab-button')[0] ) {
    // //     tabOpen(0);
    // // }
    // if( e.target == document.querySelectorAll('.tab-button')[1] ) {
    //     tabOpen(1);
    // }
    // if( e.target == document.querySelectorAll('.tab-button')[2] ) {
    //     tabOpen(2);
    // }
})



// for 반복문
// i j k
for(let i=2; i <= 9; i++){
    for(let j=1; j< 10; j++){
        //console.log(i + " x " + j  + " = " + i*j);
    }
}


// for(let i=1; i<10; i++){
//     for (let j=1; j<10; j++){
//         console.log(i+' x '+j+' = '+i*j);
//     }
// }