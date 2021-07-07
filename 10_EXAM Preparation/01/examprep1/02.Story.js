class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can\'t like the same story twice!`);
        }
        if (username === this.creator) {
            throw new Error(`You can\'t like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can\'t dislike this story!`);
        }
        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        if (id === undefined || !this._comments.some(x => x.Id === id)) {
            let newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`
        }
        let commentToReply = this._comments.find(c => c.Id === id);
        let replyDotId = commentToReply.Replies.length + 1;
        let replyId = Number(`${commentToReply.Id}.${replyDotId}`);

        let newReply = {
            Id: replyId,
            Username: username,
            Content: content
        }
        commentToReply.Replies.push(newReply);
        return `You replied successfully`;
    }

    toString(sortingType) {
        const sortType = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username)
        }
        let comments = this._comments.sort(sortType[sortingType]);
        comments.forEach(c => c.Replies.sort(sortType[sortingType]));

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes}\nComments:\n`;

        for (const comment of comments) {
            result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
            for (const reply of comment.Replies) {
                result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
            }
        }
        return result.trim();
    }
}







// class Story {
//     constructor(title, creator) {
//         this.title = title;
//         this.creator = creator;
//         this._comments = new Map()
//         this._likes = [];
//     }
//     get likes() {
//         if (this._likes.length == 0) {
//             return `${this.title} has 0 likes`;
//         }
//         if (this._likes.length == 1) {
//             return `${this._likes[0]} likes this story!`;
//         }
//         return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
//     }
//     like(username) {
//         if (this._likes.includes(username)) {
//             throw new Error('You can\'t like the same story twice!');
//         }
//         if (username === this.creator) {
//             throw new Error(`You can\'t like your own story!`);
//         }
//         this._likes.push(username);
//         return `${username} liked ${this.title}!`
//     }
//     dislike(username) {
//         if (!this._likes.includes(username)) {
//             throw new Error('You can\'t dislike this story!');
//         }
//         this._likes = this._likes.filter(x => x !== username);
//         return `${username} disliked ${this.title}`;
//     }
//     comment(username, content, id) {
//         if (id === undefined || !this._comments.has(id)) {
//             let theId = this._comments.keys().length + 1;
//             let newComment = {
//                 Id: theId,
//                 Username: username,
//                 Content: content,
//                 Replies: new Map()
//             }
//             this._comments.set(theId, newComment);
//             return `${username} commented on ${this.title}`;
//         }
//         if (this._comments.has(id)) {
//             let theId = this._comments[id].Replies.length + 1;
//             let newReply = {
//                 Id: theId,
//                 Username: username,
//                 Content: content
//             }
//             this._comments[id].Replies.set(theId, newReply);
//             return 'You replied successfully';
//         }
//     }

//     toString(sortingType) {
//         let sortedMap = [];
//         if (sortingType === 'asc') {
//             sortedMap = Array.from(this._comments.entries())
//                 .sort((a, b) => a[0] - b[0])
//                 .forEach(c => c.Replies = Array.from(c.Replies.entries()
//                     .sort((a, b) => a[0] - b[0])));
//         } else if (sortingType === 'desc') {
//             sortedMap = Array.from(this._comments.entries())
//                 .sort((a, b) => b[0] - a[0])
//                 .forEach(c => c.Replies = Array.from(c.Replies.entries()
//                     .sort((a, b) => b[0] - a[0])));
//         } else if (sortingType === 'username') {
//             sortedMap = Array.from(this._comments.entries())
//                 .sort((a, b) => a[1].Username.localeCompare(b[1].Username));
//         }
//         let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes.length}\nComments:\n`;
//         for (const comment of sortedMap) {
//             result += `${comment.Id}. ${comment.Username}: ${comment.Content}`;
//             for (const reply of comment.Replies) {
//             result += `${reply.Id}. ${reply.Username}: ${reply.Content}`;
//             }
//         }

//         for (let key of this._comments) {
//             result += `-- ${key}. ${comments[key].Username}: ${comments[key].Content}`;
//             for (let keyR of comments[key].Replies) {
//                 result += `--- ${keyR}. ${comments[key].Replies[keyR].Username}: ${comments[key].Replies[keyR].Content}`;
//             }
//         }
//         return result.trim();
//     }
// }


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
