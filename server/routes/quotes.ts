import { Router } from 'express'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, company, service, budget, timeline, requirements } = req.body
    const quoteId = `QTE-${Date.now().toString(36).toUpperCase()}`
    // Save to database
    // Send email confirmation
    res.status(201).json({ quoteId, message: 'Quote request submitted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit quote request' })
  }
})

router.get('/', async (req, res) => {
  try {
    // Get all quote requests
    res.json({ quotes: [] })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' })
  }
})

export default router
