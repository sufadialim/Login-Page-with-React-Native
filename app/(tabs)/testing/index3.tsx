import enUS from '@ant-design/react-native/lib/locale-provider/en_US'
import {
    Button,
    List,
    Provider,
    Switch,
    Text,
    Toast,
    Pagination, 
    WhiteSpace, 
    WingBlank
  } from '@ant-design/react-native'
  import { loadAsync } from 'expo-font'
  import React, { useEffect, useRef, useState } from 'react'
  import { ActivityIndicator, ScrollView ,StyleSheet} from 'react-native'

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  }

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
      const loadFontAsync = async () => {
        await loadAsync({
          antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
        })
        setFontLoaded(true)
      }
  
      loadFontAsync()
    }, [])

return(
    <Provider locale={enUS}>
        <ScrollView>
        <Button
            onPress={() => {
              Toast.success('Success')
            }}
            style ={styles.button}>
            BUTTON SUCCESS
          </Button>

          <Button
            onPress={() => {
              Toast.loading('loading...')
            }}
            style ={styles.button}>
            BUTTON LOADING
          </Button>

          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'bottom',
              })
            }}
            style ={styles.button}>
            BUTTON SHOW
          </Button>

          <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>


        </ScrollView>
    </Provider>
)
}

const styles = StyleSheet.create({
button: {
    marginTop: 5,
    marginHorizontal:10,

}
})