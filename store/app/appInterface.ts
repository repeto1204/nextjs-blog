export interface AppStateInterface {
  load: boolean;
  error: boolean;
  startCount: number;
  endCount: number;
}

export interface AppCounterInterface {
  startCount: number;
  endCount: number;
}
