import React from "react";

import { Pressable, Text } from "react-native";

import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary
} from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Modal } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Color } from "@utils";

import { baseStyles, landscapelStyles } from "./styles";

interface Props {
  isShown: boolean;
  toggle: () => void;
  choosePhoto: (photo: ImagePickerResponse) => void;
}

export function PhotoModal(props: Props) {
  const { isShown, toggle, choosePhoto } = props;

  const takePhoto = () => {
    const options = {
      durationLimit: 1,
      saveToPhotos: false,
      cameraType: "front"
    };
    launchCamera(options as CameraOptions, choosePhoto).then(toggle);
  };

  const chooseFromLibrary = () => {
    const options = {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 256,
      maxWidth: 256
    };
    launchImageLibrary(options as ImageLibraryOptions, choosePhoto).then(
      toggle
    );
  };

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? baseStyles : landscapelStyles;

  return (
    <Modal
      isShown={isShown}
      toggle={toggle}
      style={[styles.modal, !isPortrait && { width: "50%" }]}
    >
      <Pressable style={styles.button} onPress={takePhoto}>
        <Icon size={60} name="add-a-photo" color={Color.BLACK} />
        <Text style={styles.text}>Take a photo</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={chooseFromLibrary}>
        <Icon size={60} name="photo-library" color={Color.BLACK} />
        <Text style={styles.text}>Choose from photos</Text>
      </Pressable>
    </Modal>
  );
}
