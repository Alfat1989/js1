console.log(Math.round(Math.random(50 - 40) * 40))


class User { 
    constructor(email) { 
        this.email = email;
    }

    get emailOn() {
    return this.email;
  }
    
    set emailNew(newEmail) {
    this.email = newEmail;
  }
}
 
class ContentEditor extends User {
    constructor({ email, posts }) {
        super(email);
        this.posts = posts;
    }
    
    addPost(newPost) {
        this.posts.push(newPost);
    }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor);
console.log(editor.email)
editor.addPost("post-1")
editor.addPost("post-2")
editor.addPost("post-3")
editor.addPost("post-3")
editor.addPost("post-3")
editor.addPost("post-3")

// const uniquPosts = editor.posts.filter((elem, ind, arr) => arr.indexOf(elem) === ind);
console.log(editor.posts.filter((elem, ind, arr) => arr.indexOf(elem) === ind))

console.log(editor.posts)