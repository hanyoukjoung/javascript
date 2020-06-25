const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.

const dictionary = [];
btn.addEventListener('click', () => {
    let wordTag = document.querySelector('#word')
    let word = wordTag.textContent
    // .은 ~의를 의미하는 것 같다.
    //const는 바꿀수 없는거고 let은 바꿀수 있는 거다
    let inputTag = document.querySelector('#input')
    let errorTag = document.querySelector('#error') 
    let input = inputTag.value
    //글자의 첫번째 글자 가져오는것
    if(dictionary.includes(input)) {
        errorTag.textContent = '중복입니다.'
    }else{

        if (word[word.length - 1] === input[0]){
            wordTag.textContent = input
            errorTag.textContent = ''
            inputTag.value = ''
            inputTag.focus()
            dictionary.push(input)
        } else {
            errorTag.textContent = "땡"
            inputTag.value = ''
            inputTag.focus()
        }
    }
})

// 'abdced'[0] // 'a'
// '가나다라마바사'[3] // '라'
// '문자열'.length => 문자열의 길이 3 
// '제로초'[2] //length 3
// '초밥'[1] //length  2
