/**
 * Created by sebadmin on 2015-08-10.
 */
///<reference path='../../typingsCustom/myInterfaces.d.ts' />

namespace stackClone {

	/***
	 * Filter for the tags
	 * @param input string of search stuff should be in the []
	 * @returns {function()}
	 */
	function tagFilter() {

		return (input:string) => {

			if(input === undefined)
			return "none";

			var newTxt = input.split('[');
			var all:string = '';

			if(newTxt.length >1){
				for(var i =1;i<newTxt.length;i++)
				{
					var txt = newTxt[i];
					all+=txt.split(']')[0]+' , ';
				}

				return all;
			}

			//var regExp = /\[([^)]+)\]/;
			//var matches:RegExpExecArray = regExp.exec(item);

			//if(matches != null && matches.length > 0)
			//{
			//
			//	var allMatches:string= '';
			//	//
			//	//for(item of matches)
			//	//{
			//	//	allMatches += ","+item;
			//	//}
			//	//return allMatches+ " length: "+matches.length;
			//	for(var i =1; i< matches.length; i++) {
			//		allMatches+=matches[i]+',';
			//	}
			//	return allMatches;
			//}


			return "hello world "+input;

		}

	}

	angular.module('stackClone')
		.filter('tagFilter', tagFilter);

}
