import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Click {
  readonly id: string;
  readonly epocTime: number;
  constructor(init: ModelInit<Click>);
  static copyOf(source: Click, mutator: (draft: MutableModel<Click>) => MutableModel<Click> | void): Click;
}