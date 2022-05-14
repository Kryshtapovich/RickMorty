import React, { useState } from "react";

import { Text, SafeAreaView, View } from "react-native";

import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Input } from "@components/atoms";
import { LoadingModal } from "@components/moleculas/modals";
import { useOrientation } from "@hooks";
import { Color, Screen, signIn, signUp } from "@utils";

import { styles } from "./styles";

interface FormModel {
  email: string;
  password: string;
  userName: string;
}

const initialValues: FormModel = { userName: "", email: "", password: "" };

const placeholders = ["Username", "Email", "Password"];

export function LoginScreen(
  props: BottomTabScreenProps<ParamListBase, Screen.LOGIN>
) {
  const { navigation } = props;

  const [model, setModel] = useState<FormModel>(initialValues);
  const updateModel = (field: keyof FormModel, data: string) => {
    setModel({ ...model, [field]: data });
  };

  const [isLogin, setIsLogin] = useState(true);
  const reset = () => {
    setModel(initialValues);
    setError(undefined);
    resetForm();
  };

  const toggle = () => {
    setIsLogin(!isLogin);
    reset();
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password should have at least 8 symbols")
      .required("Password is required")
  });

  const signUpSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required")
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = (model: FormModel) => {
    const { userName, email, password } = model;
    setIsLoading(true);
    (isLogin ? signIn(email, password) : signUp(userName, email, password))
      .then(() => {
        setIsLoading(false);
        navigation.navigate(Screen.CHARACTERS);
        reset();
      })
      .catch(
        ({ nativeErrorMessage }: FirebaseAuthTypes.NativeFirebaseAuthError) => {
          setIsLoading(false);
          setError(nativeErrorMessage);
        }
      );
  };

  const { handleChange, handleSubmit, errors, resetForm } = useFormik({
    onSubmit,
    initialValues,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    validationSchema: isLogin ? signInSchema : signInSchema.concat(signUpSchema)
  });

  const inputs = Object.keys(model).map((key, i) => {
    const modelKey = key as keyof FormModel;
    return (
      <Input
        key={i}
        style={styles.input}
        value={model[modelKey]}
        error={errors[modelKey]}
        placeholder={placeholders[i]}
        placeholderTextColor={Color.GRAY}
        onChangeText={(text) => {
          handleChange(key)(text);
          updateModel(modelKey, text);
        }}
      />
    );
  });

  const { isPortrait } = useOrientation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.form, { width: isPortrait ? "85%" : "60%" }]}>
        <Text style={styles.title}>{isLogin ? "Login" : "Registration"}</Text>
        {!isLogin && inputs[0]}
        {inputs.slice(1)}
        <Text style={styles.redirectText} onPress={toggle}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <Button
          style={styles.button}
          onPress={handleSubmit}
          text={isLogin ? "Sign In" : "Sign Up"}
        />
      </View>
      {isLoading && <LoadingModal />}
    </SafeAreaView>
  );
}
