import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { stylesDetailP } from './styles/StyleDetail'
import { maskify, getNumberCardinal, reversePolish } from '../validations'
import { QuestionMasked, QuestionCardinal, QuestionPolish, QuestionTitle, url, go } from '../constants/constants'
const Algorithms = props => {
  const [mask, onChangeTextMask] = useState('')
  const [cardinalNumber, setCardinalNumber] = useState('')
  const [polishNotation, setPolishNotation] = useState('')
  useEffect(() => {
    console.log('Algorithms')
  }, [])

  return (
    <View style={stylesDetailP.content}>
      <Text style={stylesDetailP.titleText}>{QuestionTitle}</Text>
      <Image
        style={stylesDetailP.image}
        source={{
          uri: url
        }}
      />
      <View style={stylesDetailP.containerText}>
        <Text style={stylesDetailP.titleText}>
          {QuestionMasked}
        </Text>
        <TextInput
          style={stylesDetailP.inputStyle}
          onChangeText={text => onChangeTextMask(text)}
          value={maskify(mask)}
        />
        <Text style={stylesDetailP.text}>
          {maskify(mask)}
        </Text>
        <Text style={stylesDetailP.titleText}>
          {QuestionCardinal}
        </Text>
        <TextInput
          style={stylesDetailP.inputStyle}
          onChangeText={text => setCardinalNumber(text)}
          value={cardinalNumber}
        />
        <Text style={stylesDetailP.text}>
          {cardinalNumber !== '' && getNumberCardinal(cardinalNumber)}
        </Text>
        <Text style={stylesDetailP.titleText}>
          {QuestionPolish}
        </Text>
        <TextInput
          style={stylesDetailP.inputStyle}
          onChangeText={text => setPolishNotation(text)}
          value={polishNotation}
        />
        <Text style={stylesDetailP.text}>
          {reversePolish(polishNotation)}
        </Text>

        <TouchableOpacity onPress={() =>
          props.history.push('/Pokemon')}
        >
          <Text style={stylesDetailP.titleText}>{go}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Algorithms
