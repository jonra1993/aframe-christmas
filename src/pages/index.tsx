import * as React from "react"
import Iframe from "../components/Iframe"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const demos = {
  soundcloud:
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',

  saturday:
    '<iframe id="exampleIframe" class="example__iframe" width="100%" height="600" allowfullscreen="yes" scrolling="no" allowvr="yes" src="https://aframe.io/a-saturday-night/"></iframe>',
  jrtec:
    '<iframe src="https://www.jrtec.io" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
  aframe:
    '<iframe id="exampleIframe" class="example__iframe" width="100%" height="600" allowfullscreen="yes" scrolling="no" allowvr="yes" src="https://aframe.io/aframe/examples/boilerplate/hello-world/"></iframe>'
};


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Hello</title>      
      <Iframe iframe={demos["saturday"]} />
    </main>
  )
}

export default IndexPage
