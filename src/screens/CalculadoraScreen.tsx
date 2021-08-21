import { Text, View } from "react-native";
import { BotonCalculadora } from "../components/BotonCalculadora";
import { styles } from "../theme/AppTheme";
import { useCalculadora } from "../hooks/useCalculadora";
import React from "react";

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    botonSumar,
    botonDel,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    armarNumero,
    calcular,
    positivoNegativo,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== "0" && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalculadora color='#9b9b9b' texto='C' accion={limpiar} />
        <BotonCalculadora
          color='#9b9b9b'
          texto='+/-'
          accion={positivoNegativo}
        />
        <BotonCalculadora color='#9b9b9b' texto='Del' accion={botonDel} />
        <BotonCalculadora color='#ff9427' texto='/' accion={botonDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto='7' accion={armarNumero} />
        <BotonCalculadora texto='8' accion={armarNumero} />
        <BotonCalculadora texto='9' accion={armarNumero} />
        <BotonCalculadora color='#ff9427' texto='*' accion={botonMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto='4' accion={armarNumero} />
        <BotonCalculadora texto='5' accion={armarNumero} />
        <BotonCalculadora texto='6' accion={armarNumero} />
        <BotonCalculadora color='#ff9427' texto='-' accion={botonRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto='1' accion={armarNumero} />
        <BotonCalculadora texto='2' accion={armarNumero} />
        <BotonCalculadora texto='3' accion={armarNumero} />
        <BotonCalculadora color='#ff9427' texto='+' accion={botonSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto='0' esAncho accion={armarNumero} />
        <BotonCalculadora texto='.' accion={armarNumero} />
        <BotonCalculadora color='#ff9427' texto='=' accion={calcular} />
      </View>
    </View>
  );
};
