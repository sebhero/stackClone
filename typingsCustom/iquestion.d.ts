/// <reference path="myInterfaces.d.ts" />


interface IQuestion{
	_id?:any;
	author:string;
	authorId:string;
	title:string;
	description:string;
	tags?:Array<ITag>;
	votes:number;
	solved:boolean;
	solution?:number;
	answers?:Array<IAnswer>
}