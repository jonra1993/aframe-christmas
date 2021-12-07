// @ts-nocheck
import React from 'react'
import "aframe";
import "aframe-environment-component"
import "aframe-particle-system-component"
import "aframe-extras"


interface IIAframe {
  IAframe: string;
}
/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const IAframe = (props: IIAframe) => {

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      raycaster="far: 22; objects: [link], .clickable; interval: 500"
      cursor="rayOrigin: mouse"
    >

      <a-assets timeout="3000">
        {/* <img id="sky1" crossOrigin="anonymous" src={"https://cideo-christmas.s3.us-east-2.amazonaws.com/images/aurora.jpg"} />
          <a-asset-item id="screen" src={"https://cideo-christmas.s3.us-east-2.amazonaws.com/models/pantalla1.glb"}></a-asset-item>
           */}
        <a-asset-item id="christmas_gifts" src={"/models/stack-of-christmas-gifts/scene.gltf"}></a-asset-item>
        <a-asset-item id="christmas_tree_polycraft" src={"/models/christmas_tree_polycraft/scene.gltf"}></a-asset-item>
        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg"></img>
        <img id="skyTexture" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"></img>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"></img>
        <video id="videoPlayer" autoPlay muted preload='auto' crossOrigin="anonymous" loop src='https://res.cloudinary.com/dnv0qwkrk/video/upload/v1607400899/Marry_Cristmas_kcebe2.mp4' type="video/mp4" />
        <audio id="river" src="https://res.cloudinary.com/dnv0qwkrk/video/upload/v1638850843/aframe/MonacoLorenzo_-_Feliz_Navidad_mp3cut.net_1_retzhi.mp3" preload="auto"></audio>
      </a-assets>

      <a-entity environment="preset: tron; fog: 0; skyType: gradient; groundColor: #8a8a8a; skyColor: #672A6C; horizonColor: #265699; lightPosition: 1 5 -2; dressing: none"></a-entity>
      <a-entity sound="src: #river; autoplay: true"></a-entity>

      <a-entity
        raycaster="far: 22; objects: .clickable; interval: 200"
        cursor="rayOrigin: mouse"
      />

      <a-text
        text={`value: Feliz Navidad Jonathan; color: #EEE`}
        font='/fonts/OpenSans-SemiboldItalic-msdf.json'
        negate="false"
        font-image='/fonts/OpenSans-SemiboldItalic.png'
        position="0 50 -10"
        rotation="13.212 0 0"
        scale="22 20 33.954"
        align="center"
      ></a-text>

      <a-entity
        gltf-model="url(/models/santa/scene.gltf)"
        scale="8 8 8"
        position="7.787 0.212 10.965"
        rotation="0 -45.646 0"
        animation-mixer="clip: mixamo.com"
      ></a-entity>

      <a-gltf-model
        id="christmas_gifts"
        src="#christmas_gifts"
        scale="1 1 1"
        position="20.373 0.860 2.326"
        rotation="0 -45.646 0">
      </a-gltf-model>


      <a-entity
      >
        {/* <a-gltf-model
                        id="scree1"
                        src="#screen"
                        scale="0.01 0.012 0.01"
                        position="0.095 0 -13"
                        rotation="0 -90 0">
                    </a-gltf-model> */}
        <a-video
          src="#videoPlayer"
          scale="45 25 10"
          position="0 25 -10"
        />

      </a-entity>

      <a-gltf-model
        id="christmas_tree_polycraft"
        src="#christmas_tree_polycraft"
        scale="0.06 0.06 0.06"
        position="-16 0 7.9"
        rotation="0 53 0"
      />

      <a-light type="ambient" color="#FFFFFF"></a-light>
      <a-entity rotation="0 0 0">
        <a-camera look-controls="magicWindowTrackingEnabled:false" position="0 17 50" />
      </a-entity>

    </a-scene>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IAframe