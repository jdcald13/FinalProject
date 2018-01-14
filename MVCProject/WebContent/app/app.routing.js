angular.module('appModule')
	.config(function($routeProvider){
	$routeProvider
    	.when('/home', {
    			template : '<home></home>'
		})
		.when('/register', {
			template: '<register></register>'
		})
	    .when('/login', {
	    		template : '<login></login>'
	    })
	    .when('/registerBusiness', {
	    	template: '<register-business></register-business>'
	    })
	    .when('/loginBusiness', {
	    	template : '<login-business></login-business>'
	    })
	    .when('/logout', {
	    		template : '<logout></logout>'
	    })
	    .when('/businessHome',{
	    	template: '<business-component></business-component>'
		})
		.when('/user/:id/vehicle',{
			template: '<vehicle></vehicle>'
		})
		.when('/user/:id/request',{
			template: '<request></request>'
		})
		.when('/user/:uid/request/:rid',{
			template: '<request-detail></request-detail>'
		})
		.when('/user/:uid/vehicle/:vid',{
			template: '<vehicle-detail></vehicle-detail>'
		})
	    .when('/user/:id',{
	    		template: '<user-component></user-component>'
	    })
	    .otherwise({
	    		template : '<not-found></not-found>'
	    })
});
