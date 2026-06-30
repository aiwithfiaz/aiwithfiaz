import { Router } from 'express'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name: _name, email: _email, company: _company, service: _service, budget: _budget, timeline: _timeline, requirements: _requirements } = req.body
    const quoteId = `QTE-${Date.now().toString(36).toUpperCase()}`
    // Save to database
    // Send email confirmation
    res.status(201).json({ quoteId, message: 'Quote request submitted' })
  } catch {
    res.status(500).json({ error: 'Failed to submit quote request' })
  }
})

router.get('/', async (req, res) => {
  try {
    // Get all quote requests
    res.json({ quotes: [] })
  } catch {
    res.status(500).json({ error: 'Failed to fetch quotes' })
  }
})

export default router