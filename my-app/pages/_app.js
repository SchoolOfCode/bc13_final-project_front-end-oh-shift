import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  //make a state light mode - dark set to true 
  //pass down state and setstate to where the button is passed 
  //state is passed in the single component that we want to toggle 
  //set state passed where the button is
  return <Component {...pageProps} />
}
