/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {Grid} from '../style/Grid';
import {Bg} from '../style/Bg';
import {rounded} from '../style/Rounded';
import {Card} from '../style/Card';
import {Padding} from '../style/Padding';
import {Border} from '../style/Border';
import {FC, ReactNode} from 'react';
type timeLine = {
  headerTxt: string;
  headerStyle: any;
  children: ReactNode;
};
export const TimeLine: FC<timeLine> = props => {
  return (
    <View style={[{width: 'auto'}]}>
      <View style={[Grid.row]}>
        <View
          style={[Bg.bgMuted, rounded.roundedCircle, {width: 20, height: 20}]}
        />
        <Text style={[{marginLeft: 4}, props.headerStyle]}>
          {props.headerTxt}
        </Text>
      </View>
      <View style={[Grid.row, {width: 'auto'}, Grid.colSm11]}>
        <View
          style={[Card.card, Padding.p0, Border.border1, {marginLeft: 8}]}
        />
        <View style={[Card.card, Padding.p0, {marginLeft: 10, elevation: 0}]}>
          {props.children}
        </View>
      </View>
    </View>
  );
};
