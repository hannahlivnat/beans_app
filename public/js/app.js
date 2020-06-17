const app = angular.module('BeansApp', []);

app.controller('MyController', ['$http', function($http) {
  this.name = null;
  this.img = null;
  this.origin = null;
  this.recipe = null;
  this.beans = [];
  this.createForm = {};
  this.newForm = false;
  this.editForm = false;
  this.index = null;

  this.toggleNewForm = () => {
    this.newForm = !this.newForm;
  }

  this.toggleEditForm = (index) => {
    this.editForm = !this.editForm
    this.index = index
    console.log(index);
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
      url: '/beans/' + bean._id
    }).then((response) => {
      console.log(response);
      this.getBeans();
    }, (error) => {
      console.log(error);
    })
  }

  //EDIT/UPDATE - PUT
  this.updatedBean = (bean) => {
    console.log('updated');
    $http({
      method:'PUT',
      url:'/beans/' + bean._id,
      data: this.createForm
    }).then((response) => {
      // console.log(response);
      this.getBeans();
      this.createForm = {};
    }, (error) => {
      console.log(error);
    })
  }

  this.getBeans();
}]) // End of Controller
