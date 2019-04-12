import {Provider} from 'react-redux';
import {getStoreAndRegisterReducers} from './store';
import {ReducersMapObject, Store} from './types';
import React from 'react';

type CodeSplitProviderProps = {
  reducers: ReducersMapObject;
};
export class CodeSplitProvider extends React.Component<CodeSplitProviderProps> {
  private store: Store;
  constructor(props: CodeSplitProviderProps) {
    super(props);
    this.store = getStoreAndRegisterReducers(this.props.reducers);
  }
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
