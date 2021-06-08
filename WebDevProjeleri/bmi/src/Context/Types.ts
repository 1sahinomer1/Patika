export type BmiContextState = {
    weight: number | undefined;
    height:number | undefined;
    open:boolean|undefined;
    alert:boolean|undefined;
    handleWeight(event: React.ChangeEvent<HTMLInputElement>): void;
    handleHeight(event: React.ChangeEvent<HTMLInputElement>): void;
    openModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void;
    openAlert(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void;
    calculate:(weight:number,height:number)=>number;
    bmi:(bmi:number)=>string;
  };

export interface resultsArray {
  bmi:number;
  bmiResult:string;
}

export type LocalResult = {
   date:string,
   results:resultsArray[];
}