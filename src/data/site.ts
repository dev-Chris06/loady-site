// Shared links and facts used across the site's pages.

const repo = "https://github.com/DazBot13-boopt/dazdownloader";

export const links = {
  repo,
  releases: `${repo}/releases/latest`,
  apkArm64: `${repo}/releases/latest/download/app-arm64-v8a-release.apk`,
  apkArmv7: `${repo}/releases/latest/download/app-armeabi-v7a-release.apk`,
  latestReleaseApi: "https://api.github.com/repos/DazBot13-boopt/dazdownloader/releases/latest",
  issues: `${repo}/issues`,
};

// Contact shown in the privacy policy and the footer. Temporary personal
// address: replace with the dedicated Loady e-mail address once it exists.
const contactEmail = "christopherahoglele9@gmail.com";
export const contact = {
  href: `mailto:${contactEmail}`,
  label: contactEmail,
};

export const minAndroid = "Android 7.0";

export const team = [
  { name: "Daziano TOGBEDJI", github: "DazBot13-boopt" },
  { name: "Christopher AHO GLELE", github: "dev-Chris06" },
  { name: "Fritzell AKOBI", github: "fritzellbusiness-ux" },
];

export const privacyUpdated = "1er novembre 2026";
