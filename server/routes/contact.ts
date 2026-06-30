import { Router } from 'express'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name: _name, email: _email, company: _company, budget: _budget, projectType: _projectType, message: _message } = req.body
    // Save to database
    // Send email notification
    res.status(200).json({ message: 'Message sent successfully' })
  } catch (_error) {
    res.status(500).json({ error: 'Failed to send message' })
  }
})

router.get('/', async (req, res) => {
  try {
    // Get all contact requests
    res.json({ contacts: [] })
  } catch (_error) {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

export default router