/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    StyleSheet,
    Text,
    Platform,
    View,
    LogBox
} from 'react-native';
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { DangerLoader } from "../../components";

import Canvas from 'react-native-canvas';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
const initialiseTensorflow = async () => {
    await tf.ready();
    tf.getBackend();
}


const CameraView = () => {
    const [hasPermission, setHasPermission] = useState < null | boolean > (null);
    const [net, setNet] = useState < mobilenet.MobileNet > ();
    const [model, setModel] = useState < cocoSsd.ObjectDetection > ();
    let context = useRef < CanvasRenderingContext2D > ();
    let canvas = useRef < Canvas > ();
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
    const { width, height } = Dimensions.get("window");
    const handleCameraStream = (images: IterableIterator<tf.Tensor3D>) => {
        const loop = async () => {
            if (net) {
                if (frame % computeRecognitionEveryNFrames === 0) {
                    const nextImageTensor = images.next().value;
                    if (nextImageTensor || model || model.detect != undefined) {
                        // const objects = await net.classify(nextImageTensor);
                        // console.log(objects.map(object => object.className));
                        // tf.dispose([nextImageTensor]);
                        model.detect(nextImageTensor).then((prediction) => {
                            console.log("🚀 ~ file: App.js ~ line 60 ~ cocoSsd.ObjectDetection.detect ~ prediction", prediction)

                            drawRectange(prediction, nextImageTensor)
                        })
                    } else {
                        alert("Please Try agian to scan again")
                    }
                }
                frame += 1;
                frame = frame % computeRecognitionEveryNFrames;
            }

            requestAnimationFrame(loop);
        }
        loop();
    }

    function drawRectange(predictions: cocoSsd.DetectedObject[], nextImageTensor: any) {
        if (!context.current || !canvas.current) return;

        const scaleWidth = width / nextImageTensor.shape[1];
        const scaleHeight = height / nextImageTensor.shape[0];

        const flipHorizontal = Platform.OS == 'ios' ? false : true;

        context.current.clearRect(0, 0, width, height);

        for (const prediction of predictions) {
            const [x, y, width, height] = prediction.bbox;

            const boundingBoxX = flipHorizontal ? canvas.current.width - x * scaleWidth - width * scaleWidth : x * scaleWidth;
            const boundingBoyY = y * scaleHeight;

            context.current.strokeRect(
                boundingBoxX,
                boundingBoyY,
                width * scaleWidth,
                height * scaleHeight
            );
            context.current.strokeText(
                prediction.class,
                boundingBoxX - 5,
                boundingBoyY - 5,
            );
        }

    }

    function handleCanvas(can: Canvas) {
        if (can) {
            can.width = width;
            can.height = height;
            const ctx: CanvasRenderingContext2D = can.getContext('2d');
            ctx.strokeStyle = 'red'
            ctx.fillStyle = 'red'
            ctx.lineWidth = 3
            context.current = ctx;
            canvas.current = can;

        }
    }

    useEffect(() => {
        LogBox.ignoreAllLogs();
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');

            // initialise Tensorflow
            await initialiseTensorflow();
            // load the model
            setNet(await mobilenet.load());
            await tf.ready();
            setModel(await cocoSsd.load())

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
                {/* <Text style={styles.sectionTitle}>Camera View</Text> */}
                <DangerLoader />
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
                <Canvas style={styles.canvas} ref={handleCanvas} />
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
        fontSize: 20,
        color: colors.black,
        textAlign: 'center',
        fontFamily: fonts.medium,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '300',
    },
    canvas: {
        position: "absolute",
        zIndex: 10000000,
        width: '100%',
        height: '100%',

    }
});

export default CameraView;
// import React from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
// } from 'react-native';
// import * as Assets from '../../../assets/utils/Assets'
// import colors from '../../styles/colors';
// import fonts from '../../styles/fonts';
// export default function CameraView(props) {
//     return (
//         <View style={styles.contentView}>
//             <Text style={styles.tavelText}>CameraView</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     contentView: {
//         flex: 1,
//         width: "100%",
//         alignItems: "center",
//         justifyContent: 'center',
//         backgroundColor: colors.white
//     },
//     tavelText: {
//         fontSize: 32,
//         fontFamily: fonts.medium,
//         color: colors.black,
//     },
// })
