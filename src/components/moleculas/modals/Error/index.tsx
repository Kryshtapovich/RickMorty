import React, { useEffect, useState } from "react";

import { Text } from "react-native";

import { Modal } from "@components/atoms";

import { styles } from "./styles";

interface Props {
  errorText?: string;
}

export function ErrorModal(props: Props) {
  const { errorText } = props;

  const [isModalShown, setIsModalShown] = useState<boolean>();
  const toggleModal = () => setIsModalShown(!isModalShown);

  useEffect(() => {
    setIsModalShown(!!errorText);
  }, [errorText]);

  return (
    <Modal isShown={!!isModalShown} toggle={toggleModal}>
      <Text style={styles.error}>{errorText}</Text>
    </Modal>
  );
}
