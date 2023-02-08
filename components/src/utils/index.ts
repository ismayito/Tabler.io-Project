export function setInStorage(key:any, data:any) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key:any) {
	return  JSON.parse(localStorage.getItem(key)!);
}


export function removeFromStorage(key:any){
	return (localStorage.removeItem(key));
}