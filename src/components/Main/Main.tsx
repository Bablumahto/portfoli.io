import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import teeth1 from "../../assets/teeth1.svg";
import teeth2 from "../../assets/teeth2.svg";
import teeth3 from "../../assets/teeth3.svg";
import teeth4 from "../../assets/teeth4.svg";
import teeth5 from "../../assets/teeth5.svg";
import teeth6 from "../../assets/teeth6.svg";
import teeth8 from "../../assets/teeth8.svg";
import teeth9 from "../../assets/teeth9.svg";
import teeth10 from "../../assets/teeth10.svg";
import teeth11 from "../../assets/teeth11.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 300,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1300
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 30,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": teeth1,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth2,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth3,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth4,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth8,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth5,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth9,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth6,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth1,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth10,
                  "width": 30,
                  "height": 30
                },
                {
                  "src": teeth6,
                  "width": 30,
                  "height": 30
                },
                // {
                //   "src": vscodeIcon,
                //   "width": 30,
                //   "height": 30
                // },
                {
                  "src": teeth11,
                  "width": 30,
                  "height": 30
                },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}