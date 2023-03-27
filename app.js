const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) 
// захват плашки
item.addEventListener('dragend', dragend)
//отпускаем плашку

//создаем на каждой итерации placeholder из массива placeholders
for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover) //вызывается, когда перетаскиваемый элемент находится над placeholder
	placeholder.addEventListener('dragenter', dragenter) //вызывается, когда мы заходим на территорию placeholder
	placeholder.addEventListener('dragleave', dragleave) //вызывается, когда вышли из placeholder
	placeholder.addEventListener('drop', dragdrop) //вызывается, когда отпустили
}

function dragstart (event){
	// console.log('drag start', event.target)
	event.target.classList.add('hold')
	setTimeout(() => 	event.target.classList.add('hide'), 0);
}

function dragend (event) {
	// event.target.classList.remove('hold', 'hide') тоже самое, что и event.target.className = 'item'
	event.target.className = 'item'
}

function dragover (event) {
	event.preventDefault()
}

function dragenter (event) {
	event.target.classList.add('hovered')
}

function dragleave (event) {
	event.target.classList.remove('hovered')
}

function dragdrop (event) {
	event.target.classList.remove('hovered')
	event.target.append(item)
}