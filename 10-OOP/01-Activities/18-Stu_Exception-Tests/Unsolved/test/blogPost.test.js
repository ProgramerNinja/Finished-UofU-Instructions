const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('Author Length', () => {
    
    test('Should throw an error if the author length is less thatn 2', ()=> {
      const cb=()=>new BlogPost("D")
      const err=new Error("Author must be at least 2 characters long.")

      expect(cb).toThrowError(err);
    })
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  describe('Author Characters', () => {
    it('Should throw an error when the author name contains anything other than uppercase, lowercase, numbers, dashes, and underscores.', () => {
      const cb=()=>new BlogPost("Yahoo!!!!")
      const err=new Error('Author must only contain letters, numbers, dashes, and underscores.')
      
      expect(cb).toThrowError(err);
    })
  })
});
