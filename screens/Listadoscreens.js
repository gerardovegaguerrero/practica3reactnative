import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/LibreriaContext';

export default function Wishlist() {
  const { wishList, eliminarWish,agregarCarro } = useContext(Context);

  return (
    <View>
      <ScrollView>
        {wishList.length === 0 ? (
          <View>
            <Text style={styles.paragraph}>No hay nada en tu Wishlist</Text>
          </View>
        ) : (
            wishList.map((a,i)=>
            <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text key={i}>Precio = ${a.precio} </Text>
            <Text key={i + 10}>Idioma = {a.idioma}</Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={()=>agregarCarro(a)}>
                <Ionicons name={'cart-outline'} size={22} color={'green'} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => eliminarWish(a)}>
                <Ionicons name={'heart-dislike'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
          </Card>
            )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'row',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});