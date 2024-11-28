const Shimmer = (
  width: number = 800,
  height: number = 400,
  colors: { start: string; middle: string; end: string } = {
    start: "#e0e0e0",
    middle: "#cfcfcf",
    end: "#e0e0e0",
  }
) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="gradient">
      <stop stop-color="${colors.start}" offset="20%" />
      <stop stop-color="${colors.middle}" offset="50%" />
      <stop stop-color="${colors.end}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${colors.start}" />
  <rect id="shimmerRect" width="${width}" height="${height}" fill="url(#gradient)" />
  <animate xlink:href="#shimmerRect" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
</svg>`;

export default Shimmer;
