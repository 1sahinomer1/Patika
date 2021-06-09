export type BmiContextState = {
    weight: number ;
    height:number;
    open:boolean|undefined;
    alert:boolean|undefined;
    resultsTotal:resultState;
    handleWeight(event: React.ChangeEvent<HTMLInputElement>): void;
    handleHeight(event: React.ChangeEvent<HTMLInputElement>): void;
    openModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void;
    openAlert(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void;
    calculate:(weight:number,height:number)=>number;
    bmi:(bmi:number)=>string;
  };

  export interface BmiState {
    bmi: number;
    bmiResult: string
  }

   export interface resultState {
     results:BmiState[];
 }