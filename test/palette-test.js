import test from 'ava'
import tachyonsGenerator from '../'

test.only('palette is generated for colors array when included in config', async t => {
  const tachy = tachyonsGenerator({ palette: '#07cccc' })
  const { variables } = await tachy.modules()

  t.snapshot(variables.trim())
})
