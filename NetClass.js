class myClass {
    constructor(name){
        this.name = name;
    }
    myFunc(){
        console.log("My Name is " + this.name)
    }
}

module.exports.myCls = myClass;