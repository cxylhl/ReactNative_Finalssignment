import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FlatList extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>15648</Text>
                </View>
                <FlatList data={[{key: 'a'}, {key: 'b'}]} renderItem={({item}) => <Text>{item.key}</Text>} />
            </View>
        )
    }
}
