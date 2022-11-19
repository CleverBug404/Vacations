/*GET 'home'  page*/ 
const homelist = (req, res) => {
    res.render('locations-list', {
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: {                                               
        title: 'Loc8r ',                                           
        strapline: 'Find places to work with wifi near you!'      
      },
      locations: [{
        name:'Starcups',
        address: '3322 Olympic drive Naples FL',
        rating: 3,
        facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
        distance: '100'
      }, {
        name:'Cafe hero',
        address: '14228 Chestnut Ridge Rd',
        rating: 5,
        facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
        distance: '200'
      }, {
        name:'Burger Queen',
        address: '125 High Street, reading, RG6 1PS',
        rating: 1,
        facilities: ['Food', 'Premium wifi'],
        distance: '250'
      }]
    });
  };


/* GET 'Location info'  page*/
const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', {title: 'Add review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};