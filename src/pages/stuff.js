// Custom redirect of /stuff to /
export default function Component() {
  const isBrowser = () => typeof window !== 'undefined'
  if (isBrowser()) {
    window.location = '/'
  }
  return null
}
