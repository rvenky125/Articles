import {useTheme} from '@react-navigation/native';
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {DefButton} from '../components/DefButton';
import CategoriesGrid from '../components/GridView';
import {Spacing} from '../theme/Spacing';
import {SCREEN_HEIGHT} from '../util/Constants';
import {Platform} from 'react-native';
import {typography} from '../theme/Typography';
import {CompatibleScroll} from '../components/CompatibleScroll';
import {SharedElement} from 'react-navigation-shared-element';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import useArticleDom from '../hooks/useArticleDom';

export const ProductOverviewScreen = ({navigation, route}) => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <CompatibleScroll style={styles.container}>
      <StatusBar
        backgroundColor={route.params.color}
        barStyle={'light-content'}
      />
      <View>
        <SharedElement id={route.params.id}>
          <Image
            source={{uri: route.params.url}}
            style={{width: '100%', height: 200}}
            resizeMode={'cover'}
          />
        </SharedElement>
        <Text
          style={{
            position: 'absolute',
            color: colors.card,
            bottom: 0,
            paddingVertical: Spacing.SpaceVerySmall,
            paddingHorizontal: Spacing.SpaceSmall,
            backgroundColor: route.params.color,
            fontWeight: 'bold',
            fontSize: Spacing.SpaceMedium,
            letterSpacing: 1.3,
            borderTopEndRadius: Spacing.SpaceSmall,
          }}>
          {'A sample text that describes picture'}
        </Text>
      </View>
      <RenderHtml
        baseStyle={{paddingHorizontal: Spacing.SpaceMedium}}
        contentWidth={width}
        source={{
          html: `
            <!DOCTYPE html>
            <html>
              <head>
              <title>Page Title</title>
            </head>
            <body>
              <h1>My First Heading</h1>
              <p>My first paragraph.</p>
            </body>
            </html>`,
        }}
      />
      {/* <View style={styles.articleContainer}>
        <Text style={[styles.subtitle, {color: colors.text}]}>Preface</Text>
        <Text style={[styles.content, {color: colors.onPrimaryContainer}]}>
          Kotlin Flow is an implementation of Reactive Stream specification made
          on top of coroutines and channels for Kotlin. The aim of this article
          is to take you through why Kotlin Flow was designed, some basics,
          differences between other reactive stream specifications and
          multi-platform [obviously everyone ❤️ multiplatform these days].
        </Text>

        <Text style={[styles.subtitle, {color: colors.text}]}>
          History behind Flow
        </Text>
        <Text style={[styles.content, {color: colors.onPrimaryContainer}]}>
          The history is spread across the internet but long story short, after
          the launch 🚀 of coroutines, people started enjoying coroutines due to
          its simplicity and structured concurrency. Also coroutines did give an
          easy way to prevent callback hell but it didn’t provide us with any
          reactive APIs similar to RxJava. This combined with growing usage 📈of
          Kotlin, people started expressing their interest to have a pure Kotlin
          implementation of RxJava to leverage the power of Kotlin like type
          system, coroutines, etc combined with Kotlin multiplatform people
          expressed to have the ability to use reactive programming for all
          platforms i.e shared implementation for JVM, JS and Native.
        </Text>

        <Text style={[styles.subtitle, {color: colors.text}]}>Kotlin Flow</Text>
        <Image
          source={{
            uri: 'https://miro.medium.com/max/1400/1*hLp43QwJDJNIG6qiziLM8Q.jpeg',
          }}
          style={{width: '100%', height: 200}}
        />
        <Text style={[styles.content, {color: colors.onPrimaryContainer}]}>
          You know this by now, Kotlin flow is reactive (i.e. async handling of
          data streams), and cold ❄️ (i.e. it won’t start emitting events until
          there’s an observer) and it’s part of Kotlin coroutines library.
        </Text>
      </View> */}
      <View style={{height: SCREEN_HEIGHT / 3}} />
    </CompatibleScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    // justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: Spacing.SpaceSmall,
    paddingBottom: Spacing.SpaceVerySmall,
  },
  articleContainer: {
    paddingHorizontal: Spacing.SpaceMedium,
  },
  content: {
    letterSpacing: 0.7,
    fontSize: 14.5,
  },
});
