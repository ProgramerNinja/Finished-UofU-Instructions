// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
}

// TODO: Create a new object using the 'BlogPost' constructor

const first = new BlogPost('Jared', 'New News', 'Super cali fragilistic exspialidocious! WOOOOOO!', "10/19/2023");

// TODO: Call the 'printMetaData()' method on the new object
first.printMetaData();