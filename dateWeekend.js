function run(birthday_date) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	let future_dates = ""
	let newBirthDate = birthday_date.split("-")
	newBirthDate[0]= parseInt(newBirthDate[0])
    newBirthDate[1]= parseInt(newBirthDate[1])
	let dayOfWeek =
	{
		0: 'Sun',
		1: 'Mon',
		2: 'Tues',
		3: 'Wed',
		4: 'Thu',
		5: 'Fri',
		6: 'Sat'
	}

	for ( let year=2016; year<2066; year++ ){
		let currDate = new Date(year,(newBirthDate[1]-1),newBirthDate[0])
		const isLeap = ()=> year % 4 === 0
		if (currDate.getDay() ===0 || currDate.getDay()===5 || currDate.getDay()===6)
    	{
			if(newBirthDate[0]===29 & newBirthDate[1]=== 2)
			{
				if(isLeap()) {
					future_dates+= `${dayOfWeek[currDate.getDay()]}-${year} `
				}
			}else{
				future_dates+= `${dayOfWeek[currDate.getDay()]}-${year} `
			}
		}
	}
	
	return future_dates;
}

console.log(run("29-02"))