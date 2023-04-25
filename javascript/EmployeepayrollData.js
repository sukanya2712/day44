class EmployeePayrollData {
    

    get id(){ 
        return this._id;
    }
    set id(id){
        this._id=id;
    }

    get name() {
        return this._name;
    }

    set name( name ) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if ( nameRegex.test(name) )
            this._name = name;
        else throw "Name is incorrect";
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic ( profilePic ) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender ( gender ) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department ( department ) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary ( salary ) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }

    set note ( note ) {
        this._note = note;
    }

    get start_date() {
        return this._start_date;
    }

    set start_date ( startDate ) {
        const inputDate = new Date(startDate);
    if (isNaN(inputDate.getTime())) {
        throw new Error("Invalid date format. Please use yyyy-mm-dd format.");
    }
        // Check if the date is not in the future
    const currentDate = new Date();
    if (inputDate > currentDate) {
        throw new Error("Start date cannot be in the future.");
    }

    // Check if the date is within 30 days of joining
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);
    if (inputDate < this._joinDate || inputDate > currentDate) {
        throw new Error("Start date should be within 30 days of joining.");
    }

    // Set the start date if all validation checks pass
    this._start_date = inputDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" :
                        this.start_date.toLocaleDateString("en-US", options);
        return "id=" +this.id+"Name = " + this.name + ", Gender = " + this.gender + ", ProfilePic = " +this.profilePic
                    + ", Department = " + this.department + ", Salary = " + this.salary +
                        ", StartDate = " + empDate + ", Note = " +this.note;
    }
}