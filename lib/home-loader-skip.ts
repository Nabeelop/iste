let skipNextHomeLoader = false;

export function markSkipNextHomeLoader() {
  skipNextHomeLoader = true;
}

export function peekSkipNextHomeLoader() {
  return skipNextHomeLoader;
}

export function consumeSkipNextHomeLoader() {
  const shouldSkip = skipNextHomeLoader;
  skipNextHomeLoader = false;
  return shouldSkip;
}
