import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10)
    // Save to database
    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    // Verify user and password
    // Generate JWT
    const token = jwt.sign({ email, role: 'user' }, process.env.JWT_SECRET!, { expiresIn: '7d' })
    res.json({ token, user: { email } })
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

export default router
