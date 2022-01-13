//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let errMessage = '';

const users = [
  {
    name: 'Josh Jacobs'
  }, 
  {
    name: 'Derek Carr'
  },
  {
    name: 'Hunter Renfrow'
  }
];

router.post('/addUser', (req, res, next) => {
  const userIndex = users.findIndex(user => user.name === req.body.addUser);
  if (userIndex >= 0) {
    errMessage = "User Already Exists";
  } else {
    users.push({name: req.body.addUser});
  }
  res.redirect('/ta02');
})

router.post('/removeUser', (req, res, next) => {
  const userIndex = users.findIndex(user => user.name === req.body.removeUser);
  if (userIndex >= 0) {
    users.splice(userIndex, 1);
  } else {
    errMessage = "There is No User by that Name"
  }
  res.redirect('/ta02');
})

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    error: errMessage
  });
  errMessage = '';
});



module.exports = router;
