const app = angular.module('BeansApp', []);

app.controller('MyController', ['$http', function($http) {
  this.name = null;
  this.img = null;
  this.origin = null;
  this.recipe = null;

  //INDEX
  this.getBeans = () => {
    $http({
      method: 'GET',
      url: '/beans'
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }

  //CREATE - PUT
  this.createBean = () => {
    console.log('created', this.createForm);
    $http({
      method:'POST',
      url:'/beans',
      data:
      {
        name: this.name,
        img: this.img,
        origin: this.origin,
        recipe: this.recipe
      }
    }).then((response) => {
      console.log(response);
      //this.getBeans();
    }, (error) => {
      console.log(error);
    })
  }

  //DELETE
  this.deleteBean = (bean) => {
    console.log('deleted', bean._id);
    $http({
      method: 'DELETE',
      url: '/beans/' + id
    }).then((response) => {
      console.log(response);
      //this.getBeans();
    }, (error) => {
      console.log(error);
    })
  }

  //EDIT/UPDATE - PUT
  this.updatedBean = (bean) => {
    console.log('updated');
    $http({
      method:'PUT',
      url:'/beans/' + bean._id
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }

  this.getBeans();
}]) // End of Controller
