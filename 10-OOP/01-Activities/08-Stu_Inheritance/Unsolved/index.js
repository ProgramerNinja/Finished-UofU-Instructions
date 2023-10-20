// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.

class ForumItem {
  constructor(authorName, text, createdOn) {
    this.text = text;
    this.createdOn = createdOn;
    this.authorName = authorName;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const firstComment = new Comment('jj', 'yaya', 'right now', ';P')
// TODO: Create a new object using the BlogPost class constructor.
const firstBlog = new BlogPost('jt', 'the new boyo', 'he go wa wa', '10/19/2023')
// TODO: Log both newly created BlogPost and Comment to the console.
console.log(firstBlog);
console.log(firstComment);

firstBlog.addComment(firstComment);
console.log(firstBlog);