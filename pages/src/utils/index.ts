export function setInStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
	return  JSON.parse(localStorage.getItem(key)!);
}


export function removeFromStorage(key){
	return (localStorage.removeItem(key));
}

