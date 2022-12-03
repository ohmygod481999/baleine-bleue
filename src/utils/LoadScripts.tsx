import Script from "next/script"
import { useState } from "react"

interface Props {
  srcs: string[]
}
function LoadScripts(props: Props) {
  const { srcs } = props
  const [scripts, setScripts] = useState(
    srcs.map((src, i) => ({
      src,
      start: i === 0 ? true : false, // First Script run at the beginning
    }))
  )

  return (
    <>
      {scripts.map(
        (script, i) => {
          if (script.start) {
            return (
              <Script
                key={i}
                src={script.src}
                strategy="afterInteractive"
                onLoad={() => {
                  console.log("loaded script");
                  setScripts(
                    scripts.map((s, j) => {
                      if (j === i + 1) {
                        return {
                          ...s,
                          start: true,
                        }
                      }
                      return s
                    })
                  )
                }}
              />
            )
          }
        }
        // done script,
      )}
    </>
  )
}

export default LoadScripts
