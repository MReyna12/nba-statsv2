// NextJS build makes too many calls to the API when building for production, which causes the API to return an error.
// This function allows the build process to go through.
export async function avoidRateLimit() {
  if (process.env.NODE_ENV === "production") {
    await sleep();
  }
}

function sleep(ms = 500) {
  return new Promise((res) => setTimeout(res, ms));
}
