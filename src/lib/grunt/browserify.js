module.exports = {
   options: {
       transform: [
           [
               "babelify",
               {
                   "presets": [
                       [
                           "@babel/preset-env", {
                               "targets": {
                                   "node":
                                   "current"
                               }
                           }
                       ]
                   ]
               }
           ]
       ],
       browserifyOptions: {
           debug: true,
       }
   },
   app: {
       src: ["../scripts/domRenderer.js"],
       dest: "../../public/bundle.js"
   }
   }
