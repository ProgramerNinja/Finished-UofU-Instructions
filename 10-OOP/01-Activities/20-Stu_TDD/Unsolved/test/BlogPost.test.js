const BlogPost = require('../lib/BlogPost.js');
const Comment = require('../lib/Comment.js');

describe('BlogPost', () => {
  // TODO: Add a comment describing this test.
  // makes sure that the const blogpost is an instance of the constructor BlogPost
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const blogpost = new BlogPost();

      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // TODO: Add a comment describing this test.
  // makes sure that the value of blogpost.authorname is the same as the initialized value and that it was initilized correctly
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'John Doe';
      const blogpost = new BlogPost(authorName);

      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  // makes sure that the value of blogpost.title is the same as the initialized value and that it was initilized correctly
  describe('Initialize title', () => {
    it('should set title properly', () => {
      const title = 'My First Post';
      const blogpost = new BlogPost('John Doe', title);

      expect(blogpost.title).toBe(title);
    });
  });

  // TODO: Add a comment describing this test.
  //makes sure that the value of blogpost.text is the same as the initialized value and that it was initilized correctly
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'Dogs are super cute!';
      const blogpost = new BlogPost('John Doe', 'My First Post', text);

      expect(blogpost.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  //makes sure that the value of blogpost.createdOn is the same as the initialized value and that it was initilized correctly
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        createdOn
      );

      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  //makes sure that the value of blogpost.comments is set eo an empty value and the length of the array is 0 and that it was initilized correctly
  describe('Initialize comments', () => {
    it('should create blogpost array with a length of 0', () => {
      const blogpost = new BlogPost();

      expect(blogpost.comments.length).toBe(0);
    });
  });

  // TODO: Add a comment describing this test.
  // Makes sure that the addComment function works correctly and is a correct instance of Comment
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      const blogpost = new BlogPost();
      const comment = new Comment();
      blogpost.addComment(comment);

      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
    });
  });

  // TODO: Add a comment describing this test.
  // Makes sure that the input value is parsed and output correctly
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        '12/15/2021'
      );

      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});
