import type { NextApiRequest, NextApiResponse } from 'next'

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Handle login logic
    // Authenticate user
    res.status(200).json({ message: 'Logged in successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default Login;