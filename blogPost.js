const post = {
  title: "The",
  body: "lorem ipsum",
  author: "Dean",
  views: 0,
  comments: [
    {
      author: "John",
      body: "lorem ipsum",
    },
  ],
  isLive: true,
};

// console.log(post);

//Constructor Function

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let constructorPost = new Post("a", "b", "c");
console.log(constructorPost);

//----------------------Price Range Exercise----------------------

let priceRanges = [
  { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];
