export default (prevRouterProps, { location }) => {
  if (prevRouterProps) {
    if (/\/post\//.test(location.pathname)) {
      window.postsBg = window.postsBg || document.getElementById('postsBg')
      const { scrollY, innerHeight, getComputedStyle, postsBg } = window
      postsBg.style.width = '100%'
      postsBg.style.maxWidth = '1010px'
      postsBg.style.height = '100vh'
      postsBg.style.overflow = 'hidden'
      postsBg.style.position = 'fixed'
      postsBg.style.paddingRight = '30px'
      postsBg.scrollTop = scrollY
      window.__POSTS_BG_SCROLL_Y__ = scrollY
    }
    if (/\/post\//.test(prevRouterProps.location.pathname)) {
      window.postsBg = window.postsBg || document.getElementById('postsBg')
      const { postsBg } = window
      postsBg.style.width = 'auto'
      postsBg.style.maxWidth = 'none'
      postsBg.style.height = 'auto'
      postsBg.style.overflow = 'visible'
      postsBg.style.position = 'static'
      postsBg.style.paddingRight = '0px'
      setTimeout(() => { window.scrollTo(0, window.__POSTS_BG_SCROLL_Y__) }, 0)
    }
  }
  return true
}
