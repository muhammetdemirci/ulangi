/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import {
  ObservableDimensions,
  ObservableShell,
} from '@ulangi/ulangi-observable';
import { observer } from 'mobx-react';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ellipse, Svg } from 'react-native-svg';

export interface AtomShellProps {
  observableDimensions: ObservableDimensions;
  shell: ObservableShell;
}

@observer
export class AtomShell extends React.Component<AtomShellProps> {
  public render(): React.ReactElement<any> {
    const { windowWidth, windowHeight } = this.props.observableDimensions;
    return (
      <Svg style={styles.container} width={windowWidth} height={windowHeight}>
        <Ellipse
          cx={this.props.shell.position.x}
          cy={this.props.shell.position.y}
          rx={this.props.shell.diameter / 2}
          ry={this.props.shell.diameter / 2}
          stroke="#f38181"
          strokeWidth={1 + StyleSheet.hairlineWidth}
          fill="none"
        />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
