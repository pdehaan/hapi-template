'use strict';

exports.home = {
  handler: (request, reply) => {
    reply.view('home', {
      title: 'Home'
    });
  },
  description: 'Home route',
  notes: 'The main home route',
  tags: ['home']
};
