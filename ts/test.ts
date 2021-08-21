import React, {Component} from 'react';
const initialState = {count: 0}
const defaultProps = {id: '111'}
// type State = { count: number }
// type Props = { otherProps: string } & DefaultProps
type State = typeof initialState
type Props = {otherProps: string} & typeof defaultProps

export class Counter extends Component<Props, State> {
  static defaultProps = defaultProps
  state = {
    count: 0
  }
}