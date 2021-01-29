class Date{
    static lower_year_limit = 2050
    static upper_year_limit = 2000
    constructor(year, month, day){
        this.year = year
        this.month = month
        this.day = day
        this.valid = true
        if(this.validate){
            console.log("Data Not Stored")
            return
        }
        console.log("Data saved!")
    }
    get isLeapYear(){
        if(this.valid){
            if(this.year%400 || (this.year%100!=0 && this.year%4==0)){
                return true
            }
            return false
        }
        console.log("Not Valid Input")
        return false
    }
    get no_of_days(){
        if(this.valid){
            if(this.month == 3 || this.month == 5 || this.month == 8 || this.month == 11){
                return 30
            }
            if(this.month == 1){
                if(this.isLeapYear){
                    return 29
                }
                else  return 28
            }
            else  return 31
        }
        console.log("Not Valid Input")
        return -1
    }
    get validate(){
        if(this.year == undefined || this.year == null){
            console.log("Enter valid year")
            return false
        }
        if(typeof this.year != "number" || Number.isInteger(this.year) == false){
            console.log("Enter valid year")
            return false
        }
        if(this.year<Date.lower_year_limit || this.year > Date.upper_year_limit){
            console.log("The allowed year range is", Date.lower_year_limit, "-", Date.upper_year_limit)
            return false
        }
        
        if(this.month == undefined || this.month == null){
            console.log("Enter valid Month")
        }
        if(typeof this.month != "number" || Number.isInteger(this.month) == false){
            console.log("Enter valid month")
            return false
        }
        if(this.month < 1 || this.month > 12){
            console.log("Month should be in range of 1 to 12")
            return false
        }
        
        if(this.day == undefined || this.day == null){
            console.log("Enter valid day")
            return false
        }
        var no_of_days = this.no_of_days
        if(this.day < 1 || this.day > this.no_of_days){
            console.log("Enter valid day")
            return false
        }
        this.valid = true
        return this.valid
    }        
    get getYear(){
        return this.year
    }
    get getMonth(){
        return this.month
    }
    get getDay(){
        return this.day
    }
    set setYear(year){
        this.year = year
        if(this.year == undefined){
            console.log("Enter valid year")
        }
    }
    set setMonth(month){
        this.month= month
        if(this.month == undefined){
            console.log("Enter valid Month")
        }
    }
    set setDay(day){
        this.day = day
        if(this.day == undefined){
            console.log("Enter valid day")
        }
    }
    isEqual(another_day){
        if(this.year == another_day.year && this.month == another_day && this.day == another_day.day){
            return true
        }
        return false
    }
    addDays(days){
        if(Number.isInteger(days) && days>0){
            var no_of_days = 31
            var day = this.day
            var month = this.month
            var year = this.year
            if(month == 1){
                if(year%400==0 || year%4==0){
                    no_of_days = 29
                }
                else no_of_days = 28
            }
            else if(month == 3 ||  month == 5 || month == 8 || month == 10){
                no_of_days = 30
            }
            if((day+days) > no_of_days){
                if(month == 11){
                    return new Date(year+1, 0, 0).addDays(days - (no_of_days-day))
                }
                else{
                    return new Date(year, month+1, 0).addDays(days - (no_of_days-day))
                }
            }
            day += days
            return new Date(year, month, day)
        }
        else{
            console.log("Enter Valid day gap.")
            return null
        }
    }
    isBefore(date){
        if(this.year < date.getYear){
            return true
        }
        if(this.year > date.getYear){
            return false
        }
        if(this.month < date.getMonth){
            return true
        }
        if(this.month > date.getMonth){
            return false
        }
        if(this.day <= date.getDay){
            return true
        }
        return false
    }
    calGap(date){
        if(this.isBefore(date) == false){
            return null
        }
        var gap = 0
        if(this.year == date.getYear){
            return gap = date.daysIntoYear - this.daysIntoYear
        }
        if(this.year < date.getYear){
            var no_of_days = 365
            if(this.year%400==0 || this.year%4==0){
                no_of_days = 366
            }
            gap = no_of_days - this.daysIntoYear
            for(var i=this.year+1;i<date.getYear;i++){
                if(i%400==0 || i%4==0){
                    gap += 366
                }
                else gap += 365
            }
            gap += date.daysIntoYear
            return gap
        }
        return null
    }
    get daysIntoYear(){
        var days = 0
        for(var i=0;i<this.month;i++){
            var no_of_days = 31
            if(i == 1){
                if(this.year%400==0 || this.year%4==0){
                    no_of_days = 29
                }
                else no_of_days = 28
            }
            else if(this.month == 3 ||  this.month == 5 || this.month == 8 || this.month == 10){
                no_of_days = 30
            }
            days+=no_of_days
        }
        days += this.day
        return days
    }
    display(){
        console.log(this.day, "/", this.month, "/", this.year)
    }
}

// var today = new Date(2021, 0, 25)
// var tomorrow = today.addDays(387)
// console.log("Final")
// today.display()
// tomorrow.display()
// console.log(today.calGap(tomorrow))
// tomorrow.display()
