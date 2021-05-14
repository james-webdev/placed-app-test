import React from "react";

function Cycle() {
  return (
    <svg width="300" height="85" fill="none" viewBox="0 0 360 85">
      <rect width="360" height="85" fill="#FBBF26" rx="8"></rect>
      <path
        fill="#000"
        d="M104.524 35.216c-1.284 0-2.448-.276-3.492-.828a6.416 6.416 0 01-2.448-2.322c-.588-.996-.882-2.118-.882-3.366 0-1.248.294-2.364.882-3.348a6.242 6.242 0 012.448-2.322c1.044-.564 2.214-.846 3.51-.846 1.092 0 2.076.192 2.952.576a5.915 5.915 0 012.232 1.656l-1.872 1.728c-.852-.984-1.908-1.476-3.168-1.476-.78 0-1.476.174-2.088.522a3.647 3.647 0 00-1.44 1.422c-.336.612-.504 1.308-.504 2.088s.168 1.476.504 2.088a3.773 3.773 0 001.44 1.44c.612.336 1.308.504 2.088.504 1.26 0 2.316-.498 3.168-1.494l1.872 1.728a5.835 5.835 0 01-2.232 1.674c-.888.384-1.878.576-2.97.576zm16.585-9.9l-4.374 10.278c-.444 1.116-.996 1.902-1.656 2.358-.648.456-1.434.684-2.358.684a4.916 4.916 0 01-1.494-.234c-.492-.156-.894-.372-1.206-.648l1.026-1.998a2.438 2.438 0 001.584.612c.384 0 .696-.096.936-.288.24-.18.456-.486.648-.918l.036-.09-4.194-9.756h2.898l2.718 6.57 2.736-6.57h2.7zm5.562 9.828c-1.032 0-1.962-.21-2.79-.63a4.929 4.929 0 01-1.926-1.782c-.456-.756-.684-1.614-.684-2.574 0-.96.228-1.818.684-2.574a4.8 4.8 0 011.926-1.764c.828-.432 1.758-.648 2.79-.648 1.02 0 1.908.216 2.664.648a3.734 3.734 0 011.674 1.818l-2.178 1.17c-.504-.888-1.23-1.332-2.178-1.332-.732 0-1.338.24-1.818.72s-.72 1.134-.72 1.962c0 .828.24 1.482.72 1.962s1.086.72 1.818.72c.96 0 1.686-.444 2.178-1.332l2.178 1.188c-.348.768-.906 1.368-1.674 1.8-.756.432-1.644.648-2.664.648zm5.885-13.5h2.808V35h-2.808V21.644zm14.9 8.55c0 .036-.018.288-.054.756h-7.326c.132.6.444 1.074.936 1.422.492.348 1.104.522 1.836.522.504 0 .948-.072 1.332-.216a3.345 3.345 0 001.098-.72l1.494 1.62c-.912 1.044-2.244 1.566-3.996 1.566-1.092 0-2.058-.21-2.898-.63-.84-.432-1.488-1.026-1.944-1.782-.456-.756-.684-1.614-.684-2.574 0-.948.222-1.8.666-2.556a4.726 4.726 0 011.854-1.782c.792-.432 1.674-.648 2.646-.648.948 0 1.806.204 2.574.612a4.393 4.393 0 011.8 1.764c.444.756.666 1.638.666 2.646zm-5.022-2.898c-.636 0-1.17.18-1.602.54-.432.36-.696.852-.792 1.476h4.77c-.096-.612-.36-1.098-.792-1.458-.432-.372-.96-.558-1.584-.558zm18.235 7.236a3 3 0 01-1.026.468 5.333 5.333 0 01-1.26.144c-1.152 0-2.046-.294-2.682-.882-.624-.588-.936-1.452-.936-2.592v-3.978h-1.494v-2.16h1.494v-2.358h2.808v2.358h2.412v2.16h-2.412v3.942c0 .408.102.726.306.954.216.216.516.324.9.324.444 0 .822-.12 1.134-.36l.756 1.98zm5.885.612c-1.02 0-1.938-.21-2.754-.63a4.829 4.829 0 01-1.89-1.782c-.456-.756-.684-1.614-.684-2.574 0-.96.228-1.818.684-2.574a4.702 4.702 0 011.89-1.764c.816-.432 1.734-.648 2.754-.648s1.932.216 2.736.648a4.702 4.702 0 011.89 1.764c.456.756.684 1.614.684 2.574 0 .96-.228 1.818-.684 2.574a4.829 4.829 0 01-1.89 1.782c-.804.42-1.716.63-2.736.63zm0-2.304c.72 0 1.308-.24 1.764-.72.468-.492.702-1.146.702-1.962 0-.816-.234-1.464-.702-1.944-.456-.492-1.044-.738-1.764-.738s-1.314.246-1.782.738c-.468.48-.702 1.128-.702 1.944 0 .816.234 1.47.702 1.962.468.48 1.062.72 1.782.72zm27.837-7.524L190.881 35h-2.7l-2.178-6.012-2.25 6.012h-2.7l-3.492-9.684h2.646l2.286 6.552 2.376-6.552h2.376l2.304 6.552 2.358-6.552h2.484zm5.65 9.828c-1.02 0-1.938-.21-2.754-.63a4.829 4.829 0 01-1.89-1.782c-.456-.756-.684-1.614-.684-2.574 0-.96.228-1.818.684-2.574a4.702 4.702 0 011.89-1.764c.816-.432 1.734-.648 2.754-.648s1.932.216 2.736.648a4.702 4.702 0 011.89 1.764c.456.756.684 1.614.684 2.574 0 .96-.228 1.818-.684 2.574a4.829 4.829 0 01-1.89 1.782c-.804.42-1.716.63-2.736.63zm0-2.304c.72 0 1.308-.24 1.764-.72.468-.492.702-1.146.702-1.962 0-.816-.234-1.464-.702-1.944-.456-.492-1.044-.738-1.764-.738s-1.314.246-1.782.738c-.468.48-.702 1.128-.702 1.944 0 .816.234 1.47.702 1.962.468.48 1.062.72 1.782.72zm9.869-6.246a3.13 3.13 0 011.35-1.062c.576-.24 1.236-.36 1.98-.36v2.592a10.134 10.134 0 00-.63-.036c-.804 0-1.434.228-1.89.684-.456.444-.684 1.116-.684 2.016V35h-2.808v-9.684h2.682v1.278zm9.157 4.608l-1.35 1.332V35h-2.808V21.644h2.808v7.56l4.104-3.888h3.348l-4.032 4.104 4.392 5.58h-3.402l-3.06-3.798zm16.081 3.942c-.804 0-1.59-.096-2.358-.288-.768-.204-1.38-.456-1.836-.756l.936-2.016c.432.276.954.504 1.566.684a6.782 6.782 0 001.8.252c1.188 0 1.782-.294 1.782-.882 0-.276-.162-.474-.486-.594-.324-.12-.822-.222-1.494-.306-.792-.12-1.446-.258-1.962-.414a3.107 3.107 0 01-1.35-.828c-.372-.396-.558-.96-.558-1.692 0-.612.174-1.152.522-1.62.36-.48.876-.852 1.548-1.116.684-.264 1.488-.396 2.412-.396.684 0 1.362.078 2.034.234.684.144 1.248.348 1.692.612l-.936 1.998a5.588 5.588 0 00-2.79-.72c-.6 0-1.05.084-1.35.252-.3.168-.45.384-.45.648 0 .3.162.51.486.63.324.12.84.234 1.548.342.792.132 1.44.276 1.944.432.504.144.942.414 1.314.81.372.396.558.948.558 1.656 0 .6-.18 1.134-.54 1.602-.36.468-.888.834-1.584 1.098-.684.252-1.5.378-2.448.378zm10.984 0c-1.032 0-1.962-.21-2.79-.63a4.929 4.929 0 01-1.926-1.782c-.456-.756-.684-1.614-.684-2.574 0-.96.228-1.818.684-2.574a4.8 4.8 0 011.926-1.764c.828-.432 1.758-.648 2.79-.648 1.02 0 1.908.216 2.664.648a3.734 3.734 0 011.674 1.818l-2.178 1.17c-.504-.888-1.23-1.332-2.178-1.332-.732 0-1.338.24-1.818.72s-.72 1.134-.72 1.962c0 .828.24 1.482.72 1.962s1.086.72 1.818.72c.96 0 1.686-.444 2.178-1.332l2.178 1.188c-.348.768-.906 1.368-1.674 1.8-.756.432-1.644.648-2.664.648zm11.771-9.972c1.2 0 2.166.36 2.898 1.08.744.72 1.116 1.788 1.116 3.204V35h-2.808v-5.112c0-.768-.168-1.338-.504-1.71-.336-.384-.822-.576-1.458-.576-.708 0-1.272.222-1.692.666-.42.432-.63 1.08-.63 1.944V35h-2.808V21.644h2.808v4.68a3.638 3.638 0 011.35-.846 4.755 4.755 0 011.728-.306zm16.15 5.022c0 .036-.018.288-.054.756h-7.326c.132.6.444 1.074.936 1.422.492.348 1.104.522 1.836.522.504 0 .948-.072 1.332-.216a3.345 3.345 0 001.098-.72l1.494 1.62c-.912 1.044-2.244 1.566-3.996 1.566-1.092 0-2.058-.21-2.898-.63-.84-.432-1.488-1.026-1.944-1.782-.456-.756-.684-1.614-.684-2.574 0-.948.222-1.8.666-2.556a4.726 4.726 0 011.854-1.782c.792-.432 1.674-.648 2.646-.648.948 0 1.806.204 2.574.612a4.393 4.393 0 011.8 1.764c.444.756.666 1.638.666 2.646zm-5.022-2.898c-.636 0-1.17.18-1.602.54-.432.36-.696.852-.792 1.476h4.77c-.096-.612-.36-1.098-.792-1.458-.432-.372-.96-.558-1.584-.558zm19.294-2.124c1.212 0 2.172.36 2.88 1.08.72.708 1.08 1.776 1.08 3.204V35h-2.808v-5.112c0-.768-.162-1.338-.486-1.71-.312-.384-.762-.576-1.35-.576-.66 0-1.182.216-1.566.648-.384.42-.576 1.05-.576 1.89V35h-2.808v-5.112c0-1.524-.612-2.286-1.836-2.286-.648 0-1.164.216-1.548.648-.384.42-.576 1.05-.576 1.89V35h-2.808v-9.684h2.682v1.116a3.56 3.56 0 011.314-.936 4.52 4.52 0 011.728-.324c.684 0 1.302.138 1.854.414a3.22 3.22 0 011.332 1.17 3.989 3.989 0 011.494-1.17 4.803 4.803 0 011.998-.414zm16.068 5.022c0 .036-.018.288-.054.756h-7.326c.132.6.444 1.074.936 1.422.492.348 1.104.522 1.836.522.504 0 .948-.072 1.332-.216a3.345 3.345 0 001.098-.72l1.494 1.62c-.912 1.044-2.244 1.566-3.996 1.566-1.092 0-2.058-.21-2.898-.63-.84-.432-1.488-1.026-1.944-1.782-.456-.756-.684-1.614-.684-2.574 0-.948.222-1.8.666-2.556a4.726 4.726 0 011.854-1.782c.792-.432 1.674-.648 2.646-.648.948 0 1.806.204 2.574.612a4.393 4.393 0 011.8 1.764c.444.756.666 1.638.666 2.646zm-5.022-2.898c-.636 0-1.17.18-1.602.54-.432.36-.696.852-.792 1.476h4.77c-.096-.612-.36-1.098-.792-1.458-.432-.372-.96-.558-1.584-.558z"
      ></path>
      <path
        fill="#1A191D"
        d="M108.474 58.55h-5.208L102.188 61h-1.442l4.438-9.8h1.386l4.452 9.8h-1.47l-1.078-2.45zm-.49-1.12l-2.114-4.802-2.114 4.802h4.228zm10.487-3.85L115.223 61h-1.372l-3.248-7.42h1.4l2.548 5.95 2.604-5.95h1.316zm3.724-.07c1.026 0 1.81.252 2.352.756.55.504.826 1.255.826 2.254V61h-1.274v-.98a2.162 2.162 0 01-.966.798c-.411.177-.901.266-1.47.266-.831 0-1.498-.2-2.002-.602-.495-.401-.742-.929-.742-1.582s.238-1.176.714-1.568c.476-.401 1.232-.602 2.268-.602h2.128v-.266c0-.579-.168-1.022-.504-1.33-.336-.308-.831-.462-1.484-.462-.439 0-.868.075-1.288.224-.42.14-.775.331-1.064.574l-.56-1.008c.382-.308.84-.541 1.372-.7a5.59 5.59 0 011.694-.252zm-.308 6.538c.513 0 .956-.112 1.33-.336.373-.233.644-.56.812-.98v-1.036h-2.072c-1.139 0-1.708.383-1.708 1.148 0 .373.144.667.434.882.289.215.69.322 1.204.322zm5.973-6.468h1.344V61h-1.344v-7.42zm.672-1.428a.92.92 0 01-.658-.252.838.838 0 01-.252-.616c0-.243.084-.448.252-.616a.894.894 0 01.658-.266c.261 0 .476.084.644.252.177.159.266.36.266.602a.878.878 0 01-.266.644.873.873 0 01-.644.252zm3.238-1.54h1.344V61h-1.344V50.612zm6.612 2.898c1.027 0 1.811.252 2.352.756.551.504.826 1.255.826 2.254V61h-1.274v-.98a2.162 2.162 0 01-.966.798c-.41.177-.9.266-1.47.266-.83 0-1.498-.2-2.002-.602-.494-.401-.742-.929-.742-1.582s.238-1.176.714-1.568c.476-.401 1.232-.602 2.268-.602h2.128v-.266c0-.579-.168-1.022-.504-1.33-.336-.308-.83-.462-1.484-.462-.438 0-.868.075-1.288.224-.42.14-.774.331-1.064.574l-.56-1.008c.383-.308.84-.541 1.372-.7a5.595 5.595 0 011.694-.252zm-.308 6.538c.514 0 .957-.112 1.33-.336.374-.233.644-.56.812-.98v-1.036h-2.072c-1.138 0-1.708.383-1.708 1.148 0 .373.145.667.434.882.29.215.691.322 1.204.322zm9.907-6.538c.719 0 1.363.159 1.932.476a3.37 3.37 0 011.33 1.33c.327.57.49 1.227.49 1.974 0 .747-.163 1.41-.49 1.988a3.37 3.37 0 01-1.33 1.33c-.569.317-1.213.476-1.932.476-.55 0-1.054-.107-1.512-.322a2.915 2.915 0 01-1.134-.938V61h-1.288V50.612h1.344V54.7a2.798 2.798 0 011.12-.882 3.486 3.486 0 011.47-.308zm-.112 6.398c.476 0 .901-.107 1.274-.322.383-.224.682-.532.896-.924.224-.401.336-.859.336-1.372 0-.513-.112-.966-.336-1.358a2.245 2.245 0 00-.896-.924 2.508 2.508 0 00-1.274-.322c-.466 0-.891.107-1.274.322a2.257 2.257 0 00-.896.924c-.214.392-.322.845-.322 1.358 0 .513.108.97.322 1.372.215.392.514.7.896.924.383.215.808.322 1.274.322zm5.721-9.296h1.344V61h-1.344V50.612zm10.617 6.72c0 .103-.01.238-.028.406h-6.02c.084.653.368 1.18.854 1.582.494.392 1.106.588 1.834.588.886 0 1.6-.299 2.142-.896l.742.868a3.24 3.24 0 01-1.26.896 4.31 4.31 0 01-1.666.308c-.784 0-1.48-.159-2.086-.476a3.537 3.537 0 01-1.414-1.358c-.327-.579-.49-1.232-.49-1.96 0-.719.158-1.367.476-1.946a3.469 3.469 0 011.33-1.344 3.781 3.781 0 011.918-.49c.709 0 1.339.163 1.89.49.56.317.994.765 1.302 1.344.317.579.476 1.241.476 1.988zm-3.668-2.688c-.644 0-1.186.196-1.624.588-.43.392-.682.905-.756 1.54h4.76c-.075-.625-.332-1.134-.77-1.526-.43-.401-.966-.602-1.61-.602zm13.466 5.922a2.091 2.091 0 01-.728.392 3.2 3.2 0 01-.896.126c-.747 0-1.326-.2-1.736-.602-.411-.401-.616-.975-.616-1.722v-4.074h-1.26V53.58h1.26v-1.624h1.344v1.624h2.128v1.106h-2.128v4.018c0 .401.098.71.294.924.205.215.494.322.868.322.41 0 .76-.117 1.05-.35l.42.966zm4.556.518c-.737 0-1.4-.163-1.988-.49a3.62 3.62 0 01-1.386-1.344c-.326-.579-.49-1.232-.49-1.96s.164-1.377.49-1.946A3.49 3.49 0 01176.573 54c.588-.327 1.251-.49 1.988-.49.738 0 1.396.163 1.974.49a3.392 3.392 0 011.372 1.344c.336.57.504 1.218.504 1.946s-.168 1.381-.504 1.96a3.514 3.514 0 01-1.372 1.344c-.578.327-1.236.49-1.974.49zm0-1.176c.476 0 .901-.107 1.274-.322.383-.224.682-.532.896-.924a2.86 2.86 0 00.322-1.372c0-.513-.107-.966-.322-1.358a2.245 2.245 0 00-.896-.924 2.508 2.508 0 00-1.274-.322c-.476 0-.905.107-1.288.322a2.375 2.375 0 00-.896.924c-.214.392-.322.845-.322 1.358 0 .513.108.97.322 1.372.224.392.523.7.896.924.383.215.812.322 1.288.322zm12.171-6.398c1.027 0 1.811.252 2.352.756.551.504.826 1.255.826 2.254V61h-1.274v-.98a2.162 2.162 0 01-.966.798c-.411.177-.901.266-1.47.266-.831 0-1.498-.2-2.002-.602-.495-.401-.742-.929-.742-1.582s.238-1.176.714-1.568c.476-.401 1.232-.602 2.268-.602h2.128v-.266c0-.579-.168-1.022-.504-1.33-.336-.308-.831-.462-1.484-.462-.439 0-.868.075-1.288.224-.42.14-.775.331-1.064.574l-.56-1.008c.383-.308.84-.541 1.372-.7a5.595 5.595 0 011.694-.252zm-.308 6.538c.513 0 .957-.112 1.33-.336.373-.233.644-.56.812-.98v-1.036h-2.072c-1.139 0-1.708.383-1.708 1.148 0 .373.145.667.434.882.289.215.691.322 1.204.322zm5.973-9.436h1.344V61h-1.344V50.612zm3.91 0h1.344V61h-1.344V50.612zm14.376 6.72c0 .103-.009.238-.028.406h-6.02c.084.653.369 1.18.854 1.582.495.392 1.106.588 1.834.588.887 0 1.601-.299 2.142-.896l.742.868a3.24 3.24 0 01-1.26.896 4.31 4.31 0 01-1.666.308c-.784 0-1.479-.159-2.086-.476a3.537 3.537 0 01-1.414-1.358c-.327-.579-.49-1.232-.49-1.96 0-.719.159-1.367.476-1.946a3.475 3.475 0 011.33-1.344 3.784 3.784 0 011.918-.49c.709 0 1.339.163 1.89.49.56.317.994.765 1.302 1.344.317.579.476 1.241.476 1.988zm-3.668-2.688c-.644 0-1.185.196-1.624.588-.429.392-.681.905-.756 1.54h4.76c-.075-.625-.331-1.134-.77-1.526-.429-.401-.966-.602-1.61-.602zm14.816-1.134c.934 0 1.671.27 2.212.812.551.541.826 1.344.826 2.408V61h-1.344v-4.116c0-.719-.168-1.26-.504-1.624-.326-.364-.798-.546-1.414-.546-.681 0-1.222.215-1.624.644-.401.42-.602 1.027-.602 1.82V61h-1.344v-4.116c0-.719-.168-1.26-.504-1.624-.326-.364-.798-.546-1.414-.546-.681 0-1.222.215-1.624.644-.401.42-.602 1.027-.602 1.82V61h-1.344v-7.42h1.288v1.106a2.559 2.559 0 011.064-.868c.439-.205.938-.308 1.498-.308.579 0 1.092.117 1.54.35.448.233.794.574 1.036 1.022.28-.43.668-.765 1.162-1.008a3.855 3.855 0 011.694-.364zm9.445 0c.719 0 1.363.159 1.932.476a3.37 3.37 0 011.33 1.33c.327.57.49 1.227.49 1.974 0 .747-.163 1.41-.49 1.988a3.37 3.37 0 01-1.33 1.33c-.569.317-1.213.476-1.932.476a3.486 3.486 0 01-1.47-.308 3.063 3.063 0 01-1.12-.896v3.836h-1.344V53.58h1.288v1.176c.299-.41.677-.719 1.134-.924a3.518 3.518 0 011.512-.322zm-.112 6.398c.476 0 .901-.107 1.274-.322.383-.224.682-.532.896-.924.224-.401.336-.859.336-1.372 0-.513-.112-.966-.336-1.358a2.245 2.245 0 00-.896-.924 2.508 2.508 0 00-1.274-.322c-.466 0-.891.112-1.274.336a2.4 2.4 0 00-.896.91c-.214.392-.322.845-.322 1.358 0 .513.108.97.322 1.372.215.392.514.7.896.924.383.215.808.322 1.274.322zm5.721-9.296h1.344V61h-1.344V50.612zm7.088 10.472c-.737 0-1.4-.163-1.988-.49a3.62 3.62 0 01-1.386-1.344c-.326-.579-.49-1.232-.49-1.96s.164-1.377.49-1.946A3.49 3.49 0 01245.985 54c.588-.327 1.251-.49 1.988-.49.738 0 1.396.163 1.974.49a3.392 3.392 0 011.372 1.344c.336.57.504 1.218.504 1.946s-.168 1.381-.504 1.96a3.514 3.514 0 01-1.372 1.344c-.578.327-1.236.49-1.974.49zm0-1.176c.476 0 .901-.107 1.274-.322.383-.224.682-.532.896-.924a2.86 2.86 0 00.322-1.372c0-.513-.107-.966-.322-1.358a2.245 2.245 0 00-.896-.924 2.508 2.508 0 00-1.274-.322c-.476 0-.905.107-1.288.322a2.375 2.375 0 00-.896.924c-.214.392-.322.845-.322 1.358 0 .513.108.97.322 1.372.224.392.523.7.896.924.383.215.812.322 1.288.322zm12.07-6.328l-3.598 8.162c-.317.756-.691 1.288-1.12 1.596-.42.308-.929.462-1.526.462-.364 0-.719-.06-1.064-.182a2.109 2.109 0 01-.84-.504l.574-1.008c.383.364.826.546 1.33.546.327 0 .597-.089.812-.266.224-.168.425-.462.602-.882l.238-.518-3.276-7.406h1.4l2.59 5.936 2.562-5.936h1.316zm7.755 3.752c0 .103-.009.238-.028.406h-6.02c.084.653.369 1.18.854 1.582.495.392 1.106.588 1.834.588.887 0 1.601-.299 2.142-.896l.742.868a3.24 3.24 0 01-1.26.896 4.307 4.307 0 01-1.666.308c-.784 0-1.479-.159-2.086-.476a3.543 3.543 0 01-1.414-1.358c-.326-.579-.49-1.232-.49-1.96 0-.719.159-1.367.476-1.946a3.475 3.475 0 011.33-1.344 3.787 3.787 0 011.918-.49c.71 0 1.34.163 1.89.49.56.317.994.765 1.302 1.344.318.579.476 1.241.476 1.988zm-3.668-2.688c-.644 0-1.185.196-1.624.588-.429.392-.681.905-.756 1.54h4.76c-.074-.625-.331-1.134-.77-1.526-.429-.401-.966-.602-1.61-.602zm12.241 2.688c0 .103-.01.238-.028.406h-6.02c.084.653.368 1.18.854 1.582.494.392 1.106.588 1.834.588.886 0 1.6-.299 2.142-.896l.742.868a3.24 3.24 0 01-1.26.896 4.31 4.31 0 01-1.666.308c-.784 0-1.48-.159-2.086-.476a3.537 3.537 0 01-1.414-1.358c-.327-.579-.49-1.232-.49-1.96 0-.719.158-1.367.476-1.946a3.469 3.469 0 011.33-1.344 3.781 3.781 0 011.918-.49c.709 0 1.339.163 1.89.49.56.317.994.765 1.302 1.344.317.579.476 1.241.476 1.988zm-3.668-2.688c-.644 0-1.186.196-1.624.588-.43.392-.682.905-.756 1.54h4.76c-.075-.625-.332-1.134-.77-1.526-.43-.401-.966-.602-1.61-.602zm7.662 6.44c-.607 0-1.19-.08-1.75-.238-.56-.168-.999-.378-1.316-.63l.56-1.064c.327.233.723.42 1.19.56.467.14.938.21 1.414.21 1.176 0 1.764-.336 1.764-1.008a.652.652 0 00-.238-.532 1.44 1.44 0 00-.602-.28 10.54 10.54 0 00-1.008-.21c-.597-.093-1.087-.2-1.47-.322a2.264 2.264 0 01-.966-.616c-.271-.29-.406-.695-.406-1.218 0-.672.28-1.209.84-1.61.56-.41 1.311-.616 2.254-.616.495 0 .989.06 1.484.182.495.121.901.285 1.218.49l-.574 1.064c-.607-.392-1.321-.588-2.142-.588-.569 0-1.003.093-1.302.28-.299.187-.448.434-.448.742 0 .243.084.434.252.574.168.14.373.243.616.308.252.065.602.14 1.05.224.597.103 1.078.215 1.442.336.373.112.691.308.952.588.261.28.392.672.392 1.176 0 .672-.289 1.209-.868 1.61-.569.392-1.349.588-2.338.588z"
      ></path>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M60 23.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm-35 27c0-5.6 4.4-10 10-10s10 4.4 10 10-4.4 10-10 10-10-4.4-10-10zm10 7c-3.8 0-7-3.2-7-7s3.2-7 7-7 7 3.2 7 7-3.2 7-7 7zm18-23.2l-1.6-1.6-4.8 4.8 3.3 3.44c.7.74 1.1 1.72 1.1 2.76v8.8c0 1.1-.9 2-2 2s-2-.9-2-2v-8l-6.4-5.6c-.8-.6-1.2-1.6-1.2-2.8 0-1 .4-2 1.2-2.8l5.6-5.6c.6-.8 1.6-1.2 2.8-1.2 1.2 0 2.2.4 3.2 1.2l3.8 3.8c1.46 1.44 3.28 2.5 5.5 2.86.96.16 1.7 1 1.7 1.98 0 1.22-1.08 2.18-2.28 2-3.16-.48-5.8-1.92-7.92-4.04zm10 6.2c-5.6 0-10 4.4-10 10s4.4 10 10 10 10-4.4 10-10-4.4-10-10-10zm-7 10c0 3.8 3.2 7 7 7s7-3.2 7-7-3.2-7-7-7-7 3.2-7 7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Cycle;
