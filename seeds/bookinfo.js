
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book; ALTER SEQUENCE "book_ID_seq" restart with 12;')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('book').insert({ ID:1, Title: 'Secrets of a JavaScript Ninja', Page_Count:464, Programming_Languages:'JavaScript' , ISBN:'9781617292859' }),
        knex('book').insert({ ID:2, Title: 'JavaScript the Good Parts', Page_Count:176, Programming_Languages:'JavaScript' , ISBN:'9780596517748' }),
        knex('book').insert({ ID:3, Title: 'Functional Programming in JavaScript: How to improve your JavaScript programs using functional techniques', Page_Count:272, Programming_Languages:'JavaScript', ISBN:'9781617292828' }),
        knex('book').insert({  ID:4, Title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems ', Page_Count:392, Programming_Languages:'CSS' , ISBN:'9781449372637' }),
        knex('book').insert({  ID:5, Title: 'Node.js in Action ', Page_Count:416, Programming_Languages:'Node' , ISBN:'9781617290572' }),
        knex('book').insert({ ID:6,  Title: 'Algorithms of the Intelligent Web', Page_Count:240, Programming_Languages:null , ISBN:'9781617292583' }),
        knex('book').insert({  ID:7 ,Title: 'Express in Action: Writing, building, and testing Node.js applications', Page_Count:256, Programming_Languages:'Express' , ISBN:'9781617292422' }),
        knex('book').insert({ ID:8, Title: 'Design for Hackers: Reverse Engineering Beauty', Page_Count:352, Programming_Languages:null , ISBN:'9781119998952' }),
        knex('book').insert({  ID:9, Title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns', Page_Count:236, Programming_Languages:'JavaScript' , ISBN:'9780596806750' }),
        knex('book').insert({ ID:10, Title: 'Graphic Design: The New Basics: Second Edition, Revised and Expanded', Page_Count:264, Programming_Languages:null , ISBN:'9781616893323' }),
        knex('book').insert({  ID:11, Title: 'Animation in HTML, CSS, and JavaScript', Page_Count:514, Programming_Languages:'HTML,CSS,JavaScript' , ISBN:'9781502548702' })

      ]);
    });
};
