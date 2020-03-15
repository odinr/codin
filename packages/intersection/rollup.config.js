import createConfig from "rollup-config-webcomponent";

export default process.env.bundle === true
  ? createConfig({
      input: {
        "intersection-element": "src/intersection-element.ts",
        "intersection-event": "src/intersection-event.ts"
      },
      dir: "lib"
    })
  : createConfig({
      input: "src/intersection-element.ts",
      dir: "dist",
      compress: true
    });
