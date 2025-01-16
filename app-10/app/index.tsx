import { CameraView, CameraType, FlashMode, useCameraPermissions } from 'expo-camera';
import { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState<string | null>(null);
  const [flashState, setFlashState] = useState<FlashMode>('off');

  const cameraRef = useRef<CameraView | null>(null);

  useEffect(() => {
    const requestMediaPermission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'We need access to your media library to save the photo.');
      }
    };

    requestMediaPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync();
        if (picture) {
          setImage(picture.uri);
        }
      } catch (err) {
        console.log('Error while taking the picture : ', err);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);

        Alert.alert('Photo saved!', `Photo saved to library: ${assetInfo.uri}`);

        setImage(null);
        getLastSavedImage();
      } catch (err) {
        console.log('Error while saving the picture : ', err);
        Alert.alert('Error', 'Failed to save the picture.');
      }
    }
  };
  const discartPicture = async () => {
    setImage(null);
  };

  const getLastSavedImage = async () => {
    const assets = await MediaLibrary.getAssetsAsync({
      first: 1,
      sortBy: [[MediaLibrary.SortBy.creationTime, false]],
    });
    if (assets.totalCount > 0) {
      const lastAsset = assets.assets[0];
      console.log('Last saved image URI: ', lastAsset.uri);
    }
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <>
          <CameraView
            style={styles.camera}
            zoom={0} facing={facing}
            flash={flashState}
            animateShutter={false}
            enableTorch={false}
            ref={cameraRef}
          >
            <View style={styles.topBar}>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { if (flashState === 'on') { setFlashState('off') } else { setFlashState('on') } }}>
                <Ionicons name={flashState === 'on' ? 'flash' : 'flash-off'} size={40} color="white" />
              </TouchableOpacity>
            </View>
          </CameraView>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.printButton} onPress={takePicture}>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.camera} />
          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={savePicture}>
              <Ionicons name="save" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={discartPicture}>
              <Ionicons name="trash" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  printButton: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 999,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 4,
  },
});