import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/AppTheme";

interface Props {
  texto: string;
  color?: string;
  esAncho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({
  texto,
  color = "#2d2d2d",
  esAncho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: esAncho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === "#9b9b9b" ? "black" : "white",
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
