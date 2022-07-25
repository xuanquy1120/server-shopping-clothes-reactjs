import mongoose from 'db/mongo'


const userSchema = new mongoose.Schema({
  username: {
    required: true,
    trim: true,
    type: String,
    unique: true
  },
  email: {
    required: true,
    trim: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    trim: true,
    type: String,
  },
}, {
  timestamps: true
})

export const User = mongoose.model('users', userSchema)