
module.exports = class Task {
    constructor(id, title, 
        description,completed=false,
        createdAt=new Date()){
    description,completed=false,
     this.id = id;
     this.title = title;
     this.description = description;
     this.completed = completed;
     this.createdAt = createdAt;

    }
}
