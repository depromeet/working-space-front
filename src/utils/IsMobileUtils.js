export default function isMobile() {
  const pcDevice = "win16|win32|win64|mac|macintel";

  if (navigator.platform) {
    if (pcDevice.indexOf(navigator.platform.toLowerCase()) < 0) {
      return true;
    }
    return false;
  }
}
