declare module 'rheostat' {
    import { Component } from 'react';
  
    interface RheostatProps {
      min?: number;
      max?: number;
      values: number[];
      onValuesUpdated?: (data: { values: number[] }) => void;
      onChange?: (data: { values: number[] }) => void;
    }
  
    class Rheostat extends Component<RheostatProps> {}
  
    export default Rheostat;
  }
  