/// <reference path="myInterfaces.d.ts" />

interface IQuestion{
	id?:number;
	author:string;
	title:string;
	description:string;
	tags?:Array<ITag>;
	votes:number;
	solved:boolean;
	solution?:number;
	answers?:Array<IAnswer>
}