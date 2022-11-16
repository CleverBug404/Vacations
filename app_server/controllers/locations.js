/*GET 'home'  page*/ 
const homelist = (req, res) => {
    res.render('locations-list', {
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: {                                               
        title: 'Loc8r ',                                           
        strapline: 'Find places to work with wifi near you!'      
      }                                                           
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