export class ForecastModel{
    constructor(
        public date:string,       
        public temperature :number,
        public sealevel:number,        
        public icon: string){}
}