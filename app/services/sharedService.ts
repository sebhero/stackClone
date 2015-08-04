/**
 * Created by seb on 2015-07-27.
 */
/// <reference path="../../typingsCustom/myInterfaces.d.ts" />
namespace stackClone{
	// declare var Todos: Mongo.Collection<ITodo>;

	
	

	export class SharedService{
		
		
		
		
		searchFilter:string="";
		
		public searchOrder:string;

		static $inject = ['$log'];

		constructor(private $log:ng.ILogService){

			$log.info("SharedService LOADED");
			
			//this.searchOrder = SearchOrderEnum.ACTIVE;
			
		}
		
		
	}

	angular.module('stackClone')
		.service('SharedService', SharedService);
}