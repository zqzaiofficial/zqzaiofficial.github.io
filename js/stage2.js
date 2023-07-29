var copyButton1 = document.getElementById("copyButton1");
copyButton1.addEventListener("click", function() {
    try {
        var copyText = `{
    "format_version": 2,
    "header": {
        "name": "Your Behavior Pack Name",
        "description": "Your Behavior Pack Description",
        "uuid": "Your UUID",
        "version": [
            1,
            1,
            0
        ],
        "min_engine_version": [
            1,
            18,
            0
        ]
    },
    "modules": [
        {
            "type": "data",
            "uuid": "Your UUID",
            "version": [
                0,
                0,
                1
            ]
        },
        {
            "type": "script",
            "language": "javascript",
            "entry": "scripts/index.js",
            "uuid": "Your UUID",
            "version": "1.4.0-beta"
        }
    ],
    "metadata": {
        "authors": [
            "Your Name"
        ]
    },
    "dependencies": [
        {
            "description": "@minecraft/server module dependency",
            "module_name": "@minecraft/server",
            "version": "1.4.0-beta"
        },
        {
            "description": "@minecraft/server-ui module dependency",
            "module_name": "@minecraft/server-ui",
            "version": "1.2.0-beta"
        }
    ]
}`
        navigator.clipboard.writeText(copyText);
        copyButton1.textContent = "Copied!";
        setTimeout(function() {
            copyButton1.textContent = "Copy";
        }, 3000);
      } catch (err) {
        console.error('Failed to copy: ', err);
        copyButton1.textContent = "Failed to copy :(";
        setTimeout(function() {
            copyButton1.textContent = "Copy";
        }, 3000);
      }
}, false);

var copyButton2 = document.getElementById("copyButton2");
copyButton2.addEventListener("click", function() {
    try {
        var copyText = `npm i @minecraft/server
npm i @minecraft/server-gametest
npm i @minecraft/server-ui
npm i @minecraft/server@1.4.0-beta.1.20.12`
        navigator.clipboard.writeText(copyText);
        copyButton2.textContent = "Copied!";
        setTimeout(function() {
            copyButton2.textContent = "Copy";
        }, 3000);
      } catch (err) {
        console.error('Failed to copy: ', err);
        copyButton2.textContent = "Failed to copy :(";
        setTimeout(function() {
            copyButton2.textContent = "Copy";
        }, 3000);
      }
}, false);