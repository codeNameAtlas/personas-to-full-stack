var Analytics = require('analytics-node');
var analytics = new Analytics('LWkZRVFsSHzjl03e8XXFNwQqrXg8o0Bt');

var user = {
	userId: "userId123",
	name: "tom holland",
	email: "tom@holland.com",
	weight: 24,
	tasty: false
}

analytics.identify({
  userId: user.userId,
  traits: {
    name: user.name,
    email: user.email,
    weight: user.weight,
    tasty: user.tasty
  }
});


analytics.track({
  userId: user.userId,
  event: 'Signup Event',
  properties: {
    server: true,
    shippingMethod: '2-day'
  },
  context: {
  	traits: { 
	name: user.name,
    email: user.email,
    weight: user.weight,
    tasty: user.tasty
   }

  }
});

/*

analytics.track({
  userId: 'someUserId123',
  event: 'Signup Event',
  properties: {
    revenue: 39.95,
    shippingMethod: '2-day'
  }
});

*/
