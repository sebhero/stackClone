interface IQuestion{
	id?:string;
	author:string;
	title:string;
	description:string;
	tags:Array<ITag>;
	votes:number;
	solved:boolean;
	solution?:number;
	answears?:Array<IAnswere>
}