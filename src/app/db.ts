const portfolios = [
  {
    id: 1,
    title: "Twitter Clone",
    url: "http://nodebird.xyz/",
    languages: [
      "NodeJS",
      "Next JS",
      "React JS",
      "Redux",
      "Redux-Saga",
      "Ant Design",
      "Sequelize",
      "MYSQL",
      "AWS-EC2"
    ],
    imgUrl: "assets/img/projects/nodebird.png",
    githubUrl: "https://github.com/rlackswhd91/nodebird2.0",
    description:
      "Twitter clone project called nodebird allows you the post, retweet, follow, like and comment. It was built with Node JS on server Next js & React for server side rendering. It uses Redux for state management and Redux-Saga for asynchronous action dispatch. It uses premade components from Ant Design for styling, which is similar framework as React Material UI but with different looks. AWS S3 was used for file storage and AWS EC2 for deployment. Nodebird uses MYSQL and Sequelize for ORM. "
  },
  {
    id: 2,
    title: "Youtube Clone",
    url: "https://utubeclone.herokuapp.com/",
    languages: ["NodeJS", "SASS", "HTML"],
    imgUrl: "assets/img/projects/youtube.jpg",
    githubUrl: "https://github.com/rlackswhd91/utubeClone",
    description:
      " Youtube clone project where you can record and upload videos. It was built with Node JS on server and PUG, SASS and HTML for rendering. Project uses AWS S3 for file storage, Mongo Atlas for database, and Heroku for deployment. Main features	includes; GitHub, Facebook Log In Customised video player built with JS Upload, edit and delete Video Edit profile, password Real time chat"
  },
  {
    id: 3,
    title: "Uber Clone",
    languages: [
      "NodeJS",
      "GraphQL",
      "TypeScript",
      "Apollo",
      "React",
      "CSS",
      "HTML"
    ],
    url: "https://rlackswhd91.github.io/uberClientReview/#/",
    imgUrl: "assets/img/projects/uber.jpg",
    githubUrl: "https://github.com/rlackswhd91/uberClientReview",
    description:
      "Uber Clone Projects searches destination and shows the shortest route and connect the user with drivers giving them current location. This allows subscription of driver’s and user’s location, subscribe chat message and so on. It was built with GraphQL, NodeJS, TypeScript for backend and React, TypeScript, Styled Component, Apollo for frontend. Used Google map API, React Facebook Login and Amazon RDS. This app requires 2 users for full function to test subscription of location and messages but this still allows single user to test application. Main features	includes; Phone Verification, Facebook Log In, Edit Profile, Add favorite Place,Find Address on Google map, Show current of nearby passenger and driver location on google map, Request and subscribe ride requests, Update ride status and subscribe ride status, Chat room and subscribe messages"
  },
  {
    id: 4,
    title: "Netflix Clone",
    languages: ["React", "CSS", "HTML"],
    url: "https://chanjong-nomflix-v2.netlify.com",
    imgUrl: "assets/img/projects/nomflix.jpg",
    githubUrl: "https://github.com/rlackswhd91/Nomflix-v2.0",
    description:
      "Nomflix is a responsive front-end app that retrieves movies and TV series data. It was built with React, HTML and CSS with styled component. Data was driven from using third party API from ‘The Movie Database API. Main features include ; Search TV & Movie Get list of movies & TVs Show Collection of Movie Show related Episodes and seasons "
  },
  {
    id: 5,
    title: "Flat-Ui-Color Clone",
    languages: ["React", "CSS", "HTML"],
    url: "https://chanjong-colors.netlify.com/",
    imgUrl: "assets/img/projects/flatuicolor.jpg",
    githubUrl: "https://github.com/rlackswhd91/FlatUIClone",
    description:
      "Clone project of one of the most popular Color-Picker app. It was built with React HTML and CSS framework called Material-UI for CSS. Click and Copy color’s hash codes Design you own pallet with drag and drop colors Click to copy colors with 10 different"
  },

  {
    id: 6,
    title: "Concert Promotion site",
    languages: ["React", "CSS", "HTML"],
    url: "https://chanjong-bts.netlify.com/",
    imgUrl: "assets/img/projects/bts.jpg",
    githubUrl: "https://github.com/rlackswhd91/BTS",
    description:
      "Music concert promotion website built with React, libraries like react-reveal, react-scroll, react-slick and Material-UI for CSS framework."
  },
  {
    id: 7,
    title: "Responsive Portfolio site",
    languages: ["Angular7", "SCSS", "HTML"],
    url: "https://chanjong-portfolio.netlify.com/",
    imgUrl: "assets/img/projects/portfolio.jpg",
    githubUrl: "https://github.com/rlackswhd91/ResponsivePortfolioAngular",
    description:
      "Responsive Portfolio made with Angular7, Scss and HTML. It contains portfolios, story about me and contact details"
  }
];
export default portfolios;
