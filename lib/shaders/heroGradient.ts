// Hero fluid gradient shaders (simplex-noise blend across the 786 mint palette).
// Kept as TS strings so Next/webpack needs no .glsl loader.

export const vertexShader = /* glsl */ `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

export const fragmentShader = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;

const vec3 colorCream = vec3(0.980, 0.969, 0.941);
const vec3 colorMintLight = vec3(0.780, 0.949, 0.859);
const vec3 colorMint = vec3(0.498, 0.878, 0.706);
const vec3 colorMintDark = vec3(0.247, 0.659, 0.478);

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uTime * 0.08;

  float wave1 = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
  float wave2 = cos(uv.y * 2.5 - t * 0.8) * 0.5 + 0.5;
  float wave3 = sin((uv.x + uv.y) * 2.0 + t * 1.3) * 0.5 + 0.5;

  // Light base: cream to mint-light, this is the dominant field
  float baseMix = wave1 * 0.4 + wave2 * 0.3 + 0.3;
  vec3 baseColor = mix(colorCream, colorMintLight, baseMix);

  // Accent flow: mint and mint-dark appear only in narrower bands, layered on top
  float accentStrength = pow(wave3, 3.0) * 0.55; // pow() narrows the band, keeps most of the canvas light
  vec3 accentColor = mix(colorMint, colorMintDark, wave2);

  vec3 finalColor = mix(baseColor, accentColor, accentStrength);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
