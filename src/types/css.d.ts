declare module '*.css' {
  const classes: { [className: string]: string } // css-moduleの結果をstring型のobjectに
  export default classes
}
