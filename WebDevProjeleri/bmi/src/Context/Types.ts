export type BmiContextState = {
    weight: number | undefined;
    height:number | undefined;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  };