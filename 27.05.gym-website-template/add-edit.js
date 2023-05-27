let inputImg=document.querySelector('#inputImg')
let inputExc=document.querySelector('#inputExc')
let inputDesc=document.querySelector('#inputDesc')
let form=document.querySelector('form')
let id=new URLSearchParams(window.location.search).get('id')
let MAIN_URL="http://localhost:8000/offers"
async function create() {
    const addExercise={
        image: `${inputImg.value.split("\\")[2]}`,
        exercise: inputExc.value,
        description: inputDesc.value,
    }
    await axios.post(MAIN_URL, addExercise)
    window.location.href='home.html'
}
if(id){
    async function getExcbyid() {
        const res = await axios(`${MAIN_URL}/${id}`)
        const data = await res.data
        inputExc.value = data.exercise
        inputDesc.value=data.description
    }
    getExcbyid()
}
async function editExc() {
    const exc = {
        image:`${inputImg.value.split("\\")[2]}` ,
        exercise: inputExc.value,
        description: inputDesc.value,
    }
    await axios.patch(`${MAIN_URL}/${id}`,exc )
    window.location.href = 'home.html'
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(id){
        editExc()
    }else{
        create()
    }
})