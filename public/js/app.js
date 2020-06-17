const app = angular.module('BeansApp', []);

app.controller('MyController', ['$http', function($http) {
  this.name = null;
  this.img = null;
  this.origin = null;
  this.recipe = null;
  this.beans = [];
  this.createForm = {};
  this.newForm = false;

  this.toggleNewForm = () => {
    this.newForm = !this.newForm;
  }

  //INDEX
  this.getBeans = () => {
    $http({
      method: 'GET',
      url: '/beans'
    }).then((response) => {
      this.beans = response.data
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
      data: this.createForm
    }).then((response) => {
      this.beans.unshift(response.data);
      this.createForm = {}
      console.log(this.beans);
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
