// PUT YOUR CODE HERE

const timeline = gsap.timeline();

timeline.from('.red', {
  x: '-100%',
  y: '-100%',
})
  .from('.green', {
    x: '100%',
    left: '100vw',
    y: '-100%',
  })
  .from('.blue', {
    x: '100%',
    left: '100vw',
    y: '100%',
    bottom: '-100vh',
  })
  .from('.yellow', {
    x: '-100%',
    y: '-100%',
    bottom: '-100vh',
  })
  .to('.red', {
    x: '-100%',
    left: '100vw',
    borderRadius: '50%',
    backgroundColor: 'green'
  })
  .to('.green', {
    y: '-100%',
    top: '100%',
    borderRadius: '50%',
    backgroundColor: 'blue'
  }, '<')
  .to('.blue', {
      x: '100vw',
      left: '-100%',
      borderRadius: '50%',
      backgroundColor: 'yellow'
  }, '<')
  .to('.yellow', {
    top: '0',
      borderRadius: '50%',
      backgroundColor: 'red'
  }, '<')
  .to('.yellow', {
    x: '-100%',
    duration: 0.5
  })
  .to('.blue', {
    left: 'calc(-100vw - 200px)',
    duration: 0.5
  }, '<')
  .to('.red', {
    left: 'calc(100vw + 200px)',
  }, '<')
  .to('.green', {
    left: '100vw',
  }, '<')
