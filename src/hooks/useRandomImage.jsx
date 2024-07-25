// src/hooks/useRandomImage.jsx
import { useState, useEffect } from 'react';

// Custom hook para obtener imágenes aleatorias de una lista de 5 
const useRandomImage = (images, interval) => {
  // Estado para almacenar la imagen actual
  const [currentImage, setCurrentImage] = useState(images[0]); // Inicializa con la primera imagen de la lista

  useEffect(() => {
    // Función para cambiar la imagen actual aleatoriamente //lógica de efecto 
    const changeImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length); // Genera un índice aleatorio basado en la longitud de la lista de imágenes
      setCurrentImage(images[randomIndex]); // Establece la imagen actual utilizando el índice aleatorio
    };

    // Configura un intervalo para cambiar la imagen cada cierto intervalo de tiempo especificado
    const intervalId = setInterval(changeImage, interval);

    // Limpia el intervalo cuando el componente se desmonta o cuando cambian las dependencias (images, interval)
    return () => clearInterval(intervalId);
  }, [images, interval]); // Ejecuta el efecto cuando cambian las imágenes o el intervalo

  // Retorna la imagen actual para que pueda ser utilizada en el componente que llama a este hook
  return currentImage;
};

export default useRandomImage;
