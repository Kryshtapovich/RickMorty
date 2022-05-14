import React, { useState } from "react";

import { Alert, Image, Pressable, SafeAreaView, View } from "react-native";

import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { ImagePickerResponse } from "react-native-image-picker";
import * as Yup from "yup";

import { Button, Input } from "@components/atoms";
import { LoadingModal, PhotoModal } from "@components/moleculas/modals";
import { useOrientation } from "@hooks";
import { useStore } from "@mobx/stores";
import { Color, signOut, updateUser } from "@utils";

import { baseStyles, landscapeStyles } from "./styles";

export const ProfileScreen = observer(() => {
  const { userStore } = useStore();
  const { user, setUser } = userStore;

  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => setIsModalShown(!isModalShown);

  const [photo, setPhoto] = useState<string>();
  const choosePhoto = (photo: ImagePickerResponse) => {
    const { assets } = photo;
    assets && setPhoto(assets[0].uri);
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = ({ displayName }: { displayName: string | null }) => {
    setIsLoading(true);
    const photoURL = photo?.slice(7) || null;
    updateUser({ displayName, photoURL })?.then(() => {
      user && setUser({ ...user, displayName, photoURL });
      Alert.alert("Data successfully updated");
      setIsLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required("Username is required")
  });

  const { handleSubmit, handleChange, errors } = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    initialValues: { displayName: user?.displayName || null }
  });

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? baseStyles : landscapeStyles;

  const getPhoto = () => {
    if (photo) return { uri: photo };
    return user?.photoURL ? { uri: user.photoURL } : require("@assets/placeholder.png");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable onPress={toggleModal} style={styles.image}>
        <Image source={getPhoto()} style={styles.image} />
      </Pressable>
      <View style={styles.form}>
        <Input
          style={styles.input}
          placeholder="Username"
          error={errors.displayName}
          placeholderTextColor={Color.GRAY}
          onChangeText={handleChange("displayName")}
          defaultValue={user?.displayName || undefined}
          inputStyle={{ backgroundColor: Color.TRANSPARENT_CYAN }}
        />
        <View style={styles.buttons}>
          <Button
            text="Update"
            onPress={handleSubmit}
            style={[styles.button, styles.updateButton]}
          />
          <Button text="Sign Out" onPress={signOut} style={styles.button} />
        </View>
      </View>
      <PhotoModal isShown={isModalShown} toggle={toggleModal} choosePhoto={choosePhoto} />
      {isLoading && <LoadingModal />}
    </SafeAreaView>
  );
});
