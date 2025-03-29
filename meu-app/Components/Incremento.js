import React, { useState } from "react";
import { View, Button } from "react-native";

const Incremento = () => {
    const [contador, setContador] = useState(0);

    return (
        <View>
            <div>
                <p>Contagem: {contador}</p>
                <Button
                    onPress={() => setContador(contador + 1)}
                    title="Incrementar"
                    
                />

                <Button
                    onPress={() => setContador(contador -1)}
                    title="Decremento"
                
                />

            </div>
        </View>
    );
};

export default Incremento;