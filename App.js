/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import * as mobilenet from '@tensorflow-models/mobilenet';

const initialiseTensorflow = async () => {
  await tf.ready();
  tf.getBackend();
}


const App = () => {
  const [hasPermission, setHasPermission] = useState < null | boolean > (null);
  const [net, setNet] = useState < mobilenet.MobileNet > ();
  const TensorCamera = cameraWithTensors(Camera);
  const textureDims = Platform.OS === 'ios' ?
    {
      height: 1920,
      width: 1080,
    } :
    {
      height: 1200,
      width: 1600,
    };
  let frame = 0;
  const computeRecognitionEveryNFrames = 60;

  const handleCameraStream = (images: IterableIterator<tf.Tensor3D>) => {
    const loop = async () => {
      if (net) {
        if (frame % computeRecognitionEveryNFrames === 0) {
          const nextImageTensor = images.next().value;
          if (nextImageTensor) {
            const objects = await net.classify(nextImageTensor);
            console.log(objects.map(object => object.className));
            tf.dispose([nextImageTensor]);
          }
        }
        frame += 1;
        frame = frame % computeRecognitionEveryNFrames;
      }

      requestAnimationFrame(loop);
    }
    loop();
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      // initialise Tensorflow
      await initialiseTensorflow();
      // load the model
      setNet(await mobilenet.load());

    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.topContent}>
      <View style={styles.textContent}>
        <Text style={styles.sectionTitle}>Thushal </Text>

      </View>
      <View style={styles.cameraContent}>
        <TensorCamera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onReady={handleCameraStream}
          resizeHeight={200}
          resizeWidth={152}
          resizeDepth={3}
          autorender={true}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  textContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  cameraContent: {
    width: "100%",
    flex: 10,
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: "black"
  },
  camera: {
    flex: 1,
    width: '100%',

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
