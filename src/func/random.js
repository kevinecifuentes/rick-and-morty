// Función que me retorna un número random entre 0 y 126

export const getRandomDimension = () => {
  return Math.floor(Math.random() * 126) + 1
}
