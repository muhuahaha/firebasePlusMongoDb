const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('get /');
  res.json({ message: 'Get all Posts' });
});

router.post('/', (req, res) => {
  res.send('Create Post');
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get single Post with id ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Update Post with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Post with id ${req.params.id}`);
  });

const users = [{ name: 'Kyle' }, { name: 'Sally' }];

router.param('id', (req, res, next, id) => {
  console.log(id, 'idddd');
  req.user = users[id];
  next();
});

module.exports = router;
