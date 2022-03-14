

var addborders=document.getElementsByClassName('addborder')


for (const seat of addborders) {
    seat.addEventListener('click',(e)=>{
        e.target.classList.toggle('border-5')
        e.target.classList.toggle('border-dark')
        
    })
}

const bookseat=document.getElementById('bookseat').addEventListener('click',()=>{
    swal("Booked successfully!");
})
const cancleseat=document.getElementById('cancleseat').addEventListener('click',()=>{
    swal("Cancel successfully!");
})

