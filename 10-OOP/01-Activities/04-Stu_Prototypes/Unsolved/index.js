// TODO: Add a comment describing what kind of function this is
//it is a constructor function that creates a framework for an object named BlogPost
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//.prototype targets a deafult attribute of the object that holds default values and function. in this case we are adding to that array
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// we added a function to the prototype of the object, we then added a function using and and here we are calling for that comment valur to be printed to log
// result: Nice post, I like it!
// after running it, I see that because we are using the push command, it is treating the comment variable as an array and so the result will be in an array
// true result: [ 'Nice post, I like it!' ]
console.log(post.comments);
