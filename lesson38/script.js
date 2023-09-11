/*<li class="list-group-item d-flex justify-content-between">
<span>An item</span>
<div>
    <a class="btn-important text-dark" href=""><i class="fs-5 bi bi-exclamation-circle-fill me-1"></i></a>
    <a class="btn-deletetext-dark" href=""><i class="fs-5 bi bi-x-circle-fill"></i></a>
</div>
</li>*/

function addTask() {
   // document.querySelector('.add input').value

   let value = this.previousElementSibling.value;
   console.log(value);
}

document.querySelector('.btn-add').addEventListener('click', addTask.bind(this));

// if(true) {
//     var a=4;
//     console.log(a);
// }

// console.log(a);