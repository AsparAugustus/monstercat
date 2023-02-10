import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import {displayTrack} from 'components/tracklist'
import { LoremIpsum } from "lorem-ipsum";

import { useEffect } from 'react'






const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  useEffect(() => {


  }, [])

  const lorem_result = lorem.generateWords(2)

  



  return (

    <>
    <div className="header">
      <div className="grid-container first" style={{ overflow: "hidden" }}>
        <div className="grid-container under"></div>
        <div className="left-column">
          <div className="left-column top">
            <div style={{ color: "lightgreen", fontSize: 18 }}>Into the void</div>
            <div style={{ color: "white" }}>Released 10th Oct 2010</div>
          </div>
        </div>
        <div className="middle-column top">
          <div
            className="grid"
            style={{ gridTemplateColumns: "50% 50%", height: "30%" }}
          ></div>
          <div
            className="grid"
            style={{ gridTemplateColumns: "50% 50%", height: "70%" }}
          >
            <div style={{ overflow: "hidden", marginBottom: 60 }}>
              <img
                src="/albumcover.jpg"
                style={{ position: "relative", height: "70vh", width: "36vw" }}
              />
            </div>
            <div>
              <div
                className="grid-inner"
                style={{ gridTemplateRows: "20% 15% 15%" }}
              >
                <div className="albumname">08:19 27</div>
                <div className="artistname">Way Out</div>
                <div
                  style={{
                    marginTop: "30%",
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 10
                  }}
                >
                  <button className="button-6" role="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(255, 255, 255, 1)",
                        transform: ""
                        
                      }}
                    >
                      <path d="M7 6v12l10-6z" />
                    </svg>
                    Listen now
                  </button>
                  <button
                    className="button-6"
                    role="button"
                    style={{
                      borderColor: "white",
                      border: 2,
                      backgroundColor: "rgba(255, 255, 255, 0)"
                    }}
                  >
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column top">
          <div className="right-column top inner">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={33}
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(253, 253, 253, 1)",
                  transform: ""
                  
                }}
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </div>
            <div>
              <div className="right-column inner">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                    <circle cx="16.806" cy="7.207" r="1.078" />
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z" />
                    <path d="M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="grid-container">
        <div className="left-column"></div>
        <div className="middle-column">
          <div className="grid-container hero">
            <div>
              <div className="herotitle">STREAM IT YOUR WAY</div>
              <div className="grid-container belowhero">
                <div className="stream-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
                  </svg>
                </div>
                <div className="stream-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z" />
                  </svg>
                </div>
                <div className="stream-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                  </svg>
                </div>
                <div className="stream-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    height={33}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(253, 253, 253, 1)",
                      transform: ""
                      
                    }}
                  >
                    <path d="M2.971 12.188c-.041 0-.078.038-.083.082l-.194 1.797.194 1.756c.005.049.042.082.083.082s.075-.033.084-.082l.211-1.756-.225-1.797c0-.046-.037-.082-.074-.082m-.75.691c-.051 0-.076.03-.088.079l-.138 1.109.138 1.092c0 .046.037.078.075.078.039 0 .073-.038.087-.087l.176-1.1-.176-1.112c0-.051-.037-.076-.075-.076m1.526-1.025c-.052 0-.1.039-.1.087l-.176 2.139.188 2.051c0 .049.037.1.099.1.052 0 .089-.051.102-.1l.211-2.064-.211-2.126c-.013-.049-.052-.1-.102-.1m.79-.075c-.063 0-.114.051-.126.113l-.161 2.201.177 2.123c.012.063.061.114.122.114.064 0 .113-.051.125-.124l.201-2.113-.201-2.187a.11.11 0 0 0-.111-.112l-.026-.015zm.962.301a.128.128 0 0 0-.133-.125.134.134 0 0 0-.137.125l-.182 2.026.169 2.138a.13.13 0 0 0 .132.131c.062 0 .123-.055.123-.132l.189-2.139-.189-2.036.028.012zm.674-1.426a.154.154 0 0 0-.148.15l-.176 3.3.156 2.139c0 .077.066.137.15.137.078 0 .145-.074.15-.15l.174-2.137-.173-3.313c-.007-.088-.074-.152-.15-.152m.8-.762a.178.178 0 0 0-.17.163l-.15 4.063.138 2.125c0 .1.075.174.163.174.086 0 .161-.074.174-.174l.162-2.125-.161-4.052c-.013-.1-.088-.175-.175-.175m.826-.372c-.102 0-.176.073-.188.173l-.139 4.4.139 2.102c.012.1.086.188.188.188a.193.193 0 0 0 .187-.188l.163-2.102-.164-4.4c0-.1-.087-.188-.188-.188m1.038.038a.196.196 0 0 0-.199-.199.205.205 0 0 0-.201.199l-.125 4.538.124 2.089c.015.111.101.199.214.199s.201-.088.201-.199l.136-2.089-.136-4.55-.014.012zm.625-.111c-.113 0-.213.1-.213.211l-.125 4.439.125 2.063c0 .125.1.213.213.213a.221.221 0 0 0 .214-.224l.125-2.064-.14-4.428c0-.122-.1-.225-.225-.225m.838.139a.236.236 0 0 0-.237.237l-.086 4.29.113 2.063c0 .124.1.231.236.231.125 0 .227-.1.237-.237l.101-2.038-.112-4.265c-.01-.137-.113-.238-.237-.238m.988-.786a.27.27 0 0 0-.139-.037c-.05 0-.1.013-.137.037a.25.25 0 0 0-.125.214v.05l-.086 5.044.096 2.043v.007c.006.05.024.112.06.15.05.051.12.086.196.086a.28.28 0 0 0 .175-.074.262.262 0 0 0 .076-.188l.013-.201.097-1.838-.113-5.075a.24.24 0 0 0-.111-.199l-.002-.019zm.837-.457a.155.155 0 0 0-.124-.052.283.283 0 0 0-.174.052.265.265 0 0 0-.1.201v.023l-.114 5.513.063 1.014.052.988a.274.274 0 0 0 .548-.012l.125-2.013-.125-5.536a.273.273 0 0 0-.138-.231m7.452 3.15c-.336 0-.663.072-.949.193a4.34 4.34 0 0 0-5.902-3.651c-.188.075-.227.151-.238.301v7.812a.31.31 0 0 0 .275.29h6.827a2.428 2.428 0 0 0 2.45-2.438 2.457 2.457 0 0 0-2.45-2.463" />
                  </svg>
                </div>
              </div>
              <div className="herotitle">TRACK LIST</div>
              <div className="grid-tracklist" id="tracklist">
                    <>
                      {
                        (()=>{ 
                          const arr = [];
                          for(let i = 1; i < 12; i++) {
                            arr.push(
                              displayTrack(i, lorem.generateWords(2), "Way Out", "2:12")
                            )
                          }

                          return arr

                        })()
                    }
                    </>


              </div>
            </div>
          </div>
        </div>
        <div className="right-column">Right column</div>
      </div>
    </div>
    <div className="footer">
      <div className="grid-container">
        <div className="left-column">Footer Left column</div>
        <div className="middle-column">Middle column</div>
        <div className="right-column">Right column</div>
      </div>
    </div>
  </>
  

  )
}
