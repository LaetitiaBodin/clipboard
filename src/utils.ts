const fetchData = async (setHook : any, src : string) => {
	fetch(src)
		.then(val => val.json())
		.then(val => setHook(val))
}

export { fetchData }