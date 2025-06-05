//import './stylesheets/Suggestion.css'

//匿名复选框
// const AnonymousCheckBox =  document.getElementById("Anonymous") 
const UsernameInput = document.getElementById("usernameInput")
const usernameBox = document.getElementById('usernameInput') 
// let Anonymous = false

// AnonymousCheckBox.addEventListener('change', () => {
//     if (AnonymousCheckBox.checked == true) {
//         UsernameInput.readOnly = true
//         usernameBox.style.textDecoration = 'line-through'
//         Anonymous = true
//     } else {
//         UsernameInput.readOnly = false
//         usernameBox.style.textDecoration = 'none'
//         Anonymous = false
//     }
// })

//提交
const SubmitButton = document.getElementById("SubmitButton") 
const TextArea =  document.getElementById("Content")
if (SubmitButton) {
    
    SubmitButton.addEventListener('click', () => {
    // const userPost = Anonymous ? "匿名者" : usernameBox.value
    axios.post("/api/suggestion", {
        id: -1,
        user: usernameBox.value,
        content: TextArea.value
    })
    .then( function(response) { alert("成功 Success")}) 
    .catch(error => {
        alert("失败 Failed: " + (error.response?.data?.message || error.message))
    })
    })
}
